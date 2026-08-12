import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const target = path.join(new URL("..", import.meta.url).pathname, "client/src/data/chapter8.fa.ts");
const source = await readFile(target, "utf8");
const declaration = "export const chapter8Farsi: Record<string, FarsiNode> = ";
const start = source.indexOf("{", source.indexOf(declaration));
const end = source.lastIndexOf("};");
const nodes = Function(`return (${source.slice(start, end + 1)});`)();

Object.assign(nodes.CH8_S1_N01, {
  sceneTitle: "آپارتمان نیک",
  blocks: [
    { type: "narration", text: "نیک در آپارتمان خودش به حال می‌آید و همان‌طور نفس می‌کشد که بعد از هر تکهٔ حافظه می‌کشید؛ اما این بار چیزی برای کامل‌شدن نمانده است. همه‌چیز برگشته؛ کامل، هولناک و بالاخره مال خودش." },
    { type: "dialogue", speaker: "نیک", text: "همه‌چیز را یادم آمده." },
  ],
  choices: [
    { id: "CH8_S1_N01-A", label: "پیش از هر کاری، تنها بمان و وزنش را حس کن.", target: "CH8_S1_N02" },
    { id: "CH8_S1_N01-B", label: "مستقیم پیش آدری برو؛ حق دارد همان حالا بشنود.", target: "CH8_S1_N02" },
    { id: "CH8_S1_N01-C", label: "اول همه‌چیز را بنویس؛ پیش از گفتنش به فاصله نیاز داری.", target: "CH8_S1_N02" },
  ],
});

Object.assign(nodes.CH8_S1_N02, {
  sceneTitle: "آپارتمان نیک",
  blocks: [{ type: "narration", text: "هر راهی که برود، آخرش یکی است: باید به آدری بگوید. نه در یک سند و نه در رؤیایی سرد؛ با صدای خودش، آن‌طور که او سزاوار شنیدنش است." }],
});

Object.assign(nodes.CH8_S2_N01, {
  sceneTitle: "پشت‌بام",
  blocks: [
    { type: "narration", text: "آدری صدای در را می‌شنود، اما فوراً برنمی‌گردد." },
    { type: "dialogue", speaker: "آدری", text: "آن قیافه را داری؛ شبیه وقتی که از طاق برگشتی، فقط بدتر. انگار مطمئن نیستی پاهایت برای گفتن چیزی که می‌خواهی بگویی، نگهت دارند." },
    { type: "dialogue", speaker: "نیک", text: "همه‌چیز را یادم آمده. همه‌چیز." },
  ],
  choices: [
    { id: "CH8_S2_N01-A", label: "از اول تعریف کن؛ از خود مأموریت.", target: "CH8_S2_N02A" },
    { id: "CH8_S2_N01-B", label: "از آخر شروع کن و به عقب برگرد.", target: "CH8_S2_N02B" },
    { id: "CH8_S2_N01-C", label: "اول بپرس آمادهٔ شنیدنش هست یا نه.", target: "CH8_S2_N02C" },
  ],
});

Object.assign(nodes.CH8_S2_N02, {
  sceneTitle: "پشت‌بام",
  blocks: [
    { type: "narration", text: "هرطور که آغاز کند، شکل کامل ماجرا سرانجام بیرون می‌ریزد: باج‌گیری، خدمت اجباری برای روکری، مأموریت، گزارشی که جعل کرد و بهای سنگینی که همه‌چیز برایش داشت." },
    { type: "dialogue", speaker: "نیک", text: "این را نمی‌گویم که بخشیده شوم. فکر نمی‌کنم بخشش چیزی باشد که هیچ‌کدام‌مان الآن به آن نیاز داریم. می‌گویم چون از من پرسیدی. قرار بود تو را بکشم؛ و بعد یک سال یادم رفت آن‌قدر دوستت داشتم که نتوانستم." },
  ],
  choices: [
    { id: "CH8_S2_N02-A", label: "سکوت کن و هرقدر لازم است به او وقت بده.", target: "CH8_S3_N01A" },
    { id: "CH8_S2_N02-B", label: "آرام اضافه کن که هیچ انتظاری از او نداری.", target: "CH8_S3_N01B" },
    { id: "CH8_S2_N02-C", label: "با احتیاط بپرس الآن چه حسی دارد.", target: "CH8_S3_N01C" },
  ],
});

const header = 'import type { StoryBlock, StoryChoice } from "./story.generated";\n\ntype FarsiNode = { sceneTitle: string; blocks: StoryBlock[]; choices: StoryChoice[] };\n\n';
await writeFile(target, `${header}export const chapter8Farsi: Record<string, FarsiNode> = ${JSON.stringify(nodes, null, 2)};\n`);
console.log("Refined the Chapter 8 opening in natural Persian.");
