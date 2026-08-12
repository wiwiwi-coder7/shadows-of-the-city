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

Object.assign(nodes.CH7_S2_N02, {
  sceneTitle: "گزارش جعلی",
  blocks: [
    { type: "dialogue", speaker: "آدری", text: "تو در مأموریت شکست نخوردی، نیک. عمداً رهایم کردی؛ بعد هم ردش را آن‌قدر خوب پوشاندی که برای خودت گران تمام شد. وقتی فهمیدند، با تو چه کردند؟" },
    { type: "dialogue", speaker: "نیک", text: "فکر می‌کنم همین الآن دارم می‌فهمم." },
  ],
  choices: [
    { id: "CH7_S2_N02-A", label: "دستور اصلی را لمس کن و ببین خاطره برمی‌گردد یا نه.", target: "CH7_S2_N03A" },
    { id: "CH7_S2_N02-B", label: "از آدری بخواه باقی پرونده را بلند بخواند.", target: "CH7_S2_N03B" },
    { id: "CH7_S2_N02-C", label: "از میز فاصله بگیر و یک لحظه نفس بکش.", target: "CH7_S2_N03C" },
  ],
});

Object.assign(nodes.CH7_S2_N03, {
  sceneTitle: "گزارش جعلی",
  blocks: [
    { type: "narration", text: "هرچه ماشهٔ خاطره باشد، طاق دور نیک حل می‌شود. سنگ، چراغ‌های مرده و بوی کاغذ جای خود را به اتاقی می‌دهند که سال‌هاست در خوابش می‌بیند؛ این بار روشن، دقیق و بی‌رحم." },
  ],
});

Object.assign(nodes.CH7_S3_N01, {
  sceneTitle: "فلش‌بک",
  blocks: [
    { type: "narration", text: "نیک در اتاق ایستاده است؛ یا به همان اندازه که حافظه اجازه می‌دهد نزدیک. در دستش تپانچهٔ سازمانی روکری است و روبه‌رویش آدریِ جوان‌تر روی زانو نشسته، دست‌هایش بسته و خون کنار شقیقه‌اش خشک شده است." },
    { type: "dialogue", speaker: "آدری", text: "پس انجامش بده. یا نده. فقط از ایستادن دست بردار و تصمیم بگیر، انگار این سخت‌ترین سؤال دنیاست." },
    { type: "narration", text: "برای نیک همین است؛ سخت‌ترین سؤال. دستش بالا مانده، اما چیزی بی‌نام پشت دنده‌هایش تصمیم را پیش از او می‌گیرد." },
    { type: "narration", text: "دستش پایین می‌آید؛ یک‌باره، مثل تصمیمی که هرگز واقعاً به آن شک نداشته است." },
    { type: "dialogue", speaker: "نیک", text: "فرار کن. راهروی خدماتیِ سمت شرق تا چهار دقیقه دیده نمی‌شود. بعد از آن دیگر نمی‌توانم کمکت کنم." },
    { type: "narration", text: "آدری به او خیره می‌شود؛ ناباوری، حساب‌کردن، و جرقهٔ چیزی که می‌توانست آغاز اعتماد باشد. می‌پرسد «چرا؟» و نیک جوابی ندارد که در چهار دقیقه جا شود. فقط می‌گوید «برو»؛ و او می‌رود." },
  ],
});

Object.assign(nodes.CH7_S3_N02, {
  sceneTitle: "فلش‌بک",
  blocks: [
    { type: "narration", text: "نیک با نفس‌بریده به طاق برمی‌گردد، روی زانوهایش. دست‌های آدری روی شانه‌های اوست تا زمین‌گیرش کند." },
    { type: "dialogue", speaker: "آدری", text: "نیک. به من نگاه کن. کجایی؟" },
    { type: "dialogue", speaker: "نیک", text: "اینجا. من اینجایم. دیدم... دیدم رهایت کردم." },
    { type: "narration", text: "آدری مدت زیادی حرفی نمی‌زند و دست‌هایش را از شانه‌های او برنمی‌دارد. در نور طاق، سایه‌ای تازه کنار کابینت‌های دور می‌ایستد؛ زنی با لباس خاکستری که انگار همیشه حق داشته آن‌جا باشد." },
  ],
});

Object.assign(nodes.CH7_S4_N01, {
  sceneTitle: "ویوین",
  blocks: [
    { type: "narration", text: "آدری اول او را می‌بیند و دستش تا نیمه به‌سوی تیغه می‌رود." },
    { type: "dialogue", speaker: "آدری", text: "این کیست؟" },
    { type: "dialogue", speaker: "نیک", text: "ویوین." },
    { type: "narration", text: "زن خاکستری از شنیدن نامش تعجب نمی‌کند؛ تنها غمی آرام از صورتش می‌گذرد، انگار مدت‌ها منتظر همین لحظه بوده است." },
  ],
  choices: [
    { id: "CH7_S4_N01-A", label: "نزدیک شو و همین حالا پاسخ بخواه.", target: "CH7_S4_N02A" },
    { id: "CH7_S4_N01-B", label: "سر جایت بمان و بگذار او نزدیک شود.", target: "CH7_S4_N02B" },
    { id: "CH7_S4_N01-C", label: "از آدری بپرس او هم ویوین را می‌بیند یا نه.", target: "CH7_S4_N02C" },
  ],
});

Object.assign(nodes.CH7_S4_N02, {
  sceneTitle: "ویوین",
  blocks: [
    { type: "dialogue", speaker: "ویوین", text: "دوباره اتاق را پیدا کردی. نمی‌دانستم پنهان‌کردنش را آن‌قدر خوب انتخاب کرده‌ام که دیگر هرگز پیدایش نکنی یا نه." },
    { type: "dialogue", speaker: "نیک", text: "تو این کار را با من کردی. حافظه‌ام را گرفتی." },
    { type: "dialogue", speaker: "ویوین", text: "حافظه‌ات را نگه داشتم، نیک. فرق دارد، حتی اگر آن موقع حسش نکردی. آن‌ها می‌خواستند کامل بسوزد. اگر می‌فهمیدند هنوز آدری را به هر فرمانی ترجیح می‌دهی، باقی‌مانده‌ات را هم می‌گرفتند." },
  ],
  choices: [
    { id: "CH7_S4_N02-A", label: "بپرس چرا پنهان‌کردن را به اطاعت ترجیح داد.", target: "CH7_S4_N03A" },
    { id: "CH7_S4_N02-B", label: "بپرس هنوز برای روکری کار می‌کند یا نه.", target: "CH7_S4_N03B" },
    { id: "CH7_S4_N02-C", label: "بپرس بقیهٔ حافظه‌ات برمی‌گردد یا نه.", target: "CH7_S4_N03C" },
  ],
});

Object.assign(nodes.CH7_S4_N03, {
  sceneTitle: "ویوین",
  blocks: [
    { type: "dialogue", speaker: "ویوین", text: "نمی‌توانم بمانم؛ هیچ‌وقت زیاد. این هم بهایی است که خودم انتخاب کردم. اما آنچه آن شب برای تو هزینه داشت، ارزش داشت که حقیقتش را روزی کامل بدانی." },
    { type: "narration", text: "پیش از آن‌که جواب بدهند، رفته است؛ نه با نمایشی بزرگ، فقط با غیبت آرامی که از حضورش هم آزاردهنده‌تر است." },
    { type: "dialogue", speaker: "آدری", text: "چند هزار سؤال دارم." },
  ],
});

const header = 'import type { StoryBlock, StoryChoice } from "./story.generated";\n\ntype FarsiNode = { sceneTitle: string; blocks: StoryBlock[]; choices: StoryChoice[] };\n\n';
await writeFile(target, `${header}export const chapter7Farsi: Record<string, FarsiNode> = ${JSON.stringify(nodes, null, 2)};\n`);
console.log("Refined the Chapter 7 opening in natural Persian.");
