import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const target = path.join(new URL("..", import.meta.url).pathname, "client/src/data/chapter9.fa.ts");
const source = await readFile(target, "utf8");
const declaration = "export const chapter9Farsi: Record<string, FarsiNode> = ";
const start = source.indexOf("{", source.indexOf(declaration));
const end = source.lastIndexOf("};");
const nodes = Function(`return (${source.slice(start, end + 1)});`)();

Object.assign(nodes.CH9_S1_N01, {
  sceneTitle: "کافهٔ گاسپار",
  blocks: [
    { type: "dialogue", speaker: "گاسپار", text: "شما دوتا شبیه آدم‌هایی هستید که می‌خواهند دست به کاری خیلی غیرعاقلانه بزنند." },
    { type: "dialogue", speaker: "آدری", text: "خیلی ضروری است. بخش غیرعاقلانه‌اش بستگی دارد چند هفتهٔ بعد چه‌طور بگذرد." },
    { type: "dialogue", speaker: "گاسپار", text: "یک بار به تو گفتم، نیک، از آن دنیا با دیده‌نشدن بیرون آمدم. فکر می‌کنم دیگر بس است. اگر بگذاری، این پیرمرد هنوز به درد بخشی از این کار می‌خورد." },
  ],
  choices: [
    { id: "CH9_S1_N01-A", label: "با قدردانی بپذیر و بپرس دقیقاً چه کمکی از دستش برمی‌آید.", target: "CH9_S1_N02A" },
    { id: "CH9_S1_N01-B", label: "نگران امنیتش باش و سعی کن منصرفش کنی.", target: "CH9_S1_N02B" },
    { id: "CH9_S1_N01-C", label: "بپرس چرا بعد از این همه سال نظرش عوض شده است.", target: "CH9_S1_N02C" },
  ],
});

Object.assign(nodes.CH9_S1_N02, {
  sceneTitle: "کافهٔ گاسپار",
  blocks: [
    { type: "dialogue", speaker: "گاسپار", text: "یک اسم در کارکنان رسمی گیلدهال دارم؛ کسی که آن‌قدر به من بدهکار است که شب مناسب، نگاهش را برگرداند. و یک هشدار: رهبر خزانه را تنها نمی‌گرداند. نگهبانی دارند که همیشه می‌چرخد؛ کم‌حرف، آرام و حرفه‌ای. از همه خطرناک‌تر همین یکی است." },
    { type: "dialogue", speaker: "آدری", text: "پس به بیش از دو نفر نیاز داریم." },
  ],
  choices: [
    { id: "CH9_S1_N02-A", label: "بلندبلند نام کسانی را ببر که می‌توانند کمک کنند.", target: "CH9_S1_N03A" },
    { id: "CH9_S1_N02-B", label: "مستقیم بپرس آیا واقعاً می‌شود به آن‌ها اعتماد کرد.", target: "CH9_S1_N03B" },
    { id: "CH9_S1_N02-C", label: "پیش از برنامه‌ریزی، فقط از گاسپار تشکر کن.", target: "CH9_S1_N03C" },
  ],
});

Object.assign(nodes.CH9_S1_N03, {
  sceneTitle: "کافهٔ گاسپار",
  blocks: [{ type: "dialogue", speaker: "گاسپار", text: "بروید. کاری را که باید بکنید. هر وقت جایی خواستید که دست‌کم یکی دو ساعت کسی قصد جانتان را نداشته باشد، این در باز است." }],
});

const header = 'import type { StoryBlock, StoryChoice } from "./story.generated";\n\ntype FarsiNode = { sceneTitle: string; blocks: StoryBlock[]; choices: StoryChoice[] };\n\n';
await writeFile(target, `${header}export const chapter9Farsi: Record<string, FarsiNode> = ${JSON.stringify(nodes, null, 2)};\n`);
console.log("Refined the Chapter 9 opening in natural Persian.");
