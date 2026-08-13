import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { ENV } from "./_core/env";

type JsonRecord = Record<string, unknown>;

export type User = {
  id: number;
  openId: string;
  name: string | null;
  email: string | null;
  loginMethod: string | null;
  role: "admin" | "user";
  createdAt: Date;
  updatedAt: Date;
  lastSignedIn: Date;
};

export type EditorialContentRow = {
  id: string;
  kind: "story-node" | "codex" | "character" | "configuration";
  title: string;
  chapter: number | null;
  status: "draft" | "published";
  payload: JsonRecord;
  createdAt: Date;
  updatedAt: Date;
};

export type AudioAssetRow = {
  id: string;
  name: string;
  category: "music" | "ambience" | "sfx";
  url: string;
  durationSeconds: number | null;
  createdAt: Date;
  updatedAt: Date;
};

export type AudioAssignmentRow = {
  id: string;
  audioAssetId: string;
  targetType: "chapter" | "scene" | "node";
  targetId: string;
  volume: number;
  loop: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type TelemetryEventRow = {
  id: string;
  installationId: string;
  eventType: "game_start" | "node_view" | "choice_selected" | "chapter_reached" | "game_complete";
  chapter: number | null;
  nodeId: string | null;
  choiceId: string | null;
  locale: string;
  createdAt: Date;
};

export type OwnerCredentialRow = {
  id: number;
  identifier: string;
  passwordSalt: string;
  passwordHash: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type LocalizedStoryOverrideRow = {
  id: string;
  locale: "fa";
  sceneTitle: string;
  blocks: string[];
  choiceLabels: string[];
  createdAt: Date;
  updatedAt: Date;
};

let supabase: SupabaseClient | null = null;

function requireSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_KEY;
  if (!url || !key) throw new Error("Supabase server configuration is unavailable.");
  if (!supabase) supabase = createClient<any>(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  return supabase;
}

function requireData<T>(result: { data: T | null; error: { message: string } | null }) {
  if (result.error) throw new Error(`Supabase query failed: ${result.error.message}`);
  return result.data;
}

const asDate = (value: string) => new Date(value);

function mapContent(row: any): EditorialContentRow {
  return { id: row.id, kind: row.kind, title: row.title, chapter: row.chapter, status: row.status, payload: row.payload, createdAt: asDate(row.created_at), updatedAt: asDate(row.updated_at) };
}

function mapAudioAsset(row: any): AudioAssetRow {
  return { id: row.id, name: row.name, category: row.category, url: row.url, durationSeconds: row.duration_seconds, createdAt: asDate(row.created_at), updatedAt: asDate(row.updated_at) };
}

function mapAudioAssignment(row: any): AudioAssignmentRow {
  return { id: row.id, audioAssetId: row.audio_asset_id, targetType: row.target_type, targetId: row.target_id, volume: row.volume, loop: row.loop, createdAt: asDate(row.created_at), updatedAt: asDate(row.updated_at) };
}

function mapTelemetry(row: any): TelemetryEventRow {
  return { id: row.id, installationId: row.installation_id, eventType: row.event_type, chapter: row.chapter, nodeId: row.node_id, choiceId: row.choice_id, locale: row.locale, createdAt: asDate(row.created_at) };
}

function mapOwnerCredential(row: any): OwnerCredentialRow {
  return { id: row.id, identifier: row.identifier, passwordSalt: row.password_salt, passwordHash: row.password_hash, isActive: row.is_active, createdAt: asDate(row.created_at), updatedAt: asDate(row.updated_at) };
}

function mapLocalizedOverride(row: any): LocalizedStoryOverrideRow {
  return { id: row.id, locale: row.locale, sceneTitle: row.scene_title, blocks: row.blocks, choiceLabels: row.choice_labels, createdAt: asDate(row.created_at), updatedAt: asDate(row.updated_at) };
}

export async function upsertUser(user: { openId: string; name?: string | null; email?: string | null; loginMethod?: string | null; role?: "admin" | "user"; lastSignedIn?: Date }): Promise<void> {
  if (!user.openId) throw new Error("User openId is required");
  const client = requireSupabase();
  requireData(await client.from("users").upsert({
    open_id: user.openId,
    name: user.name ?? null,
    email: user.email ?? null,
    login_method: user.loginMethod ?? null,
    role: user.openId === ENV.ownerOpenId ? "admin" : user.role ?? "user",
    last_signed_in: (user.lastSignedIn ?? new Date()).toISOString(),
  }, { onConflict: "open_id" }));
}

export async function getUserByOpenId(openId: string) {
  const row: any = requireData<any>(await requireSupabase().from("users").select("*").eq("open_id", openId).maybeSingle() as any);
  return row ? { id: row.id, openId: row.open_id, name: row.name, email: row.email, loginMethod: row.login_method, role: row.role, createdAt: asDate(row.created_at), updatedAt: asDate(row.updated_at), lastSignedIn: asDate(row.last_signed_in) } as User : undefined;
}

export async function listEditorialContent() {
  const rows = requireData(await requireSupabase().from("editorial_content").select("*").order("updated_at", { ascending: false }));
  return (rows ?? []).map(mapContent);
}

export async function listPublishedEditorialContent() {
  const rows = requireData(await requireSupabase().from("editorial_content").select("*").eq("status", "published").order("updated_at", { ascending: false }));
  return (rows ?? []).map(mapContent);
}

export async function saveEditorialContent(input: Omit<EditorialContentRow, "createdAt" | "updatedAt">) {
  requireData(await requireSupabase().from("editorial_content").upsert({ id: input.id, kind: input.kind, title: input.title, chapter: input.chapter, status: input.status, payload: input.payload as never }, { onConflict: "id" }));
}

export async function deleteEditorialContent(id: string) {
  requireData(await requireSupabase().from("editorial_content").delete().eq("id", id));
}

export async function listAudioAssets() {
  const rows = requireData(await requireSupabase().from("audio_assets").select("*").order("updated_at", { ascending: false }));
  return (rows ?? []).map(mapAudioAsset);
}

export async function saveAudioAsset(input: Omit<AudioAssetRow, "createdAt" | "updatedAt">) {
  requireData(await requireSupabase().from("audio_assets").upsert({ id: input.id, name: input.name, category: input.category, url: input.url, duration_seconds: input.durationSeconds }, { onConflict: "id" }));
}

export async function listAudioAssignments() {
  const rows = requireData(await requireSupabase().from("audio_assignments").select("*").order("updated_at", { ascending: false }));
  return (rows ?? []).map(mapAudioAssignment);
}

export async function saveAudioAssignment(input: Omit<AudioAssignmentRow, "createdAt" | "updatedAt">) {
  requireData(await requireSupabase().from("audio_assignments").upsert({ id: input.id, audio_asset_id: input.audioAssetId, target_type: input.targetType, target_id: input.targetId, volume: input.volume, loop: input.loop }, { onConflict: "id" }));
}

export async function getOwnerCredential(identifier: string) {
  const row = requireData(await requireSupabase().from("owner_credentials").select("*").eq("identifier", identifier).maybeSingle());
  return row ? mapOwnerCredential(row) : undefined;
}

export async function listLocalizedStoryOverrides() {
  const rows = requireData(await requireSupabase().from("localized_story_overrides").select("*").eq("locale", "fa").order("updated_at", { ascending: false }));
  return (rows ?? []).map(mapLocalizedOverride);
}

export async function saveLocalizedStoryOverride(input: Omit<LocalizedStoryOverrideRow, "createdAt" | "updatedAt">) {
  requireData(await requireSupabase().from("localized_story_overrides").upsert({ id: input.id, locale: "fa", scene_title: input.sceneTitle, blocks: input.blocks as never, choice_labels: input.choiceLabels as never }, { onConflict: "id" }));
}

export async function deleteLocalizedStoryOverride(id: string) {
  requireData(await requireSupabase().from("localized_story_overrides").delete().eq("id", id));
}

export async function storeTelemetry(input: Omit<TelemetryEventRow, "createdAt">) {
  requireData(await requireSupabase().from("telemetry_events").insert({ id: input.id, installation_id: input.installationId, event_type: input.eventType, chapter: input.chapter, node_id: input.nodeId, choice_id: input.choiceId, locale: input.locale }));
}

export async function getRecentTelemetry() {
  const rows = requireData(await requireSupabase().from("telemetry_events").select("*").order("created_at", { ascending: false }).limit(5000));
  return (rows ?? []).map(mapTelemetry);
}

export function getSupabase() {
  return requireSupabase();
}
