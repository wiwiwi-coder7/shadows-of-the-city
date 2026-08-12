import { int, json, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["admin", "user"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export const editorialContent = mysqlTable("editorial_content", {
  id: varchar("id", { length: 96 }).primaryKey(),
  kind: mysqlEnum("kind", ["story-node", "codex", "character", "configuration"]).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  chapter: int("chapter"),
  status: mysqlEnum("status", ["draft", "published"]).default("draft").notNull(),
  payload: json("payload").notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const audioAssets = mysqlTable("audio_assets", {
  id: varchar("id", { length: 96 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  category: mysqlEnum("category", ["music", "ambience", "sfx"]).notNull(),
  url: text("url").notNull(),
  durationSeconds: int("durationSeconds"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export const audioAssignments = mysqlTable("audio_assignments", {
  id: varchar("id", { length: 96 }).primaryKey(),
  audioAssetId: varchar("audioAssetId", { length: 96 }).notNull(),
  targetType: mysqlEnum("targetType", ["chapter", "scene", "node"]).notNull(),
  targetId: varchar("targetId", { length: 96 }).notNull(),
  volume: int("volume").default(70).notNull(),
  loop: int("loop").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export const telemetryEvents = mysqlTable("telemetry_events", {
  id: varchar("id", { length: 96 }).primaryKey(),
  installationId: varchar("installationId", { length: 96 }).notNull(),
  eventType: mysqlEnum("eventType", ["game_start", "node_view", "choice_selected", "chapter_reached", "game_complete"]).notNull(),
  chapter: int("chapter"),
  nodeId: varchar("nodeId", { length: 96 }),
  choiceId: varchar("choiceId", { length: 128 }),
  locale: varchar("locale", { length: 12 }).default("en").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const ownerCredentials = mysqlTable("owner_credentials", {
  id: int("id").autoincrement().primaryKey(),
  identifier: varchar("identifier", { length: 96 }).notNull().unique(),
  passwordSalt: varchar("passwordSalt", { length: 128 }).notNull(),
  passwordHash: varchar("passwordHash", { length: 256 }).notNull(),
  isActive: int("isActive").default(1).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export const localizedStoryOverrides = mysqlTable("localized_story_overrides", {
  id: varchar("id", { length: 96 }).primaryKey(),
  locale: mysqlEnum("locale", ["fa"]).default("fa").notNull(),
  sceneTitle: text("sceneTitle").notNull(),
  blocks: json("blocks").notNull(),
  choiceLabels: json("choiceLabels").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export const adminSessions = mysqlTable("admin_sessions", {
  id: varchar("id", { length: 96 }).primaryKey(),
  credentialId: int("credentialId").notNull(),
  tokenHash: varchar("tokenHash", { length: 128 }).notNull().unique(),
  expiresAt: timestamp("expiresAt").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
