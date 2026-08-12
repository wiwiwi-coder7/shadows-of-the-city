import { mkdir, writeFile } from "node:fs/promises";

const baseUrl = "https://3000-ism9jhcvmk1rkssvmqlvj-04f68d10.us2.manus.computer";
const outputDirectory = "/home/ubuntu/qa/shadows-of-the-city-full-persian";
await mkdir(outputDirectory, { recursive: true });
const browserInfo = await (await fetch("http://127.0.0.1:9222/json/version")).json();
const socket = new WebSocket(browserInfo.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { socket.addEventListener("open", resolve, { once: true }); socket.addEventListener("error", reject, { once: true }); });
let id = 0;
const pending = new Map();
socket.addEventListener("message", event => { const message = JSON.parse(event.data); if (message.id && pending.has(message.id)) { const { resolve, reject } = pending.get(message.id); pending.delete(message.id); message.error ? reject(new Error(message.error.message)) : resolve(message.result); } });
function cdp(method, params = {}, sessionId) { const messageId = ++id; socket.send(JSON.stringify({ id: messageId, method, params, ...(sessionId ? { sessionId } : {}) })); return new Promise((resolve, reject) => pending.set(messageId, { resolve, reject })); }
const { targetId } = await cdp("Target.createTarget", { url: "about:blank" });
const { sessionId } = await cdp("Target.attachToTarget", { targetId, flatten: true });
await cdp("Page.enable", {}, sessionId); await cdp("Runtime.enable", {}, sessionId);
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
const evaluate = async expression => (await cdp("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true }, sessionId)).result.value;
async function capture(name) { const { data } = await cdp("Page.captureScreenshot", { format: "png" }, sessionId); await writeFile(`${outputDirectory}/${name}.png`, Buffer.from(data, "base64")); }

const samples = Array.from({ length: 9 }, (_, index) => ({ chapter: index + 2, id: `CH${index + 2}_S1_N01` }));
async function loadChapter(sample) {
  await cdp("Page.navigate", { url: `${baseUrl}/play?lang=fa` }, sessionId); await pause(900);
  const save = { version: 1, currentNodeId: sample.id, visitedNodeIds: [sample.id], selectedChoiceIds: [], flags: { [`chapter_${sample.chapter}`]: true }, unlockedIds: [], lastPlayedAt: Date.now() };
  await evaluate(`localStorage.setItem('shadows-of-the-city:save', ${JSON.stringify(JSON.stringify(save))}); location.reload();`); await pause(1200);
  const before = JSON.parse(await evaluate("JSON.stringify((() => { const story = document.querySelector('.story-copy')?.innerText ?? ''; return { language: document.documentElement.lang, direction: document.documentElement.dir, hasPersian: /[\u0600-\u06FF]/.test(story), hasFallback: Boolean(document.querySelector('.story-fallback')), hasProductionLanguage: /[\[\]]|پالت(?: رنگی)?\s*:|حال[‌\s]*و[‌\s]*هوا\s*:|یادداشت طراح|توضیح شاخه|صحنه.*(?:پایان|انتقال)|فصل.*(?:پایان|انتقال)/.test(story), choices: document.querySelectorAll('.choice-list button').length, node: localStorage.getItem('shadows-of-the-city:save') }; })())"));
  const advanced = await evaluate("(() => { const choice = document.querySelector('.choice-list button'); if (!choice) return false; choice.click(); return true; })()");
  await pause(500);
  const after = JSON.parse(await evaluate("JSON.stringify((() => { const story = document.querySelector('.story-copy')?.innerText ?? ''; return { hasPersian: /[\u0600-\u06FF]/.test(story), hasFallback: Boolean(document.querySelector('.story-fallback')), hasProductionLanguage: /[\[\]]|پالت(?: رنگی)?\s*:|حال[‌\s]*و[‌\s]*هوا\s*:|یادداشت طراح|توضیح شاخه|صحنه.*(?:پایان|انتقال)|فصل.*(?:پایان|انتقال)/.test(story), node: JSON.parse(localStorage.getItem('shadows-of-the-city:save')).currentNodeId }; })())"));
  return { chapter: sample.chapter, id: sample.id, before, advanced, after };
}

const desktop = [];
for (const sample of samples) {
  desktop.push(await loadChapter(sample));
  await capture(`chapter-${sample.chapter}-desktop`);
}
await cdp("Emulation.setDeviceMetricsOverride", { width: 375, height: 812, deviceScaleFactor: 1, mobile: true }, sessionId);
const mobile = [];
for (const sample of samples) {
  const result = await loadChapter(sample);
  result.storyWidth = await evaluate("document.querySelector('.story-copy')?.getBoundingClientRect().width");
  result.viewport = await evaluate("window.innerWidth");
  mobile.push(result);
  await capture(`chapter-${sample.chapter}-mobile`);
}
console.log(JSON.stringify({ desktop, mobile, outputDirectory }, null, 2)); socket.close();
