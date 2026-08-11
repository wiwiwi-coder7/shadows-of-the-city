import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = new URL("..", import.meta.url).pathname;
const dataDirectory = path.join(projectRoot, "client/src/data");
const storySource = await readFile(path.join(dataDirectory, "story.generated.ts"), "utf8");
const storyDeclaration = "export const storyNodes: StoryNode[] = ";
const storyStart = storySource.indexOf("[", storySource.indexOf(storyDeclaration) + storyDeclaration.length);
const storyEnd = storySource.lastIndexOf("];\nexport const storyStartId");
const sourceNodes = JSON.parse(storySource.slice(storyStart, storyEnd + 1)).filter(node => node.chapter === 1);
const chapterPath = path.join(dataDirectory, "chapter1.fa.ts");
const module = await readFile(chapterPath, "utf8");
const translationDeclaration = "export const chapter1Farsi: Record<string, FarsiNode> = ";
const translationEnd = module.indexOf("};\n\nexport function");
const objectText = module.slice(module.indexOf("{", module.indexOf(translationDeclaration)), translationEnd + 1);
const chapter1Farsi = Function(`return (${objectText});`)();

const speakerMap = { NICK: "نیک", GASPAR: "گاسپار", KURT: "کرت", HILLER: "هیلر", ADRY: "آدری", AUDREY: "آدری", OZZIE: "اوزی", NARRATION: "راوی" };
const normalizeText = text => [[/CH(\d+)_S(\d+)_N(\d+)[A-Z]?/g, "گره $3 از صحنه $2 فصل $1"], [/Ch(\d+)/gi, "فصل $1"], [/Ozzie/gi, "اوزی"], [/Adry/gi, "آدری"], [/Nick/gi, "نیک"], [/Gaspar/gi, "گاسپار"], [/Kurt/gi, "کرت"], [/Hiller/gi, "هیلر"]].reduce((result, [pattern, replacement]) => result.replace(pattern, replacement), text);
const delay = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
async function translate(text) {
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx"); url.searchParams.set("sl", "en"); url.searchParams.set("tl", "fa"); url.searchParams.set("dt", "t"); url.searchParams.set("q", text);
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await fetch(url);
      const payload = await response.json();
      const result = payload?.[0]?.map(part => part?.[0] ?? "").join("");
      if (result) return result;
    } catch {}
    await delay(500 * attempt);
  }
  throw new Error(`Unable to translate Chapter 1 block: ${text.slice(0, 60)}`);
}

for (const node of sourceNodes) {
  const localized = chapter1Farsi[node.id];
  localized.blocks = localized.blocks.map(block => ({ ...block, ...(block.speaker ? { speaker: speakerMap[block.speaker] ?? block.speaker } : {}), text: normalizeText(block.text) }));
  if (localized.blocks.length > node.blocks.length) throw new Error(`Chapter 1 ${node.id} has too many translated blocks.`);
  const missing = node.blocks.slice(localized.blocks.length);
  if (missing.length) {
    console.log(`Filling ${missing.length} blocks for ${node.id}…`);
    for (const block of missing) localized.blocks.push({ type: block.type, ...(block.speaker ? { speaker: speakerMap[block.speaker] ?? block.speaker } : {}), text: await translate(block.text) });
  }
}

const rendered = `import type { StoryBlock, StoryChoice, StoryNode } from "./story.generated";\n\ntype FarsiNode = { sceneTitle: string; blocks: StoryBlock[]; choices: StoryChoice[] };\n\nexport const chapter1Farsi: Record<string, FarsiNode> = ${JSON.stringify(chapter1Farsi, null, 2)};\n\nexport function localizeChapterOneNode(node: StoryNode, locale: "en" | "fa"): StoryNode {\n  if (locale !== "fa" || node.chapter !== 1) return node;\n  const translation = chapter1Farsi[node.id];\n  return translation ? { ...node, ...translation } : node;\n}\n`;
await writeFile(chapterPath, rendered);
console.log("Completed Chapter 1 block parity.");
