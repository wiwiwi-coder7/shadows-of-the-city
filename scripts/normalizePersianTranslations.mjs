import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = new URL("..", import.meta.url).pathname;
const dataDirectory = path.join(projectRoot, "client/src/data");
const source = await readFile(path.join(dataDirectory, "story.generated.ts"), "utf8");
const declaration = "export const storyNodes: StoryNode[] = ";
const start = source.indexOf("[", source.indexOf(declaration) + declaration.length);
const end = source.lastIndexOf("];\nexport const storyStartId");
const sourceNodes = JSON.parse(source.slice(start, end + 1));

const speakerMap = {
  ADIN: "آدین", ADRY: "آدری", ANTON: "آنتون", BENI: "بنی", ENFORCER: "مأمور", ERICA: "اریکا", GASPAR: "گاسپار", HILLER: "هیلر", KURT: "کرت", "MARCUS DOYLE": "مارکوس دویل", NARRATION: "راوی", NICK: "نیک", OZZIE: "اوزی", RENNER: "رنر", VIVIENNE: "ویوین",
};
const textReplacements = [
  ["RENNER's TENEMENT", "ساختمان رنر"], ["MARCUS DOYLE", "مارکوس دویل"], ["Almost Dry", "تقریباً خشک"], ["Dry Almost", "تقریباً خشک"], ["The گویا", "روایت"], ["NICK", "نیک"], ["Nick", "نیک"], ["ADRY", "آدری"], ["Adry", "آدری"], ["ERICA", "اریکا"], ["GASPAR", "گاسپار"], ["KURT", "کرت"], ["HILLER", "هیلر"], ["VIVIENNE", "ویوین"], ["ANTON", "آنتون"], ["BENI", "بنی"], ["Beni", "بنی"], ["RENNER", "رنر"], ["OZZIE", "اوزی"], ["ADIN", "آدین"], ["Rookery", "روکری"], ["REDACTED", "سانسورشده"], ["CONFIDENTIAL", "محرمانه"], ["EPILOGUE", "پایان‌بندی"], ["PERSONNEL", "پرسنل"], ["POV", "زاویه‌دید"], ["Option", "گزینه"], ["Resolve", "عزم"], ["Smile", "لبخند"], ["Warmth", "گرما"], ["Firm", "قاطع"], ["Neutral", "خنثی"], ["Authority", "اقتدار"], ["Bravado", "بلوف"], ["Deadpan", "بی‌حالت"], ["Cracking", "درهم‌شکستن"], ["Reluctant", "بی‌میل"], ["Telling", "گویا"], ["gentled", "ملایم‌شده"], ["اپارتمان", "آپارتمان"], ["نمی توان", "نمی‌توان"], ["نمی شود", "نمی‌شود"], ["نمی کند", "نمی‌کند"], ["می شود", "می‌شود"], ["می کند", "می‌کند"], ["می رود", "می‌رود"], ["می رسد", "می‌رسد"], ["می گوید", "می‌گوید"], ["می دهد", "می‌دهد"], ["می گیرد", "می‌گیرد"], ["می آید", "می‌آید"], ["می تواند", "می‌تواند"], ["می خواهند", "می‌خواهند"],
];
function normalize(text) {
  return textReplacements.reduce((result, [from, to]) => result.replaceAll(from, to), text).replace(/CH(\d+)_S(\d+)_N(\d+)[A-Z]?/g, "گره $3 از صحنه $2 فصل $1").replace(/Ch(\d+)/gi, "فصل $1").replace(/\s+([،.?!])/g, "$1");
}

for (let chapter = 2; chapter <= 10; chapter += 1) {
  const filePath = path.join(dataDirectory, `chapter${chapter}.fa.ts`);
  const module = await readFile(filePath, "utf8");
  const translation = JSON.parse(module.slice(module.indexOf("= {") + 2, module.lastIndexOf(";")));
  sourceNodes.filter(node => node.chapter === chapter).forEach(node => {
    const localized = translation[node.id];
    localized.sceneTitle = normalize(localized.sceneTitle);
    localized.blocks = localized.blocks.map((block, index) => ({
      ...block,
      ...(node.blocks[index].speaker ? { speaker: speakerMap[node.blocks[index].speaker] ?? normalize(block.speaker) } : {}),
      text: normalize(block.text),
    }));
    localized.choices = localized.choices.map(choice => ({ ...choice, label: normalize(choice.label) }));
  });
  await writeFile(filePath, `import type { FarsiNode } from "./story.fa.types";\n\nexport const chapter${chapter}Farsi: Record<string, FarsiNode> = ${JSON.stringify(translation, null, 2)};\n`);
}

console.log("Normalized Persian names, typographic joins, and speaker labels for Chapters 2–10.");
