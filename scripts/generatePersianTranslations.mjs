import { access, readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const projectRoot = new URL("..", import.meta.url).pathname;
const sourcePath = path.join(projectRoot, "client/src/data/story.generated.ts");
const outputDirectory = path.join(projectRoot, "client/src/data");
const source = await readFile(sourcePath, "utf8");
const declaration = "export const storyNodes: StoryNode[] = ";
const declarationStart = source.indexOf(declaration);
const start = source.indexOf("[", declarationStart + declaration.length);
const end = source.lastIndexOf("];\nexport const storyStartId");
if (start === -1 || end === -1) throw new Error("Could not parse story.generated.ts.");
const storyNodes = JSON.parse(source.slice(start, end + 1));

const endpoint = `${process.env.OPENAI_API_BASE.replace(/\/$/, "")}/chat/completions`;
const headers = { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, "Content-Type": "application/json" };
const model = "gpt-5-mini";
const fallbackModel = "gpt-5";

const speakerGuidance = `Names and labels should be transliterated consistently into Persian where they are player-visible. Use: NICK=نیک, GASPAR=گاسپار, KURT=کرت, HILLER=هیلر, AUDREY=آدری, ERIKA=اریکا, NARRATION=راوی. Translate other names naturally and consistently.`;
const systemPrompt = `You are a meticulous literary Persian translator for a cinematic noir interactive fiction game. Translate every supplied player-visible string into fluent contemporary Persian with a dark, controlled noir tone. Be faithful: do not summarize, omit, invent, or alter story meaning. Preserve paragraph boundaries and the number/order of blocks and choices. Translate scene directions, bracketed expression notes, visual descriptions, and interface-facing text too. Do not translate IDs. ${speakerGuidance} Return JSON only, following the supplied schema.`;

const responseSchema = {
  type: "json_schema",
  json_schema: {
    name: "chapter_persian_translation",
    strict: true,
    schema: {
      type: "object",
      properties: {
        nodes: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string" },
              sceneTitle: { type: "string" },
              blocks: {
                type: "array",
                items: {
                  type: "object",
                  properties: { text: { type: "string" }, speaker: { type: "string" } },
                  required: ["text", "speaker"],
                  additionalProperties: false,
                },
              },
              choices: {
                type: "array",
                items: {
                  type: "object",
                  properties: { label: { type: "string" } },
                  required: ["label"],
                  additionalProperties: false,
                },
              },
            },
            required: ["id", "sceneTitle", "blocks", "choices"],
            additionalProperties: false,
          },
        },
      },
      required: ["nodes"],
      additionalProperties: false,
    },
  },
};

function translationInput(nodes) {
  return nodes.map(node => ({
    id: node.id,
    sceneTitle: node.sceneTitle,
    blockCount: node.blocks.length,
    choiceCount: node.choices.length,
    blocks: node.blocks.map(block => ({ type: block.type, speaker: block.speaker ?? "", text: block.text })),
    choices: node.choices.map(choice => ({ label: choice.label })),
  }));
}

function fallbackNodeSchema(node) {
  const properties = { sceneTitle: { type: "string" } };
  const required = ["sceneTitle"];
  node.blocks.forEach((block, index) => {
    properties[`block${index}`] = {
      type: "object",
      properties: { text: { type: "string" }, speaker: { type: "string" } },
      required: ["text", "speaker"],
      additionalProperties: false,
    };
    required.push(`block${index}`);
  });
  node.choices.forEach((choice, index) => {
    properties[`choice${index}`] = { type: "string" };
    required.push(`choice${index}`);
  });
  return { type: "json_schema", json_schema: { name: "exact_persian_node", strict: true, schema: { type: "object", properties, required, additionalProperties: false } } };
}

async function translateNodeFallback(chapter, node) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({
      model: fallbackModel,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Translate this one Chapter ${chapter} node. Return the exact keyed object defined by the schema. Each block must stay distinct, even when adjacent blocks seem related.\n\n${JSON.stringify(translationInput([node])[0])}` },
      ],
      response_format: fallbackNodeSchema(node),
      max_completion_tokens: 32000,
    }),
  });
  if (!response.ok) throw new Error(`Chapter ${chapter} fallback node ${node.id} failed: ${response.status} ${await response.text()}`);
  const content = (await response.json()).choices?.[0]?.message?.content;
  if (!content) throw new Error(`Chapter ${chapter} fallback node ${node.id} had no content.`);
  const translated = JSON.parse(content);
  return [node.id, {
    sceneTitle: translated.sceneTitle,
    blocks: node.blocks.map((block, index) => ({ type: block.type, ...(block.speaker ? { speaker: translated[`block${index}`].speaker } : {}), text: translated[`block${index}`].text })),
    choices: node.choices.map((choice, index) => ({ id: choice.id, label: translated[`choice${index}`], target: choice.target })),
  }];
}

async function translateBatch(chapter, nodes, batchNumber) {
  const userPrompt = `Translate Chapter ${chapter}, batch ${batchNumber}. Every string in this JSON is visible to the player. Return one translated result for each input node in the same order. Each node explicitly lists blockCount and choiceCount: preserve those exact counts. Do not merge, remove, add, or reorder blocks or choices.\n\n${JSON.stringify({ nodes: translationInput(nodes) })}`;
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers,
        body: JSON.stringify({ model, messages: [{ role: "system", content: systemPrompt }, { role: "user", content: userPrompt }], response_format: responseSchema, max_completion_tokens: 64000 }),
      });
      if (!response.ok) throw new Error(`Chapter ${chapter} translation request failed: ${response.status} ${await response.text()}`);
      const payload = await response.json();
      const content = payload.choices?.[0]?.message?.content;
      if (!content) throw new Error(`Chapter ${chapter} response had no content.`);
      const translated = JSON.parse(content).nodes;
      if (!Array.isArray(translated) || translated.length !== nodes.length) throw new Error(`Chapter ${chapter} returned an unexpected node count.`);
      const normalized = translated.map((translatedNode, index) => {
        const sourceNode = nodes[index];
        if (translatedNode.id !== sourceNode.id) throw new Error(`Chapter ${chapter} node ${index} ID mismatch.`);
        if (translatedNode.blocks.length !== sourceNode.blocks.length) throw new Error(`Chapter ${chapter} node ${sourceNode.id} block count mismatch.`);
        if (translatedNode.choices.length !== sourceNode.choices.length) throw new Error(`Chapter ${chapter} node ${sourceNode.id} choice count mismatch.`);
        return {
          sceneTitle: translatedNode.sceneTitle,
          blocks: sourceNode.blocks.map((block, blockIndex) => ({ type: block.type, ...(block.speaker ? { speaker: translatedNode.blocks[blockIndex].speaker } : {}), text: translatedNode.blocks[blockIndex].text })),
          choices: sourceNode.choices.map((choice, choiceIndex) => ({ id: choice.id, label: translatedNode.choices[choiceIndex].label, target: choice.target })),
        };
      });
      return nodes.map((node, index) => [node.id, normalized[index]]);
    } catch (error) {
      lastError = error;
      console.warn(`  Chapter ${chapter}: batch ${batchNumber} validation attempt ${attempt} failed: ${error.message}`);
    }
  }
  console.warn(`  Chapter ${chapter}: batch ${batchNumber} is switching to exact per-node recovery.`);
  return Promise.all(nodes.map(node => translateNodeFallback(chapter, node)));
}

async function translateChapter(chapter, nodes) {
  const entries = [];
  for (let offset = 0; offset < nodes.length; offset += 4) {
    const batch = nodes.slice(offset, offset + 4);
    const batchNumber = Math.floor(offset / 4) + 1;
    console.log(`  Chapter ${chapter}: batch ${batchNumber} (${batch.length} nodes)…`);
    entries.push(...await translateBatch(chapter, batch, batchNumber));
  }
  return Object.fromEntries(entries);
}

function renderChapterModule(chapter, translationMap) {
  return `import type { FarsiNode } from "./story.fa.types";\n\nexport const chapter${chapter}Farsi: Record<string, FarsiNode> = ${JSON.stringify(translationMap, null, 2)};\n`;
}

await mkdir(outputDirectory, { recursive: true });
await writeFile(path.join(outputDirectory, "story.fa.types.ts"), `import type { StoryBlock, StoryChoice } from "./story.generated";\n\nexport type FarsiNode = { sceneTitle: string; blocks: StoryBlock[]; choices: StoryChoice[] };\n`);
const chapterOutputs = new Map();
for (let chapter = 2; chapter <= 10; chapter += 1) {
  const chapterNodes = storyNodes.filter(node => node.chapter === chapter);
  const chapterOutputPath = path.join(outputDirectory, `chapter${chapter}.fa.ts`);
  try {
    await access(chapterOutputPath);
    const existingModule = await readFile(chapterOutputPath, "utf8");
    const existingTranslation = JSON.parse(existingModule.slice(existingModule.indexOf("= {") + 2, existingModule.lastIndexOf(";")));
    if (Object.keys(existingTranslation).length === chapterNodes.length) {
      chapterOutputs.set(chapter, existingTranslation);
      console.log(`Reusing Chapter ${chapter} (${chapterNodes.length} validated nodes)…`);
      continue;
    }
  } catch {}
  console.log(`Translating Chapter ${chapter} (${chapterNodes.length} nodes)…`);
  const translationMap = await translateChapter(chapter, chapterNodes);
  chapterOutputs.set(chapter, translationMap);
  await writeFile(chapterOutputPath, renderChapterModule(chapter, translationMap));
}

await writeFile(path.join(outputDirectory, "story.fa.ts"), `import type { StoryNode } from "./story.generated";\nimport { chapter1Farsi } from "./chapter1.fa";\n${Array.from(chapterOutputs.keys()).map(chapter => `import { chapter${chapter}Farsi } from "./chapter${chapter}.fa";`).join("\n")}\n\nexport const persianStoryNodes = { ...chapter1Farsi, ${Array.from(chapterOutputs.keys()).map(chapter => `...chapter${chapter}Farsi`).join(", ")} };\n\nexport function localizeStoryNode(node: StoryNode, locale: "en" | "fa"): StoryNode {\n  if (locale !== "fa") return node;\n  const translation = persianStoryNodes[node.id];\n  return translation ? { ...node, ...translation } : node;\n}\n`);

console.log(`Generated Persian overlays for ${Array.from(chapterOutputs.values()).reduce((sum, chapter) => sum + Object.keys(chapter).length, 0)} nodes across Chapters 2–10.`);
