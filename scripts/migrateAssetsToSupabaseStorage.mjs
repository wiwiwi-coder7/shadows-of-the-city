import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const bucket = "game-assets";
const root = "/home/ubuntu/webdev-static-assets";
const endpoint = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!endpoint || !key) throw new Error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.");

const directories = [
  { local: path.join(root, "shadows-scenes"), remote: "scenes" },
  { local: path.join(root, "shadows-characters"), remote: "characters" },
  { local: path.join(root, "shadows-of-the-city-fonts"), remote: "fonts" },
];

const contentType = (name) => name.endsWith(".ttf") ? "font/ttf" : "image/png";
const manifest = [];

for (const directory of directories) {
  const filenames = (await readdir(directory.local)).filter((name) => /\.(png|ttf)$/i.test(name));
  for (const filename of filenames) {
    const bytes = await readFile(path.join(directory.local, filename));
    const remotePath = `${directory.remote}/${filename}`;
    const response = await fetch(`${endpoint}/storage/v1/object/${bucket}/${remotePath}`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": contentType(filename),
        "x-upsert": "true",
      },
      body: bytes,
    });
    if (!response.ok) throw new Error(`Upload failed for ${remotePath}: ${response.status} ${await response.text()}`);
    manifest.push({ local: path.join(directory.local, filename), remotePath, bytes: bytes.length });
    console.log(`uploaded ${remotePath}`);
  }
}

await writeFile("/tmp/shadows-of-the-city-supabase-assets.json", JSON.stringify({ bucket, files: manifest }, null, 2));
console.log(`completed ${manifest.length} assets (${manifest.reduce((sum, file) => sum + file.bytes, 0)} bytes)`);
