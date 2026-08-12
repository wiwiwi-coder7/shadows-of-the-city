import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const target = path.join(new URL("..", import.meta.url).pathname, "client/src/data/chapter6.fa.ts");
const source = await readFile(target, "utf8");
const declaration = "export const chapter6Farsi: Record<string, FarsiNode> = ";
const start = source.indexOf("{", source.indexOf(declaration));
const end = source.lastIndexOf("};");
const nodes = Function(`return (${source.slice(start, end + 1)});`)();

Object.assign(nodes.CH6_S1_N01, {
  sceneTitle: "آپارتمان نیک",
  blocks: [{ type: "dialogue", speaker: "نیک", text: "بالاخره یک چهره. اما جز این‌که از من نمی‌ترسید، هیچ چیزش یادم نیست." }],
  choices: [
    { id: "CH6_S1_N01-A", label: "هرچه یادت می‌آید، هرقدر هم ناقص، روی کاغذ بیاور.", target: "CH6_S1_N02" },
    { id: "CH6_S1_N01-B", label: "رهایش کن؛ بلند شو و بگذار کار روز فکرت را مشغول کند.", target: "CH6_S1_N02" },
    { id: "CH6_S1_N01-C", label: "روی همان جزئیات مکث کن: این‌که او از تو نمی‌ترسید.", target: "CH6_S1_N02" },
  ],
});

Object.assign(nodes.CH6_S1_N02, {
  sceneTitle: "آپارتمان نیک",
  blocks: [{ type: "narration", text: "این یکی را به آدری نمی‌گوید؛ هنوز نه. غریزه‌ای قدیمی و بی‌دلیل به او می‌گوید این تکه تا وقتی نفهمد چرا بیشتر از یک زخم به لبهٔ عذرخواهی می‌ماند، نباید بلند گفته شود." }],
});

Object.assign(nodes.CH6_S2_N01, {
  sceneTitle: "ساختمان رنر",
  blocks: [
    { type: "dialogue", speaker: "رنر", text: "باز هم شما. این بار هر دوتان. باید بیشتر نگران باشم یا کمتر؟" },
    { type: "dialogue", speaker: "آدری", text: "اگر این بار واقعاً جواب بدهی، کمتر." },
    { type: "dialogue", speaker: "نیک", text: "گفتی چیزی را سوزاندی؛ قبل از آن‌که آن مرد چاقوکش پیدایش شود. چه بود؟" },
  ],
  choices: [
    { id: "CH6_S2_N01-A", label: "بگذار آدری جلو برود؛ شاید بیش از انتظارش آرامش کند.", target: "CH6_S2_N02A" },
    { id: "CH6_S2_N01-B", label: "مستقیم و منظم پیش برو؛ مثل یک بازجویی رسمی.", target: "CH6_S2_N02B" },
    { id: "CH6_S2_N01-C", label: "اول ترسش را ببین؛ پیش از فشار آوردن آرامش کن.", target: "CH6_S2_N02C" },
  ],
});

Object.assign(nodes.CH6_S2_N02, {
  sceneTitle: "ساختمان رنر",
  blocks: [
    { type: "dialogue", speaker: "رنر", text: "دفترها. دفترهای واقعی، نه آن نسخهٔ تمیزی که به بازرسان نشان می‌دهیم. بارنامه‌هایی که وزنشان با محموله جور درنمی‌آمد، پرداخت‌هایی که هیچ مشتری‌ای پشتشان نبود. و یک صفحه دربارهٔ بار نبود؛ دربارهٔ آدم‌ها بود. کسانی که شرکت استخدامشان کرده بود، بی‌آن‌که یک بار پا به ساختمان بگذارند." },
    { type: "dialogue", speaker: "آدری", text: "اسم‌ها؟" },
    { type: "dialogue", speaker: "رنر", text: "یک اسم بیشتر امضا می‌کرد؛ نه، در واقع یک عنوان. صدایش می‌زدند «رهبر». انگار او تصمیم می‌گرفت کدام قطار برسد و کدام‌یکی… نه." },
  ],
  choices: [
    { id: "CH6_S2_N02-A", label: "بپرس آیا رهبر را با چشم خودش دیده یا نه.", target: "CH6_S2_N03A" },
    { id: "CH6_S2_N02-B", label: "بپرس سرِ آدم‌هایی که فقط روی کاغذ کارمند بودند چه آمد.", target: "CH6_S2_N03B" },
    { id: "CH6_S2_N02-C", label: "بپرس چرا دفترها را به پلیس نداد و سوزاند.", target: "CH6_S2_N03C" },
  ],
});

Object.assign(nodes.CH6_S2_N03, {
  sceneTitle: "ساختمان رنر",
  blocks: [
    { type: "narration", text: "رنر از زیر تخته‌ای لق، تکه‌کاغذی نم‌کشیده بیرون می‌آورد؛ بخشی از یک بارنامه که روی لبهٔ پاره‌اش نوشته شده: «پرسنل ـ محرمانه». پایینش، با خطی مرتب: «مجاز از سوی رهبر.»" },
    { type: "dialogue", speaker: "آدری", text: "این واقعی است. اولین چیز واقعی‌ای که از آن روز گیرمان آمده…" },
    { type: "dialogue", speaker: "نیک", text: "برای شروع کافی است." },
    { type: "dialogue", speaker: "رنر", text: "فقط… به کسی نگویید از کجا آوردیدش." },
  ],
});

const header = 'import type { StoryBlock, StoryChoice } from "./story.generated";\n\ntype FarsiNode = { sceneTitle: string; blocks: StoryBlock[]; choices: StoryChoice[] };\n\n';
await writeFile(target, `${header}export const chapter6Farsi: Record<string, FarsiNode> = ${JSON.stringify(nodes, null, 2)};\n`);
console.log("Refined the Chapter 6 opening in natural Persian.");
