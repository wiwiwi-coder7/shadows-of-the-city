import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const root = new URL("..", import.meta.url).pathname;
const dataDir = path.join(root, "client/src/data");
const cacheDir = path.join(root, ".cache", "persian-narrative-rewrite");
const sourceFile = await readFile(path.join(dataDir, "story.generated.ts"), "utf8");
const declaration = "export const storyNodes: StoryNode[] = ";
const arrayStart = sourceFile.indexOf("[", sourceFile.indexOf(declaration) + declaration.length);
const arrayEnd = sourceFile.lastIndexOf("];\nexport const storyStartId");
const storyNodes = JSON.parse(sourceFile.slice(arrayStart, arrayEnd + 1));

await mkdir(cacheDir, { recursive: true });

const visibleNames = {
  NICK: "نیک", ADRY: "آدری", KURT: "کرت", GASPAR: "گاسپار", HILLER: "هیلر", OZZIE: "اوزی",
  ERICA: "اریکا", ANTON: "آنتون", BENI: "بنی", VIVIENNE: "وین", ADIN: "آدین", MARCUS: "مارکوس دویل",
};

function cleanText(raw) {
  let text = raw.trim();
  if (!text) return null;
  if (/^\s*-\s*(?:fixed|relationship|branch|choice|note|continuity|design|writer)/i.test(text)) return null;
  if (/^\s*\[?\s*(?:scene|chapter)\s+\d+\s+(?:ends?|begins?|start|end|transition)/i.test(text)) return null;
  if (/^(?:interior|exterior|wide shot|close on|establishing shot|camera|cut to)\s*[,.:]/i.test(text)) return null;
  if (/(?:\bpalette\s*:|\bmood\s*:|\bcamera\s*:|\bframing\s*:|\bproduction\s+note\b|\bbranch\s+(?:note|design)\b|\brelationship\s+flag\b)/i.test(text)) return null;
  text = text.replace(/^\s*\([^)]{0,220}\)\s*/g, "");
  text = text.replace(/\s*\[(?:expression|tone|beat|state|delivery|narration|nick|adry|kurt|gaspar|hiller|erica|anton|beni|vivienne|ozzie|adin)[^\]]*\]/gi, "");
  text = text.replace(/\s*\[(?:fixed|continuity|choice|branch|transition|scene|chapter|resolution|escalation)[^\]]*\]/gi, "");
  text = text.replace(/^\s*["“]|["”]\s*$/g, "").trim();
  return text ? text : null;
}

function playerNode(node) {
  return {
    id: node.id,
    sceneTitle: cleanText(node.sceneTitle) ?? node.sceneTitle,
    blocks: node.blocks.map(block => {
      const text = cleanText(block.text);
      return text ? { type: block.type, speaker: block.speaker ? (visibleNames[block.speaker] ?? block.speaker) : "", text } : null;
    }).filter(Boolean),
    choices: node.choices.map(choice => ({ id: choice.id, label: cleanText(choice.label) ?? choice.label, target: choice.target })),
  };
}

function validate(source, localized) {
  if (!Array.isArray(localized) || localized.length !== source.length) throw new Error("Translated node count differs from source batch.");
  for (const node of source) {
    const translated = localized.find(candidate => candidate.id === node.id);
    if (!translated) throw new Error(`Missing node ${node.id}.`);
    if (!translated.sceneTitle?.trim()) throw new Error(`Missing Persian scene title for ${node.id}.`);
    if (translated.blocks.length !== node.blocks.length) throw new Error(`Block count mismatch for ${node.id}.`);
    if (translated.choices.length !== node.choices.length) throw new Error(`Choice count mismatch for ${node.id}.`);
    for (const [index, block] of translated.blocks.entries()) {
      if (block.type !== node.blocks[index].type || !block.text?.trim()) throw new Error(`Invalid block for ${node.id}.`);
      if (/[\[\]]|\b(?:scene|chapter|expression|mood|palette|fixed|transition|designer|CH\d+_)/i.test(block.text)) throw new Error(`Non-diegetic content in ${node.id}.`);
    }
    for (const [index, choice] of translated.choices.entries()) {
      if (choice.id !== node.choices[index].id || choice.target !== node.choices[index].target || !choice.label?.trim()) throw new Error(`Invalid choice for ${node.id}.`);
      if (/[\[\]]|\b(?:scene|chapter|expression|mood|palette|fixed|transition|designer|CH\d+_)/i.test(choice.label)) throw new Error(`Non-diegetic choice in ${node.id}.`);
    }
  }
}

const schema = {
  type: "json_schema",
  json_schema: {
    name: "persian_narrative_nodes",
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
                  properties: { type: { type: "string", enum: ["narration", "dialogue"] }, speaker: { type: "string" }, text: { type: "string" } },
                  required: ["type", "speaker", "text"], additionalProperties: false,
                },
              },
              choices: {
                type: "array",
                items: {
                  type: "object",
                  properties: { id: { type: "string" }, label: { type: "string" }, target: { type: "string" } },
                  required: ["id", "label", "target"], additionalProperties: false,
                },
              },
            },
            required: ["id", "sceneTitle", "blocks", "choices"], additionalProperties: false,
          },
        },
      },
      required: ["nodes"], additionalProperties: false,
    },
  },
};

async function rewriteBatch(cleaned, cachePath) {
  try {
    const cached = JSON.parse(await readFile(cachePath, "utf8"));
    validate(cleaned, cached.nodes);
    return cached.nodes;
  } catch {}

  const prompt = `You are an expert Persian literary editor rewriting an English noir interactive novel for native Persian readers. Rewrite the supplied PLAYER SOURCE into vivid, natural, restrained Persian—not literal translation. Preserve exactly each node id, each block count and block type, and each choice id/target. Use these established names exactly: Nick=نیک, Adry/Audrey=آدری, Kurt=کرت, Gaspar=گاسپار, Hiller=هیلر, Erica=اریکا, Anton=آنتون, Beni=بنی, Vivienne=وین, Adin=آدین, Ozzie=اوزی, Marcus Doyle=مارکوس دویل. Do not invent character traits or explain what the player can infer. Never add stage directions, scene/chapter headings, developer notes, camera/palette/mood notes, bracketed labels, IDs, or meta commentary. Do not mention translation. Scene titles must be brief in-world locations. Dialogue should be natural spoken Persian; narration should be cinematic but concise. Return only the requested JSON schema.\n\nPLAYER SOURCE:\n${JSON.stringify(cleaned)}`;
  let failure;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(`${process.env.OPENAI_API_BASE}/chat/completions`, {
        method: "POST",
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ model: "gpt-5.5", messages: [{ role: "user", content: prompt }], response_format: schema, max_completion_tokens: 24000, reasoning: { effort: "medium" } }),
      });
      if (!response.ok) throw new Error(`Model request failed (${response.status}): ${await response.text()}`);
      const payload = await response.json();
      const content = payload.choices?.[0]?.message?.content;
      if (!content) throw new Error(`Model returned no JSON content (finish reason: ${payload.choices?.[0]?.finish_reason ?? "unknown"}).`);
      const parsed = JSON.parse(content);
      validate(cleaned, parsed.nodes);
      await writeFile(cachePath, JSON.stringify(parsed, null, 2));
      return parsed.nodes;
    } catch (error) { failure = error; await new Promise(resolve => setTimeout(resolve, attempt * 1000)); }
  }
  throw failure;
}

async function rewriteChapter(chapter) {
  const cleaned = storyNodes.filter(node => node.chapter === chapter).map(playerNode);
  const cachePath = path.join(cacheDir, `chapter${chapter}.json`);
  try {
    const cached = JSON.parse(await readFile(cachePath, "utf8"));
    validate(cleaned, cached.nodes);
    return cached.nodes;
  } catch {}
  const rewritten = [];
  for (let index = 0; index < cleaned.length; index += 3) {
    const batch = cleaned.slice(index, index + 3);
    const batchCache = path.join(cacheDir, `chapter${chapter}-batch${Math.floor(index / 3) + 1}.json`);
    rewritten.push(...await rewriteBatch(batch, batchCache));
  }
  validate(cleaned, rewritten);
  await writeFile(cachePath, JSON.stringify({ nodes: rewritten }, null, 2));
  return rewritten;
}

const chapters = [];
for (let chapter = 1; chapter <= 10; chapter += 1) {
  console.log(`Rewriting Chapter ${chapter}…`);
  const nodes = await rewriteChapter(chapter);
  const map = Object.fromEntries(nodes.map(node => [node.id, {
    sceneTitle: node.sceneTitle,
    blocks: node.blocks.map(block => ({ type: block.type, ...(block.speaker ? { speaker: block.speaker } : {}), text: block.text })),
    choices: node.choices,
  }]));
  const output = `import type { StoryBlock, StoryChoice } from "./story.generated";\n\ntype FarsiNode = { sceneTitle: string; blocks: StoryBlock[]; choices: StoryChoice[] };\n\nexport const chapter${chapter}Farsi: Record<string, FarsiNode> = ${JSON.stringify(map, null, 2)};\n`;
  await writeFile(path.join(dataDir, `chapter${chapter}.fa.ts`), output);
  chapters.push(chapter);
}

const registry = `import type { StoryNode } from "./story.generated";\n${chapters.map(chapter => `import { chapter${chapter}Farsi } from "./chapter${chapter}.fa";`).join("\n")}\n\nexport const persianStoryNodes = { ${chapters.map(chapter => `...chapter${chapter}Farsi`).join(", ")} };\n\nexport function localizeStoryNode(node: StoryNode, locale: "en" | "fa"): StoryNode {\n  if (locale !== "fa") return node;\n  const translation = persianStoryNodes[node.id];\n  return translation ? { ...node, ...translation } : node;\n}\n`;
await writeFile(path.join(dataDir, "story.fa.ts"), registry);
console.log("Persian narrative rewrite completed.");
