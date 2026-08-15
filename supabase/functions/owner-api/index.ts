import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
import { Buffer } from "node:buffer";
import { createHash, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://wiwiwi-coder7.github.io",
  "Access-Control-Allow-Headers": "apikey, authorization, content-type, x-owner-token",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Content-Type": "application/json",
};
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const serviceRole = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const database = createClient(supabaseUrl, serviceRole, { auth: { persistSession: false, autoRefreshToken: false } });
function response(payload: unknown, status = 200) { return new Response(JSON.stringify(payload), { status, headers: corsHeaders }); }
function randomToken() { return randomBytes(32).toString("base64url"); }
async function digest(value: string) { return createHash("sha256").update(value).digest("hex"); }

async function validPassword(password: string, salt: string, expected: string) {
  const candidate = Buffer.from(scryptSync(password, salt, 64).toString("hex"), "hex");
  const trusted = Buffer.from(expected, "hex");
  return candidate.length === trusted.length && timingSafeEqual(candidate, trusted);
}

async function ownerToken(request: Request) {
  const token = request.headers.get("x-owner-token") ?? "";
  if (!token) return null;
  const { data, error } = await database.from("admin_sessions").select("id, credential_id, expires_at").eq("token_hash", await digest(token)).gt("expires_at", new Date().toISOString()).maybeSingle();
  if (error) throw new Error(error.message);
  return data;
}

async function requireOwner(request: Request) {
  const session = await ownerToken(request);
  if (!session) throw new Error("OWNER_AUTH_REQUIRED");
  return session;
}

Deno.serve(async request => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const url = new URL(request.url);
    const action = url.searchParams.get("action") ?? "";

    if (action === "login" && request.method === "POST") {
      const body = await request.json();
      if (typeof body.identifier !== "string" || typeof body.password !== "string") return response({ error: "INVALID_INPUT" }, 400);
      const { data: credential, error } = await database.from("owner_credentials").select("id, password_salt, password_hash, is_active").eq("identifier", body.identifier).maybeSingle();
      if (error) throw new Error(error.message);
      if (!credential?.is_active || !(await validPassword(body.password, credential.password_salt, credential.password_hash))) return response({ error: "INVALID_CREDENTIALS" }, 401);
      const token = randomToken();
      const expiresAt = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString();
      const { error: sessionError } = await database.from("admin_sessions").insert({ id: crypto.randomUUID(), credential_id: credential.id, token_hash: await digest(token), expires_at: expiresAt });
      if (sessionError) throw new Error(sessionError.message);
      return response({ token, expiresAt });
    }

    if (action === "session") return response({ authenticated: Boolean(await ownerToken(request)) });
    if (action === "logout" && request.method === "POST") {
      const token = request.headers.get("x-owner-token") ?? "";
      if (token) await database.from("admin_sessions").delete().eq("token_hash", await digest(token));
      return response({ success: true });
    }

    if (action === "persian-overrides") {
      const { data, error } = await database.from("localized_story_overrides").select("id, locale, scene_title, blocks, choice_labels, updated_at").eq("locale", "fa").order("updated_at", { ascending: false });
      if (error) throw new Error(error.message);
      return response({ overrides: data ?? [] });
    }

    if (action === "track" && request.method === "POST") {
      const body = await request.json();
      const allowed = ["game_start", "node_view", "choice_selected", "chapter_reached", "game_complete"];
      if (typeof body.installationId !== "string" || !allowed.includes(body.eventType)) return response({ error: "INVALID_EVENT" }, 400);
      const { error } = await database.from("telemetry_events").insert({ id: crypto.randomUUID(), installation_id: body.installationId, event_type: body.eventType, chapter: Number.isInteger(body.chapter) ? body.chapter : null, node_id: typeof body.nodeId === "string" ? body.nodeId : null, choice_id: typeof body.choiceId === "string" ? body.choiceId : null, locale: body.locale === "fa" ? "fa" : "en" });
      if (error) throw new Error(error.message);
      return response({ stored: true });
    }

    if (action === "dashboard") {
      await requireOwner(request);
      const { data: events, error } = await database.from("telemetry_events").select("installation_id, event_type, chapter, choice_id").order("created_at", { ascending: false }).limit(5000);
      if (error) throw new Error(error.message);
      const all = events ?? [];
      const installations = new Set(all.map(event => event.installation_id)).size;
      const counts = (eventType: string) => all.filter(event => event.event_type === eventType).length;
      const chapterReach = Array.from({ length: 10 }, (_, index) => ({ chapter: index + 1, reached: new Set(all.filter(event => event.chapter === index + 1).map(event => event.installation_id)).size }));
      const choiceEvents = all.filter(event => event.event_type === "choice_selected" && typeof event.choice_id === "string");
      const choiceMetrics = new Map<string, { id: string; nodeId: string; option: string; chapter: number | null; selections: number; installations: Set<string> }>();
      const nodeMetrics = new Map<string, { nodeId: string; chapter: number | null; selections: number; installations: Set<string>; options: Map<string, { option: string; selections: number; installations: Set<string> }> }>();
      for (const event of choiceEvents) {
        const choiceId = event.choice_id!;
        const splitAt = choiceId.lastIndexOf("-");
        const nodeId = splitAt > 0 ? choiceId.slice(0, splitAt) : choiceId;
        const option = splitAt > 0 ? choiceId.slice(splitAt + 1) : "?";
        const metric = choiceMetrics.get(choiceId) ?? { id: choiceId, nodeId, option, chapter: event.chapter, selections: 0, installations: new Set<string>() };
        metric.selections += 1; metric.installations.add(event.installation_id); choiceMetrics.set(choiceId, metric);
        const node = nodeMetrics.get(nodeId) ?? { nodeId, chapter: event.chapter, selections: 0, installations: new Set<string>(), options: new Map() };
        node.selections += 1; node.installations.add(event.installation_id);
        const optionMetric = node.options.get(option) ?? { option, selections: 0, installations: new Set<string>() };
        optionMetric.selections += 1; optionMetric.installations.add(event.installation_id); node.options.set(option, optionMetric); nodeMetrics.set(nodeId, node);
      }
      const choices = Array.from(choiceMetrics.values()).map(metric => ({ id: metric.id, nodeId: metric.nodeId, option: metric.option, chapter: metric.chapter, selections: metric.selections, uniqueInstallations: metric.installations.size })).sort((left, right) => right.selections - left.selections || left.id.localeCompare(right.id)).slice(0, 24);
      const choiceNodes = Array.from(nodeMetrics.values()).map(metric => ({ nodeId: metric.nodeId, chapter: metric.chapter, selections: metric.selections, uniqueInstallations: metric.installations.size, options: Array.from(metric.options.values()).map(option => ({ option: option.option, selections: option.selections, uniqueInstallations: option.installations.size, percent: Math.round((option.selections / Math.max(1, metric.selections)) * 100) })).sort((left, right) => right.selections - left.selections || left.option.localeCompare(right.option)) })).sort((left, right) => right.selections - left.selections || left.nodeId.localeCompare(right.nodeId)).slice(0, 12);
      return response({ installations, starts: counts("game_start"), completions: counts("game_complete"), events: all.length, choiceEvents: choiceEvents.length, choicePaths: choiceMetrics.size, chapterReach, choices, choiceNodes });
    }

    if (action === "save-persian-override" && request.method === "POST") {
      await requireOwner(request);
      const body = await request.json();
      if (typeof body.nodeId !== "string" || typeof body.sceneTitle !== "string" || !Array.isArray(body.blocks) || !Array.isArray(body.choiceLabels)) return response({ error: "INVALID_OVERRIDE" }, 400);
      const { error } = await database.from("localized_story_overrides").upsert({ id: body.nodeId, locale: "fa", scene_title: body.sceneTitle, blocks: body.blocks, choice_labels: body.choiceLabels }, { onConflict: "id" });
      if (error) throw new Error(error.message);
      return response({ nodeId: body.nodeId });
    }

    if (action === "delete-persian-override" && request.method === "DELETE") {
      await requireOwner(request);
      const nodeId = url.searchParams.get("nodeId");
      if (!nodeId) return response({ error: "INVALID_NODE" }, 400);
      const { error } = await database.from("localized_story_overrides").delete().eq("id", nodeId);
      if (error) throw new Error(error.message);
      return response({ nodeId });
    }
    return response({ error: "NOT_FOUND" }, 404);
  } catch (error) {
    return response({ error: error instanceof Error ? error.message : "UNKNOWN_ERROR" }, error instanceof Error && error.message === "OWNER_AUTH_REQUIRED" ? 401 : 500);
  }
});
