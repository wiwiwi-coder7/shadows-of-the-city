import fs from "node:fs/promises";
import mysql from "mysql2/promise";

const target = "/tmp/sotc-data-migration.sql";
const inputTarget = "/tmp/sotc-data-migration-input.json";

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required");

const connection = await mysql.createConnection(process.env.DATABASE_URL);

const tables = [
  "users",
  "editorial_content",
  "audio_assets",
  "audio_assignments",
  "telemetry_events",
  "owner_credentials",
  "localized_story_overrides",
];

const rows = Object.fromEntries(await Promise.all(tables.map(async table => {
  const [result] = await connection.query(`SELECT * FROM \`${table}\``);
  return [table, result];
})));

await connection.end();

const sqlString = value => `'${String(value ?? "").replaceAll("'", "''")}'`;
const sqlNullable = value => value == null ? "NULL" : sqlString(value);
const sqlBoolean = value => value ? "true" : "false";
const asJson = value => {
  if (value == null) return "'{}'::jsonb";
  const parsed = typeof value === "string" ? JSON.parse(value) : value;
  return `${sqlString(JSON.stringify(parsed))}::jsonb`;
};
const asTimestamp = value => value == null ? "NULL" : sqlString(new Date(value).toISOString());
const values = sourceRows => sourceRows.map(columns => `  (${columns.join(", ")})`).join(",\n");

const statements = ["BEGIN;"];

if (rows.users.length) statements.push(`insert into public.users (open_id, name, email, login_method, role, created_at, updated_at, last_signed_in) values\n${values(rows.users.map(row => [sqlString(row.openId), sqlNullable(row.name), sqlNullable(row.email), sqlNullable(row.loginMethod), sqlString(row.role), asTimestamp(row.createdAt), asTimestamp(row.updatedAt), asTimestamp(row.lastSignedIn)]))}\non conflict (open_id) do update set name = excluded.name, email = excluded.email, login_method = excluded.login_method, role = excluded.role, last_signed_in = excluded.last_signed_in;`);

if (rows.editorial_content.length) statements.push(`insert into public.editorial_content (id, kind, title, chapter, status, payload, created_at, updated_at) values\n${values(rows.editorial_content.map(row => [sqlString(row.id), sqlString(row.kind), sqlString(row.title), row.chapter == null ? "NULL" : String(row.chapter), sqlString(row.status), asJson(row.payload), asTimestamp(row.createdAt), asTimestamp(row.updatedAt)]))}\non conflict (id) do update set kind = excluded.kind, title = excluded.title, chapter = excluded.chapter, status = excluded.status, payload = excluded.payload;`);

if (rows.audio_assets.length) statements.push(`insert into public.audio_assets (id, name, category, url, duration_seconds, created_at, updated_at) values\n${values(rows.audio_assets.map(row => [sqlString(row.id), sqlString(row.name), sqlString(row.category), sqlString(row.url), row.durationSeconds == null ? "NULL" : String(row.durationSeconds), asTimestamp(row.createdAt), asTimestamp(row.updatedAt)]))}\non conflict (id) do update set name = excluded.name, category = excluded.category, url = excluded.url, duration_seconds = excluded.duration_seconds;`);

if (rows.audio_assignments.length) statements.push(`insert into public.audio_assignments (id, audio_asset_id, target_type, target_id, volume, loop, created_at, updated_at) values\n${values(rows.audio_assignments.map(row => [sqlString(row.id), sqlString(row.audioAssetId), sqlString(row.targetType), sqlString(row.targetId), String(row.volume), sqlBoolean(row.loop), asTimestamp(row.createdAt), asTimestamp(row.updatedAt)]))}\non conflict (id) do update set audio_asset_id = excluded.audio_asset_id, target_type = excluded.target_type, target_id = excluded.target_id, volume = excluded.volume, loop = excluded.loop;`);

if (rows.telemetry_events.length) statements.push(`insert into public.telemetry_events (id, installation_id, event_type, chapter, node_id, choice_id, locale, created_at) values\n${values(rows.telemetry_events.map(row => [sqlString(row.id), sqlString(row.installationId), sqlString(row.eventType), row.chapter == null ? "NULL" : String(row.chapter), sqlNullable(row.nodeId), sqlNullable(row.choiceId), sqlString(row.locale), asTimestamp(row.createdAt)]))}\non conflict (id) do nothing;`);

if (rows.owner_credentials.length) statements.push(`insert into public.owner_credentials (identifier, password_salt, password_hash, is_active, created_at, updated_at) values\n${values(rows.owner_credentials.map(row => [sqlString(row.identifier), sqlString(row.passwordSalt), sqlString(row.passwordHash), sqlBoolean(row.isActive), asTimestamp(row.createdAt), asTimestamp(row.updatedAt)]))}\non conflict (identifier) do update set password_salt = excluded.password_salt, password_hash = excluded.password_hash, is_active = excluded.is_active;`);

if (rows.localized_story_overrides.length) statements.push(`insert into public.localized_story_overrides (id, locale, scene_title, blocks, choice_labels, created_at, updated_at) values\n${values(rows.localized_story_overrides.map(row => [sqlString(row.id), sqlString(row.locale), sqlString(row.sceneTitle), asJson(row.blocks), asJson(row.choiceLabels), asTimestamp(row.createdAt), asTimestamp(row.updatedAt)]))}\non conflict (id) do update set locale = excluded.locale, scene_title = excluded.scene_title, blocks = excluded.blocks, choice_labels = excluded.choice_labels;`);

statements.push("COMMIT;");
const query = statements.join("\n\n");
await fs.writeFile(target, `${query}\n`, "utf8");
await fs.writeFile(inputTarget, JSON.stringify({ project_id: "blxvvllrtpmqgswhpjiy", query }), "utf8");

console.log(JSON.stringify(Object.fromEntries(tables.map(table => [table, rows[table].length]))));
