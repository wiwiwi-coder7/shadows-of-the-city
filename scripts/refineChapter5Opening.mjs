import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const target = path.join(new URL("..", import.meta.url).pathname, "client/src/data/chapter5.fa.ts");
const source = await readFile(target, "utf8");
const declaration = "export const chapter5Farsi: Record<string, FarsiNode> = ";
const start = source.indexOf("{", source.indexOf(declaration));
const end = source.lastIndexOf("};");
const nodes = Function(`return (${source.slice(start, end + 1)});`)();

Object.assign(nodes.CH5_S1_N01, {
  sceneTitle: "پناهگاه امن",
  blocks: [
    { type: "dialogue", speaker: "آدین", text: "پیدایش کرده‌ام؛ همان پیکی که نشانی‌ات را لو داد، یا کسی که مستقیم به او می‌رسد. قرار امشب است: یک نفر، یک انبار، بی‌سروصدا. می‌روم تو، اسمش را درمی‌آورم و برمی‌گردم." },
    { type: "dialogue", speaker: "آدری", text: "پس من هم می‌آیم." },
    { type: "dialogue", speaker: "آدین", text: "تو همین حالا هم به زور سرپا ایستاده‌ای." },
    { type: "dialogue", speaker: "آدری", text: "هنوز می‌توانم چاقو دست بگیرم." },
  ],
  choices: [
    { id: "CH5_S1_N01-A", label: "طرف آدین را بگیر؛ به آدری بگو هنوز آماده نیست.", target: "CH5_S1_N02A" },
    { id: "CH5_S1_N01-B", label: "راه میانه‌ای پیدا کن؛ خودت به‌جای آدری با آدین برو.", target: "CH5_S1_N02B" },
    { id: "CH5_S1_N01-C", label: "دخالت نکن؛ این میان خودشان است.", target: "CH5_S1_N02C" },
  ],
});

Object.assign(nodes.CH5_S1_N02, {
  sceneTitle: "پناهگاه امن",
  blocks: [
    { type: "dialogue", speaker: "آدین", text: "قبل از آن‌که حتی فرصت کنی از دستم عصبانی باشی برمی‌گردم. فقط یک اسم می‌خواهم. بعد می‌بریمش پیش نیک و این بار درست پیش می‌رویم؛ با هم، نه مثل آدم‌هایی که برای غرورشان خودشان را به کشتن می‌دهند." },
    { type: "dialogue", speaker: "آدری", text: "بهتر است همین کار را بکنی. آدم زیادی نمانده که این حرف‌ها را به من بزند." },
    { type: "dialogue", speaker: "آدین", text: "خوش‌شانسی؛ خیال دارم مدت زیادی رو مخت بروم." },
  ],
  choices: [
    { id: "CH5_S1_N02-A", label: "یک قرار ایمنی بگذار؛ زمان مشخصی برای تماس تعیین کن.", target: "CH5_S1_N03A" },
    { id: "CH5_S1_N02-B", label: "چیزی نگو؛ بگذار این لحظه مال خودشان باشد.", target: "CH5_S1_N03B" },
    { id: "CH5_S1_N02-C", label: "صادقانه برایش آرزوی موفقیت کن.", target: "CH5_S1_N03C" },
  ],
});

Object.assign(nodes.CH5_S1_N03, {
  sceneTitle: "پناهگاه امن",
  blocks: [
    { type: "narration", text: "ادین پالتویش را می‌پوشد، یک بار دیگر دست آدری را فشار می‌دهد و بیرون می‌زند؛ با همان آرامش کسی که بارها از دل کارهای سخت برگشته است." },
    { type: "narration", text: "در که بسته می‌شود، اتاق کوچک‌تر به نظر می‌رسد؛ انگار گرم‌ترین آدمش را با خود برده باشد." },
  ],
});

Object.assign(nodes.CH5_S2_N01, {
  sceneTitle: "انبار",
  blocks: [
    { type: "narration", text: "دو ساعت می‌گذرد، بعد دو ساعت و ده دقیقه؛ و هیچ‌کدام‌شان نمی‌گوید که دارد زمان را می‌شمارد. آدری جلوی درِ باز انبار می‌ایستد و یک‌باره ساکت می‌شود." },
    { type: "dialogue", speaker: "آدری", text: "آن در نباید باز می‌ماند. نه برای او. او محتاط بود." },
  ],
});

Object.assign(nodes.CH5_S2_N02, {
  sceneTitle: "انبار",
  blocks: [
    { type: "narration", text: "پشت صندوق‌های واژگون پیدایش می‌کنند؛ میان نشانه‌های زد و خوردی کوتاه و نابرابر. ردپاها روی کف زیاد است و روی دیوارها کم؛ یک نفر در برابر چند نفر." },
    { type: "narration", text: "ادین هنوز نفس می‌کشد. به‌سختی. نور فانوس را دنبال می‌کند تا صورت آدری را ببیند و سایه‌ای از لبخند همیشگی‌اش، یک بار دیگر، روی صورتش می‌نشیند." },
    { type: "dialogue", speaker: "آدین", text: "نگفتم؟ رو مخت می‌روم… خیلی طولانی." },
    { type: "narration", text: "جمله در گلویش می‌ماند. آدری کنارش روی زمین می‌افتد و دست‌هایش را روی زخمی می‌فشارد که از همان اول می‌داند نمی‌تواند مهارش کند." },
  ],
});

Object.assign(nodes.CH5_S3_N01, {
  sceneTitle: "پس‌لرزه",
  blocks: [
    { type: "narration", text: "آدری مدت درازی تکان نمی‌خورد. بعد سر بلند می‌کند و این بار به ادین نگاه نمی‌کند؛ به نیک نگاه می‌کند. چیزی در صورتش باز شده که نیک تا آن روز ندیده بود؛ خام، بی‌پناه و خطرناک." },
    { type: "dialogue", speaker: "آدری", text: "کارِ آن‌هاست. آدم‌های تو. سازمان تو. نفسش می‌بُرد. تو. همه‌اش تقصیر توست." },
  ],
  choices: [
    { id: "CH5_S3_N01-A", label: "ساکت بمان و بگذار غمش راه خودش را برود.", target: "CH5_S3_N02A" },
    { id: "CH5_S3_N01-B", label: "آرام بگو که در این ماجرا نقشی نداشتی؛ بی‌آن‌که از خودت دفاع کنی.", target: "CH5_S3_N02B" },
    { id: "CH5_S3_N01-C", label: "بی‌کلام نزدیک‌تر شو؛ پیش از هر بحثی فقط آن‌جا باش.", target: "CH5_S3_N02C" },
  ],
});

Object.assign(nodes.CH5_S3_N02, {
  sceneTitle: "پس‌لرزه",
  blocks: [
    { type: "narration", text: "آدری ناگهان بلند می‌شود. غمش دندان درمی‌آورد و فاصله را تا نیک با قدم‌هایی تند و خطرناک کم می‌کند." },
    { type: "dialogue", speaker: "آدری", text: "او مرد چون دنبال همان نشت اطلاعاتی رفت؛ نشتی که درست از وقتی تو برگشتی شروع شد. بگو تصادف است. بگو!" },
  ],
  choices: [
    { id: "CH5_S3_N02-A", label: "اگر خواست بزندت، بگذار؛ هیچ جوابی نده.", target: "CH5_S3_N03A" },
    { id: "CH5_S3_N02-B", label: "آرام و محکم بمان؛ به چشم‌هایش نگاه کن و عقب نرو.", target: "CH5_S3_N03B" },
    { id: "CH5_S3_N02-C", label: "آرام نام ادین را بگو؛ او را از خشم به این لحظه برگردان.", target: "CH5_S3_N03C" },
  ],
});

Object.assign(nodes.CH5_S3_N03, {
  sceneTitle: "پس‌لرزه",
  blocks: [
    { type: "narration", text: "هر راهی که آمده باشند، خشم آخرش می‌شکند؛ نه این‌که حل شود، فقط می‌شکند. آدری می‌لرزد؛ خشمگین، داغدار و برای نخستین بار بی‌هیچ سپری." },
    { type: "dialogue", speaker: "آدری", text: "لازم دارم تقصیر تو باشد، می‌فهمی؟ لازم دارم یکی را سرزنش کنم؛ و تو ساده‌ترین نفری." },
  ],
});

Object.assign(nodes.CH5_S4_N01, {
  sceneTitle: "دلداری",
  blocks: [
    { type: "dialogue", speaker: "نیک", text: "این‌طور نیست. تقصیر من است؛ منظورم همین است. می‌دانم چیزی را درست نمی‌کند و لازم نیست امشب، یا هیچ‌وقت، حرفم را باور کنی. اما نمی‌گذارم فقط چون حقیقت سنگین‌تر است، بار یک دروغ را روی دوشت بگذاری." },
    { type: "narration", text: "آدری فوراً جواب نمی‌دهد. دوباره به بدن بی‌حرکت ادین نگاه می‌کند و بعد به نیک. چیزی دیگر پشت چشم‌هایش می‌شکند." },
  ],
  choices: [
    { id: "CH5_S4_N01-A", label: "یک قدم نزدیک شو و بی‌کلام آغوشت را باز کن.", target: "CH5_S4_N02A" },
    { id: "CH5_S4_N01-B", label: "همان‌جا بمان و ساده بگو متأسفی.", target: "CH5_S4_N02B" },
    { id: "CH5_S4_N01-C", label: "کنار ادین زانو بزن و غم را در کنارش شریک شو.", target: "CH5_S4_N02C" },
  ],
});

Object.assign(nodes.CH5_S4_N02, {
  sceneTitle: "دلداری",
  blocks: [
    { type: "narration", text: "هر راهی که به این لحظه رسیده باشند، آخرش در یک حقیقت خاموش می‌نشینند: آدری برای نخستین‌بار از وقتی نیک می‌شناسدش، می‌گذارد کسی نزدیکش بماند؛ نه از روی تاکتیک و نه برای بقا، فقط چون هر دو چیزی را از دست داده‌اند که تنهایی از پسش برنمی‌آید." },
    { type: "dialogue", speaker: "نیک", text: "متأسفم. اگر فرقی دارد، من هم دوستش داشتم. باعث می‌شد تمام این جنگِ لعنتی، هر بار چند دقیقه کمتر شبیه جنگ باشد؛ و فکر نمی‌کنم هیچ‌وقت به او گفته باشم." },
    { type: "dialogue", speaker: "آدری", text: "خوشحال می‌شد بشنود. همیشه می‌گفت تو را دوست دارد؛ برخلاف قضاوت بهترش." },
    { type: "narration", text: "مدتی همان‌جا می‌مانند. چیزی را درست نمی‌کنند و چیزی را حل نمی‌کنند؛ فقط حاضرند، بی‌آن‌که دیگر توانی برای نگه‌داشتن سپرهایشان داشته باشند." },
  ],
  choices: [
    { id: "CH5_S4_N02-A", label: "سکوت کن و لحظه را نگه دار.", target: "CH5_S4_N03A" },
    { id: "CH5_S4_N02-B", label: "قول بده کسی که این کار را کرده، پاسخ‌گو خواهد شد.", target: "CH5_S4_N03B" },
    { id: "CH5_S4_N02-C", label: "بپرس می‌خواهد حرف بزند یا مدتی ساکت بماند.", target: "CH5_S4_N03C" },
  ],
});

const header = 'import type { StoryBlock, StoryChoice } from "./story.generated";\n\ntype FarsiNode = { sceneTitle: string; blocks: StoryBlock[]; choices: StoryChoice[] };\n\n';
await writeFile(target, `${header}export const chapter5Farsi: Record<string, FarsiNode> = ${JSON.stringify(nodes, null, 2)};\n`);
console.log("Refined the Chapter 5 opening in natural Persian.");
