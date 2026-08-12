import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const target = path.join(new URL("..", import.meta.url).pathname, "client/src/data/chapter10.fa.ts");
const source = await readFile(target, "utf8");
const declaration = "export const chapter10Farsi: Record<string, FarsiNode> = ";
const start = source.indexOf("{", source.indexOf(declaration));
const end = source.lastIndexOf("};");
const nodes = Function(`return (${source.slice(start, end + 1)});`)();

Object.assign(nodes.CH10_S1_N01, {
  sceneTitle: "نزدیک‌شدن",
  blocks: [
    { type: "dialogue", speaker: "اریکا", text: "چهار دقیقه دیگر نگهبان عوض می‌شود. پنجرهٔ ورود از درِ کناری، همین است." },
    { type: "dialogue", speaker: "مارکوس دویل", text: "فقط می‌خواهم ثبت شود که کاملاً می‌دانم این کار دیوانگی است." },
    { type: "dialogue", speaker: "آدری", text: "ثبت شد. دیوانگی و ضرورت همدیگر را نفی نمی‌کنند." },
    { type: "dialogue", speaker: "نیک", text: "همه نقشه را یادتان باشد. نیامده‌ایم خانه را ویران کنیم. برای مدرک آمده‌ایم، برای او، و بعد بیرون می‌رویم؛ به همین ترتیب." },
  ],
  choices: [
    { id: "CH10_S1_N01-A", label: "پیش از حرکت، لحظه‌ای خصوصی با آدری حرف بزن.", target: "CH10_S1_N02A" },
    { id: "CH10_S1_N01-B", label: "روی نقشه بمان؛ مستقیم سراغ کار برو.", target: "CH10_S1_N02B" },
    { id: "CH10_S1_N01-C", label: "با یک تشکر کوتاه، همه را مخاطب قرار بده.", target: "CH10_S1_N02C" },
  ],
});

Object.assign(nodes.CH10_S1_N02, {
  sceneTitle: "نزدیک‌شدن",
  blocks: [
    { type: "narration", text: "پنجره درست همان لحظه‌ای باز می‌شود که اریکا گفته بود. حرکت می‌کنند." },
    { type: "narration", text: "خانه آن‌طور ساکت است که انگار صاحبش هیچ‌وقت لازم نداشته برای فرمان‌برداری صدایش را بالا ببرد. سریع و بی‌صدا پیش می‌روند تا آخرین درِ راهرو، پیش از آن‌که کسی لمسش کند، خودش باز می‌شود." },
  ],
});

Object.assign(nodes.CH10_S2_N01, {
  sceneTitle: "رویارویی",
  blocks: [
    { type: "dialogue", speaker: "بنی", text: "با این همه وقت که صرف جمع‌کردن تکه‌ها کردید، دیرتر از انتظارم رسیدید. راستش نزدیک بود از سه‌شنبهٔ خسته‌کننده‌ام ناامید شوم." },
    { type: "dialogue", speaker: "نیک", text: "می‌دانستی می‌آییم." },
    { type: "dialogue", speaker: "بنی", text: "نیک، من از بیشتر چیزهایی که در شهر خودم می‌گذرد خبر دارم. کارم همین است. سلام، آدری. در زنده‌ماندن از من بهتر شدی. تقریباً بهت افتخار می‌کنم." },
  ],
  choices: [
    { id: "CH10_S2_N01-A", label: "با خشم جواب بده و از ادین و همهٔ آسیب‌دیدگان بگو.", target: "CH10_S2_N02A" },
    { id: "CH10_S2_N01-B", label: "خونسرد بمان و واکنش احساسی به او نده.", target: "CH10_S2_N02B" },
    { id: "CH10_S2_N01-C", label: "بگذار آدری اول جواب بدهد.", target: "CH10_S2_N02C" },
  ],
});

const header = 'import type { StoryBlock, StoryChoice } from "./story.generated";\n\ntype FarsiNode = { sceneTitle: string; blocks: StoryBlock[]; choices: StoryChoice[] };\n\n';
await writeFile(target, `${header}export const chapter10Farsi: Record<string, FarsiNode> = ${JSON.stringify(nodes, null, 2)};\n`);
console.log("Refined the Chapter 10 opening in natural Persian.");
