import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const target = path.join(new URL("..", import.meta.url).pathname, "client/src/data/chapter7.fa.ts");
const source = await readFile(target, "utf8");
const declaration = "export const chapter7Farsi: Record<string, FarsiNode> = ";
const start = source.indexOf("{", source.indexOf(declaration));
const end = source.lastIndexOf("};");
const nodes = Function(`return (${source.slice(start, end + 1)});`)();

Object.assign(nodes.CH7_S1_N01, {
  sceneTitle: "طاق زیر سالن انجمن",
  blocks: [
    { type: "narration", text: "دستورهای اریکا دقیق از آب درآمده: قفسهٔ دروغین، پلکان باریک، و طاقی که پشتشان پنهان بود. آدری با دستکش برچسب کابینت‌ها را در تاریکی می‌خواند." },
    { type: "dialogue", speaker: "آدری", text: "پرونده‌ها بر اساس سال چیده شده‌اند. اگر تکه‌کاغذ رنر درست باشد، باید برگردیم به همان زمانی که همه‌چیز برای تو شروع شد." },
  ],
  choices: [
    { id: "CH7_S1_N01-A", label: "از او بخواه صریح بگوید: زمانی که تو یکی از آن‌ها بودی.", target: "CH7_S1_N02A" },
    { id: "CH7_S1_N01-B", label: "بگذار همین‌طور بماند؛ کلمات سخت‌تر را به او تحمیل نکن.", target: "CH7_S1_N02B" },
    { id: "CH7_S1_N01-C", label: "روی کار تمرکز کن و جست‌وجو را شروع کن.", target: "CH7_S1_N02C" },
  ],
});

Object.assign(nodes.CH7_S1_N02, {
  sceneTitle: "طاق زیر سالن انجمن",
  blocks: [
    { type: "narration", text: "نزدیک به یک ساعت طول می‌کشد تا دست آدری روی کشوی مشخصی مکث کند؛ یک تاریخ و یک شمارهٔ پرونده که انگار زیادی آسان پیدایش کرده‌اند." },
    { type: "dialogue", speaker: "آدری", text: "نیک… باید این را ببینی." },
  ],
  choices: [
    { id: "CH7_S1_N02-A", label: "فوری نزدیک شو و بی‌تردید نگاه کن.", target: "CH7_S1_N03A" },
    { id: "CH7_S1_N02-B", label: "پیش از نزدیک شدن بپرس چه چیزی لازم دارد تا آماده باشد.", target: "CH7_S1_N03B" },
    { id: "CH7_S1_N02-C", label: "اول از حالش بپرس؛ بعد سراغ پرونده برو.", target: "CH7_S1_N03C" },
  ],
});

Object.assign(nodes.CH7_S1_N03, {
  sceneTitle: "طاق زیر سالن انجمن",
  blocks: [{ type: "narration", text: "نیک کنار آدری می‌ایستد و به پرونده‌ای باریک نگاه می‌کند؛ روی جلدش فقط شمارهٔ پرونده و یک واژه مهر شده است: «ناقص»." }],
});

Object.assign(nodes.CH7_S2_N01, {
  sceneTitle: "گزارش جعلی",
  blocks: [
    { type: "narration", text: "دستور حذف کوتاه و سرد است: یک هدف، یک امضای مجوز، و یک جمله: «دارایی به‌خاطر قابلیت اتکا و مهارت رزمی انتخاب شد. شکست پیش‌بینی نمی‌شود.»" },
    { type: "narration", text: "زیر آن، گزارش پیگیری با دست‌خط نیک است؛ عجولانه، اما بی‌تردید مال خودش." },
    { type: "narration", text: "«هدف هنگام انتقال گریخت. تعقیب به‌دلیل فروریختن راهروی شرقی ناممکن شد. بستن پرونده توصیه می‌شود؛ دارایی قابل بازیابی نیست.»" },
    { type: "dialogue", speaker: "آدری", text: "هیچ راهرویی فرونریخت. من آن‌جا بودم، نیک. تو در یک سند رسمی روکری دروغ نوشتی." },
  ],
  choices: [
    { id: "CH7_S2_N01-A", label: "چیزی نگو؛ بگذار خودش ادامه بدهد.", target: "CH7_S2_N02A" },
    { id: "CH7_S2_N01-B", label: "با همان تکه‌های حافظه‌ات، سعی کن توضیح بدهی.", target: "CH7_S2_N02B" },
    { id: "CH7_S2_N01-C", label: "از او بپرس آن شب چه چیزهایی یادش مانده است.", target: "CH7_S2_N02C" },
  ],
});

const header = 'import type { StoryBlock, StoryChoice } from "./story.generated";\n\ntype FarsiNode = { sceneTitle: string; blocks: StoryBlock[]; choices: StoryChoice[] };\n\n';
await writeFile(target, `${header}export const chapter7Farsi: Record<string, FarsiNode> = ${JSON.stringify(nodes, null, 2)};\n`);
console.log("Refined the Chapter 7 opening in natural Persian.");
