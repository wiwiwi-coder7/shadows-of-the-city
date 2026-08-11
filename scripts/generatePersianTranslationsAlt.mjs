import { access, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = new URL("..", import.meta.url).pathname;
const dataDirectory = path.join(projectRoot, "client/src/data");
const source = await readFile(path.join(dataDirectory, "story.generated.ts"), "utf8");
const declaration = "export const storyNodes: StoryNode[] = ";
const start = source.indexOf("[", source.indexOf(declaration) + declaration.length);
const end = source.lastIndexOf("];\nexport const storyStartId");
if (start === -1 || end === -1) throw new Error("Could not parse story nodes.");
const storyNodes = JSON.parse(source.slice(start, end + 1));

const speakerMap = {
  NICK: "نیک", GASPAR: "گاسپار", KURT: "کرت", HILLER: "هیلر", AUDREY: "آدری", ERIKA: "اریکا", NARRATION: "راوی",
  BENI: "بنی", VIVIENNE: "ویوین", ANTON: "آنتون", DOYLE: "دویل", MORA: "مورا", OZZY: "اوزی", MARA: "مارا",
};
const delay = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

async function translateText(text) {
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", "en");
  url.searchParams.set("tl", "fa");
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", text);
  let lastError;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      const translated = payload?.[0]?.map(part => part?.[0] ?? "").join("");
      if (!translated) throw new Error("Empty translation response");
      return translated;
    } catch (error) {
      lastError = error;
      await delay(600 * attempt);
    }
  }
  throw new Error(`Could not translate text after retries: ${lastError.message}`);
}

async function mapLimit(items, limit, worker) {
  const output = new Array(items.length);
  let nextIndex = 0;
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (nextIndex < items.length) {
      const index = nextIndex++;
      output[index] = await worker(items[index], index);
    }
  }));
  return output;
}

function renderChapterModule(chapter, translations) {
  return `import type { FarsiNode } from "./story.fa.types";\n\nexport const chapter${chapter}Farsi: Record<string, FarsiNode> = ${JSON.stringify(translations, null, 2)};\n`;
}

async function generateChapter(chapter) {
  const nodes = storyNodes.filter(node => node.chapter === chapter);
  const tasks = [];
  for (const node of nodes) {
    tasks.push({ nodeId: node.id, kind: "sceneTitle", index: 0, text: node.sceneTitle });
    node.blocks.forEach((block, index) => tasks.push({ nodeId: node.id, kind: "block", index, text: block.text }));
    node.choices.forEach((choice, index) => tasks.push({ nodeId: node.id, kind: "choice", index, text: choice.label }));
  }
  console.log(`Translating Chapter ${chapter}: ${nodes.length} nodes, ${tasks.length} visible strings…`);
  const completed = await mapLimit(tasks, 4, async task => ({ ...task, translated: await translateText(task.text) }));
  const byNode = new Map(nodes.map(node => [node.id, { sceneTitle: "", blocks: new Array(node.blocks.length), choices: new Array(node.choices.length) }]));
  completed.forEach(task => {
    const entry = byNode.get(task.nodeId);
    if (task.kind === "sceneTitle") entry.sceneTitle = task.translated;
    if (task.kind === "block") entry.blocks[task.index] = task.translated;
    if (task.kind === "choice") entry.choices[task.index] = task.translated;
  });
  const translations = Object.fromEntries(nodes.map(node => [node.id, {
    sceneTitle: byNode.get(node.id).sceneTitle,
    blocks: node.blocks.map((block, index) => ({ type: block.type, ...(block.speaker ? { speaker: speakerMap[block.speaker] ?? block.speaker } : {}), text: byNode.get(node.id).blocks[index] })),
    choices: node.choices.map((choice, index) => ({ id: choice.id, label: byNode.get(node.id).choices[index], target: choice.target })),
  }]));
  if (Object.keys(translations).length !== nodes.length) throw new Error(`Chapter ${chapter} node coverage mismatch.`);
  await writeFile(path.join(dataDirectory, `chapter${chapter}.fa.ts`), renderChapterModule(chapter, translations));
}

for (let chapter = 6; chapter <= 10; chapter += 1) {
  const chapterPath = path.join(dataDirectory, `chapter${chapter}.fa.ts`);
  try {
    await access(chapterPath);
    console.log(`Reusing Chapter ${chapter} from a prior successful run.`);
  } catch {
    await generateChapter(chapter);
  }
}

await writeFile(path.join(dataDirectory, "story.fa.types.ts"), `import type { StoryBlock, StoryChoice } from "./story.generated";\n\nexport type FarsiNode = { sceneTitle: string; blocks: StoryBlock[]; choices: StoryChoice[] };\n`);
await writeFile(path.join(dataDirectory, "story.fa.ts"), `import type { StoryNode } from "./story.generated";\nimport { chapter1Farsi } from "./chapter1.fa";\n${Array.from({ length: 9 }, (_, index) => index + 2).map(chapter => `import { chapter${chapter}Farsi } from "./chapter${chapter}.fa";`).join("\n")}\n\nexport const persianStoryNodes = { ...chapter1Farsi, ${Array.from({ length: 9 }, (_, index) => `...chapter${index + 2}Farsi`).join(", ")} };\n\nexport function localizeStoryNode(node: StoryNode, locale: "en" | "fa"): StoryNode {\n  if (locale !== "fa") return node;\n  const translation = persianStoryNodes[node.id];\n  return translation ? { ...node, ...translation } : node;\n}\n`);
console.log("Generated Persian overlays for Chapters 6–10 and the shared localization registry.");
