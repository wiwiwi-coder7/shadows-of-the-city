import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.join(new URL("..", import.meta.url).pathname, "client/src/data");
const replacements = [
  [/ي/g, "ی"], [/ك/g, "ک"], [/ۀ/g, "هٔ"],
  [/\bدر مورد\b/g, "دربارهٔ"], [/\bبه خاطر\b/g, "به‌خاطر"], [/\bبه طور\b/g, "به‌طور"], [/\bبه صورت\b/g, "به‌صورت"],
  [/می تواند/g, "می‌تواند"], [/نمی تواند/g, "نمی‌تواند"], [/می شود/g, "می‌شود"], [/نمی شود/g, "نمی‌شود"],
  [/می خواهم/g, "می‌خواهم"], [/می خواهی/g, "می‌خواهی"], [/می خواهد/g, "می‌خواهد"], [/می خواهند/g, "می‌خواهند"],
  [/می گویم/g, "می‌گویم"], [/می گوید/g, "می‌گوید"], [/می گویند/g, "می‌گویند"], [/می دانم/g, "می‌دانم"], [/می دانی/g, "می‌دانی"], [/می داند/g, "می‌داند"],
  [/نمی دانم/g, "نمی‌دانم"], [/نمی دانی/g, "نمی‌دانی"], [/نمی داند/g, "نمی‌داند"], [/می بینم/g, "می‌بینم"], [/می بیند/g, "می‌بیند"],
  [/بی سر و صدا/g, "بی‌سروصدا"], [/بی دفاع/g, "بی‌دفاع"], [/رو به رو/g, "روبه‌رو"], [/همان طور/g, "همان‌طور"],
];

function smooth(value) {
  if (typeof value === "string") return replacements.reduce((text, [find, replace]) => text.replace(find, replace), value).replace(/\s{2,}/g, " ").trim();
  if (Array.isArray(value)) return value.map(smooth);
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, smooth(entry)]));
  return value;
}

for (let chapter = 1; chapter <= 10; chapter += 1) {
  const file = path.join(root, `chapter${chapter}.fa.ts`);
  const source = await readFile(file, "utf8");
  const declaration = `export const chapter${chapter}Farsi: Record<string, FarsiNode> = `;
  const start = source.indexOf("{", source.indexOf(declaration));
  const end = source.lastIndexOf("};");
  const nodes = smooth(Function(`return (${source.slice(start, end + 1)});`)());
  const header = 'import type { StoryBlock, StoryChoice } from "./story.generated";\n\ntype FarsiNode = { sceneTitle: string; blocks: StoryBlock[]; choices: StoryChoice[] };\n\n';
  await writeFile(file, `${header}export const chapter${chapter}Farsi: Record<string, FarsiNode> = ${JSON.stringify(nodes, null, 2)};\n`);
}

console.log("Smoothed Persian orthography across Chapters 1–10.");
