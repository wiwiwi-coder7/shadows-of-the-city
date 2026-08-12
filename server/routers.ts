import { TRPCError } from "@trpc/server";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { z } from "zod";
import { audioAssets, audioAssignments, editorialContent, localizedStoryOverrides, telemetryEvents } from "../drizzle/schema";
import { clearOwnerSession, loginOwner, ownerSession, requireOwner } from "./adminAuth";
import { getDb, getRecentTelemetry, listAudioAssets, listAudioAssignments, listEditorialContent, listLocalizedStoryOverrides } from "./db";
import { persianStoryNodes } from "../client/src/data/story.fa";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { storagePut } from "./storage";
import { validateManagedStory } from "./storyValidation";

const ownerProcedure = publicProcedure.use(async ({ ctx, next }) => {
  try {
    await requireOwner(ctx.req);
    return next();
  } catch {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Owner authentication is required." });
  }
});

const contentInput = z.object({
  id: z.string().min(2).max(96).optional(),
  kind: z.enum(["story-node", "codex", "character", "configuration"]),
  title: z.string().min(1).max(255),
  chapter: z.number().int().min(1).max(10).nullable().optional(),
  status: z.enum(["draft", "published"]).default("draft"),
  payload: z.record(z.string(), z.unknown()),
});

const audioInput = z.object({
  id: z.string().min(2).max(96).optional(),
  name: z.string().min(1).max(255),
  category: z.enum(["music", "ambience", "sfx"]),
  url: z.string().url(),
  durationSeconds: z.number().int().min(0).nullable().optional(),
});

const localizedStoryOverrideInput = z.object({
  nodeId: z.string().min(3).max(96),
  sceneTitle: z.string().trim().min(1).max(240),
  blocks: z.array(z.string().trim().min(1).max(16_000)).max(40),
  choiceLabels: z.array(z.string().trim().min(1).max(2_000)).max(12),
});

function verifyPersianOverrideShape(input: z.infer<typeof localizedStoryOverrideInput>) {
  const baseNode = persianStoryNodes[input.nodeId];
  if (!baseNode) throw new TRPCError({ code: "NOT_FOUND", message: "The Persian base node was not found." });
  if (input.blocks.length !== baseNode.blocks.length) throw new TRPCError({ code: "BAD_REQUEST", message: "The number of Persian blocks must match the base story node." });
  if (input.choiceLabels.length !== baseNode.choices.length) throw new TRPCError({ code: "BAD_REQUEST", message: "The number of Persian choice labels must match the base story node." });
}

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  game: router({
    publishedContent: publicProcedure.query(async () => {
      const db = await getDb();
      if (!db) return [];
      return db.select().from(editorialContent).where(eq(editorialContent.status, "published"));
    }),
    persianStoryOverrides: publicProcedure.query(() => listLocalizedStoryOverrides()),
    audioCues: publicProcedure.query(async () => {
      const [assets, assignments] = await Promise.all([listAudioAssets(), listAudioAssignments()]);
      const byId = new Map(assets.map(asset => [asset.id, asset]));
      return assignments.map(assignment => {
        const asset = byId.get(assignment.audioAssetId);
        return asset ? { targetType: assignment.targetType, targetId: assignment.targetId, volume: assignment.volume, loop: Boolean(assignment.loop), url: asset.url, category: asset.category } : null;
      }).filter((cue): cue is NonNullable<typeof cue> => Boolean(cue));
    }),
    track: publicProcedure.input(z.object({
      installationId: z.string().uuid(),
      eventType: z.enum(["game_start", "node_view", "choice_selected", "chapter_reached", "game_complete"]),
      chapter: z.number().int().min(1).max(10).nullable().optional(),
      nodeId: z.string().max(96).nullable().optional(),
      choiceId: z.string().max(128).nullable().optional(),
      locale: z.string().max(12).default("en"),
    })).mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) return { stored: false };
      await db.insert(telemetryEvents).values({ id: nanoid(), installationId: input.installationId, eventType: input.eventType, chapter: input.chapter ?? null, nodeId: input.nodeId ?? null, choiceId: input.choiceId ?? null, locale: input.locale });
      return { stored: true };
    }),
  }),
  admin: router({
    login: publicProcedure.input(z.object({ identifier: z.string().min(4).max(96), password: z.string().min(12).max(256) })).mutation(async ({ input, ctx }) => {
      const ok = await loginOwner(input.identifier, input.password, ctx.res);
      if (!ok) throw new TRPCError({ code: "UNAUTHORIZED", message: "The archive does not recognize those credentials." });
      return { success: true };
    }),
    session: publicProcedure.query(async ({ ctx }) => ({ authenticated: Boolean(await ownerSession(ctx.req)) })),
    logout: publicProcedure.mutation(({ ctx }) => { clearOwnerSession(ctx.res); return { success: true }; }),
    dashboard: ownerProcedure.query(async () => {
      const events = await getRecentTelemetry();
      const uniqueInstallations = new Set(events.map(event => event.installationId));
      const count = (eventType: string) => events.filter(event => event.eventType === eventType).length;
      const chapterReach = Array.from({ length: 10 }, (_, index) => {
        const chapter = index + 1;
        return { chapter, reached: new Set(events.filter(event => event.chapter === chapter).map(event => event.installationId)).size };
      });
      const choices = Object.entries(events.filter(event => event.eventType === "choice_selected" && event.choiceId).reduce<Record<string, number>>((acc, event) => { const key = event.choiceId!; acc[key] = (acc[key] ?? 0) + 1; return acc; }, {})).map(([id, count]) => ({ id, count })).sort((a, b) => b.count - a.count).slice(0, 8);
      return { installations: uniqueInstallations.size, starts: count("game_start"), completions: count("game_complete"), choices, chapterReach, events: events.length };
    }),
    content: ownerProcedure.query(() => listEditorialContent()),
    persianStoryOverrides: ownerProcedure.query(() => listLocalizedStoryOverrides()),
    savePersianStoryOverride: ownerProcedure.input(localizedStoryOverrideInput).mutation(async ({ input }) => {
      verifyPersianOverrideShape(input);
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Persian story storage is unavailable." });
      await db.insert(localizedStoryOverrides).values({ id: input.nodeId, locale: "fa", sceneTitle: input.sceneTitle, blocks: input.blocks, choiceLabels: input.choiceLabels }).onDuplicateKeyUpdate({ set: { sceneTitle: input.sceneTitle, blocks: input.blocks, choiceLabels: input.choiceLabels } });
      return { nodeId: input.nodeId };
    }),
    deletePersianStoryOverride: ownerProcedure.input(z.object({ nodeId: z.string().min(3).max(96) })).mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Persian story storage is unavailable." });
      await db.delete(localizedStoryOverrides).where(eq(localizedStoryOverrides.id, input.nodeId));
      return { nodeId: input.nodeId };
    }),
    saveContent: ownerProcedure.input(contentInput).mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Content storage is unavailable." });
      const id = input.id ?? nanoid();
      await db.insert(editorialContent).values({ id, kind: input.kind, title: input.title, chapter: input.chapter ?? null, status: input.status, payload: input.payload }).onDuplicateKeyUpdate({ set: { kind: input.kind, title: input.title, chapter: input.chapter ?? null, status: input.status, payload: input.payload } });
      return { id };
    }),
    deleteContent: ownerProcedure.input(z.object({ id: z.string().min(2).max(96) })).mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Content storage is unavailable." });
      await db.delete(editorialContent).where(eq(editorialContent.id, input.id));
      return { success: true };
    }),
    audioAssets: ownerProcedure.query(() => listAudioAssets()),
    audioAssignments: ownerProcedure.query(() => listAudioAssignments()),
    saveAudioAsset: ownerProcedure.input(audioInput).mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Audio storage is unavailable." });
      const id = input.id ?? nanoid();
      await db.insert(audioAssets).values({ id, name: input.name, category: input.category, url: input.url, durationSeconds: input.durationSeconds ?? null }).onDuplicateKeyUpdate({ set: { name: input.name, category: input.category, url: input.url, durationSeconds: input.durationSeconds ?? null } });
      return { id };
    }),
    uploadAudio: ownerProcedure.input(z.object({ fileName: z.string().min(1).max(180), mimeType: z.string().regex(/^audio\/[a-z0-9.+-]+$/i), base64: z.string().min(8).max(14_000_000) })).mutation(async ({ input }) => {
      const buffer = Buffer.from(input.base64, "base64");
      if (!buffer.length || buffer.length > 10 * 1024 * 1024) throw new TRPCError({ code: "PAYLOAD_TOO_LARGE", message: "Audio uploads must be between 1 byte and 10 MB." });
      const safeName = input.fileName.replace(/[^a-zA-Z0-9._-]/g, "_");
      const stored = await storagePut(`shadows-of-the-city/audio/${safeName}`, buffer, input.mimeType);
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Audio storage is unavailable." });
      const id = nanoid();
      const category = input.mimeType.includes("ambient") ? "ambience" : "music";
      await db.insert(audioAssets).values({ id, name: input.fileName, category, url: stored.url, durationSeconds: null });
      return { id, url: stored.url };
    }),
    assignAudio: ownerProcedure.input(z.object({ id: z.string().min(2).max(96).optional(), audioAssetId: z.string().min(2).max(96), targetType: z.enum(["chapter", "scene", "node"]), targetId: z.string().min(1).max(96), volume: z.number().int().min(0).max(100).default(70), loop: z.boolean().default(false) })).mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Audio storage is unavailable." });
      const id = input.id ?? nanoid();
      await db.insert(audioAssignments).values({ id, audioAssetId: input.audioAssetId, targetType: input.targetType, targetId: input.targetId, volume: input.volume, loop: input.loop ? 1 : 0 }).onDuplicateKeyUpdate({ set: { audioAssetId: input.audioAssetId, targetType: input.targetType, targetId: input.targetId, volume: input.volume, loop: input.loop ? 1 : 0 } });
      return { id };
    }),
    validate: ownerProcedure.query(async () => {
      const content = await listEditorialContent();
      const storyItems = content.filter(item => item.kind === "story-node");
      return validateManagedStory(storyItems.map(item => ({ id: item.id, payload: item.payload as Record<string, unknown> })));
    }),
  }),
});

export type AppRouter = typeof appRouter;
