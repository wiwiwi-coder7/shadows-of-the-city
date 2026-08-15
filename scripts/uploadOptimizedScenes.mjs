import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const source = "/home/ubuntu/webdev-static-assets/shadows-scenes-webp";
const storageUrl = process.env.SUPABASE_URL;
const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!storageUrl || !serviceRole) throw new Error("Supabase server credentials are required to upload optimized scene assets.");

const assets = (await readdir(source)).filter(name => name.endsWith(".webp")).sort();
const manifest = {};

for (const name of assets) {
  const data = await readFile(path.join(source, name));
  const response = await fetch(`${storageUrl}/storage/v1/object/game-assets/scenes-webp/${encodeURIComponent(name)}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${serviceRole}`,
      apikey: serviceRole,
      "Content-Type": "image/webp",
      "cache-control": "31536000, immutable",
      "x-upsert": "true",
    },
    body: data,
  });
  if (!response.ok) throw new Error(`Upload failed for ${name}: ${response.status} ${await response.text()}`);
  manifest[name.replace(/\.webp$/, ".png")] = name;
  console.log(`uploaded ${name}`);
}

await writeFile("/tmp/optimized-scene-manifest.json", JSON.stringify(manifest, null, 2));
console.log(`uploaded ${assets.length} optimized scenes`);
