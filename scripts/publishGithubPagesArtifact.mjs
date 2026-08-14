import { execFileSync } from "node:child_process";
import { readFile, writeFile, rm, readdir } from "node:fs/promises";
import path from "node:path";

const repository = "wiwiwi-coder7/shadows-of-the-city";
const root = "/home/ubuntu/shadows-of-the-city/dist/github-pages";
const assetFiles = (await readdir(path.join(root, "assets"))).filter(name => /\.(?:css|js)$/.test(name)).sort().map(name => `assets/${name}`);
const files = ["index.html", ...assetFiles];

if (!assetFiles.length) throw new Error("No Vite assets found. Run build:github-pages before publishing.");

for (const remotePath of files) {
  let sha;
  try {
    sha = execFileSync("gh", ["api", `repos/${repository}/contents/${remotePath}?ref=main`, "--jq", ".sha"], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch {
    sha = undefined;
  }
  const bytes = await readFile(path.join(root, remotePath));
  const input = `/tmp/github-pages-${remotePath.replaceAll("/", "-")}.json`;
  await writeFile(input, JSON.stringify({
    message: `Deploy static game artifact: ${remotePath}`,
    content: bytes.toString("base64"),
    branch: "main",
    ...(sha ? { sha } : {}),
  }));
  execFileSync("gh", ["api", "--method", "PUT", `repos/${repository}/contents/${remotePath}`, "--input", input], { stdio: "inherit" });
  await rm(input, { force: true });
  console.log(`published ${remotePath}`);
}
