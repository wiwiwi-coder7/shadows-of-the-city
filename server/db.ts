import { desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { audioAssets, audioAssignments, editorialContent, ownerCredentials, telemetryEvents, users, type InsertUser } from "../drizzle/schema";
import { ENV } from "./_core/env";

let database: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!database && process.env.DATABASE_URL) database = drizzle(process.env.DATABASE_URL);
  return database;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) throw new Error("User openId is required");
  const db = await getDb();
  if (!db) return;
  await db.insert(users).values({ ...user, role: user.openId === ENV.ownerOpenId ? "admin" : user.role ?? "user" }).onDuplicateKeyUpdate({ set: { name: user.name ?? null, email: user.email ?? null, lastSignedIn: new Date() } });
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result[0];
}

export async function listEditorialContent() {
  const db = await getDb();
  return db ? db.select().from(editorialContent).orderBy(desc(editorialContent.updatedAt)) : [];
}

export async function listAudioAssets() {
  const db = await getDb();
  return db ? db.select().from(audioAssets).orderBy(desc(audioAssets.updatedAt)) : [];
}

export async function listAudioAssignments() {
  const db = await getDb();
  return db ? db.select().from(audioAssignments).orderBy(desc(audioAssignments.updatedAt)) : [];
}

export async function getOwnerCredential(identifier: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(ownerCredentials).where(eq(ownerCredentials.identifier, identifier)).limit(1);
  return result[0];
}

export async function getRecentTelemetry() {
  const db = await getDb();
  return db ? db.select().from(telemetryEvents).orderBy(desc(telemetryEvents.createdAt)).limit(5000) : [];
}
