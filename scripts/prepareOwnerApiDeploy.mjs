import { readFile, writeFile } from "node:fs/promises";

const base = "/home/ubuntu/shadows-of-the-city/supabase/functions/owner-api";
const files = await Promise.all(["index.ts", "deno.json"].map(async name => ({ name, content: await readFile(`${base}/${name}`, "utf8") })));
await writeFile("/tmp/owner-api-deploy.json", JSON.stringify({ project_id: "blxvvllrtpmqgswhpjiy", name: "owner-api", verify_jwt: false, entrypoint_path: "index.ts", import_map_path: "deno.json", files }, null, 2));
