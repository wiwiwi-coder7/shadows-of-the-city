import { createHash, randomBytes, randomUUID, scryptSync, timingSafeEqual } from "node:crypto";
import { and, eq, gt } from "drizzle-orm";
import { adminSessions } from "../drizzle/schema";
import { getDb, getOwnerCredential } from "./db";

const COOKIE_NAME = "sotc_owner_session";
const SESSION_DAYS = 14;

function hash(value: string) { return createHash("sha256").update(value).digest("hex"); }
function passwordHash(password: string, salt: string) { return scryptSync(password, salt, 64).toString("hex"); }

export function verifyPassword(password: string, salt: string, expectedHash: string) {
  const candidate = Buffer.from(passwordHash(password, salt), "hex");
  const expected = Buffer.from(expectedHash, "hex");
  return candidate.length === expected.length && timingSafeEqual(candidate, expected);
}

export function createPasswordMaterial(password: string) {
  const salt = randomBytes(24).toString("hex");
  return { salt, hash: passwordHash(password, salt) };
}

function readToken(header: string | undefined) {
  if (!header) return undefined;
  return header.split(";").map(part => part.trim()).find(part => part.startsWith(`${COOKIE_NAME}=`))?.split("=")[1];
}

export async function loginOwner(identifier: string, password: string, res: { cookie: (name: string, value: string, options: Record<string, unknown>) => void }) {
  const credential = await getOwnerCredential(identifier);
  if (!credential || !credential.isActive || !verifyPassword(password, credential.passwordSalt, credential.passwordHash)) return false;
  const db = await getDb();
  if (!db) throw new Error("Database connection unavailable");
  const token = randomBytes(32).toString("base64url");
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);
  await db.insert(adminSessions).values({ id: randomUUID(), credentialId: credential.id, tokenHash: hash(token), expiresAt });
  res.cookie(COOKIE_NAME, token, { httpOnly: true, sameSite: "lax", secure: true, expires: expiresAt, path: "/" });
  return true;
}

export async function ownerSession(req: { headers: Record<string, string | string[] | undefined> }) {
  const tokenHeader = req.headers.cookie;
  const token = readToken(Array.isArray(tokenHeader) ? tokenHeader[0] : tokenHeader);
  if (!token) return undefined;
  const db = await getDb();
  if (!db) return undefined;
  const sessions = await db.select().from(adminSessions).where(and(eq(adminSessions.tokenHash, hash(token)), gt(adminSessions.expiresAt, new Date()))).limit(1);
  return sessions[0];
}

export async function requireOwner(req: { headers: Record<string, string | string[] | undefined> }) {
  const session = await ownerSession(req);
  if (!session) throw new Error("OWNER_AUTH_REQUIRED");
  return session;
}

export function clearOwnerSession(res: { clearCookie: (name: string, options: Record<string, unknown>) => void }) {
  res.clearCookie(COOKIE_NAME, { httpOnly: true, sameSite: "lax", secure: true, path: "/" });
}
