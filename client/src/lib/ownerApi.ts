export const OWNER_API_URL = "https://blxvvllrtpmqgswhpjiy.supabase.co/functions/v1/owner-api";
const OWNER_TOKEN_KEY = "sotc_owner_token";

export type PersianOverride = {
  id: string;
  locale: "fa";
  scene_title: string;
  blocks: unknown;
  choice_labels: unknown;
  updated_at: string;
};

export type OwnerDashboard = {
  installations: number;
  starts: number;
  completions: number;
  events: number;
  chapterReach: { chapter: number; reached: number }[];
};

type ApiErrorBody = { error?: string };

export class OwnerApiError extends Error {
  readonly status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

function ownerToken() {
  return window.localStorage.getItem(OWNER_TOKEN_KEY) ?? "";
}

function makeUrl(action: string, search?: Record<string, string>) {
  const url = new URL(OWNER_API_URL);
  url.searchParams.set("action", action);
  Object.entries(search ?? {}).forEach(([key, value]) => url.searchParams.set(key, value));
  return url.toString();
}

async function request<T>(action: string, init?: RequestInit, search?: Record<string, string>): Promise<T> {
  const token = ownerToken();
  const response = await fetch(makeUrl(action, search), {
    ...init,
    headers: {
      ...(init?.body ? { "Content-Type": "application/json" } : {}),
      ...(token ? { "x-owner-token": token } : {}),
      ...init?.headers,
    },
  });
  const text = await response.text();
  let payload: T & ApiErrorBody = {} as T & ApiErrorBody;
  try { payload = text ? JSON.parse(text) as T & ApiErrorBody : payload; } catch { /* A non-JSON gateway error is presented below. */ }
  if (!response.ok) throw new OwnerApiError(response.status, payload.error ?? "The archive could not complete that request.");
  return payload as T;
}

export function clearOwnerToken() { window.localStorage.removeItem(OWNER_TOKEN_KEY); }

export async function checkOwnerSession() {
  return request<{ authenticated: boolean }>("session");
}

export async function loginOwner(identifier: string, password: string) {
  const result = await request<{ token: string; expiresAt: string }>("login", { method: "POST", body: JSON.stringify({ identifier, password }) });
  window.localStorage.setItem(OWNER_TOKEN_KEY, result.token);
  return result;
}

export async function logoutOwner() {
  try { await request<{ success: boolean }>("logout", { method: "POST" }); } finally { clearOwnerToken(); }
}

export function getOwnerDashboard() { return request<OwnerDashboard>("dashboard"); }
export function getPersianOverrides() { return request<{ overrides: PersianOverride[] }>("persian-overrides"); }
export function savePersianOverride(input: { nodeId: string; sceneTitle: string; blocks: string[]; choiceLabels: string[] }) {
  return request<{ nodeId: string }>("save-persian-override", { method: "POST", body: JSON.stringify(input) });
}
export function deletePersianOverride(nodeId: string) {
  return request<{ nodeId: string }>("delete-persian-override", { method: "DELETE" }, { nodeId });
}

export function notifyPersianOverridesChanged() {
  if (typeof BroadcastChannel === "undefined") return;
  const channel = new BroadcastChannel("sotc-persian-overrides");
  channel.postMessage({ type: "published", at: Date.now() });
  channel.close();
}
export function trackAnonymousEvent(input: { installationId: string; eventType: "game_start" | "node_view" | "choice_selected" | "chapter_reached" | "game_complete"; chapter?: number; nodeId?: string; choiceId?: string; locale: "en" | "fa" }) {
  return request<{ stored: boolean }>("track", { method: "POST", body: JSON.stringify(input) });
}
