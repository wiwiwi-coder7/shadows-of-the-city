import { mkdir, writeFile } from "node:fs/promises";

const baseUrl = "https://3000-ism9jhcvmk1rkssvmqlvj-04f68d10.us2.manus.computer";
const outputDir = "/home/ubuntu/qa/shadows-of-the-city";
await mkdir(outputDir, { recursive: true });

const browserInfo = await (await fetch("http://127.0.0.1:9222/json/version")).json();
const socket = new WebSocket(browserInfo.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { socket.addEventListener("open", resolve, { once: true }); socket.addEventListener("error", reject, { once: true }); });

let messageId = 0;
const pending = new Map();
socket.addEventListener("message", event => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    message.error ? reject(new Error(message.error.message)) : resolve(message.result);
  }
});

function cdp(method, params = {}, sessionId) {
  const id = ++messageId;
  socket.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}

const { targetId } = await cdp("Target.createTarget", { url: "about:blank" });
const { sessionId } = await cdp("Target.attachToTarget", { targetId, flatten: true });
await cdp("Page.enable", {}, sessionId);
await cdp("Runtime.enable", {}, sessionId);
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
const evaluate = async expression => (await cdp("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true }, sessionId)).result.value;
const screenshot = async name => {
  const { data } = await cdp("Page.captureScreenshot", { format: "png", captureBeyondViewport: false }, sessionId);
  await writeFile(`${outputDir}/${name}.png`, Buffer.from(data, "base64"));
};

await cdp("Page.navigate", { url: `${baseUrl}/settings` }, sessionId);
await pause(1600);
await evaluate("localStorage.clear(); location.reload();");
await pause(1600);
const before = await evaluate("document.documentElement.lang + '|' + document.documentElement.dir");
const clicked = await evaluate("(() => { const button = [...document.querySelectorAll('button')].find(item => item.textContent.includes('فارسی / Persian')); if (!button) return false; button.click(); return true; })()");
await pause(500);
const after = await evaluate("document.documentElement.lang + '|' + document.documentElement.dir + '|' + JSON.parse(localStorage.getItem('shadows-of-the-city:settings')).locale");
await screenshot("settings-after-in-app-farsi-switch");

await cdp("Page.navigate", { url: `${baseUrl}/play` }, sessionId);
await pause(1600);
const playState = await evaluate("document.documentElement.lang + '|' + document.documentElement.dir + '|' + document.querySelector('.story-copy')?.innerText.slice(0, 160)");
await screenshot("play-chapter-one-persisted-farsi");
const advancedChoice = await evaluate("(() => { const choice = document.querySelector('.choice-list button'); if (!choice) return false; choice.click(); return true; })()");
await pause(500);
const chapterOneFlow = await evaluate("document.querySelector('.story-copy')?.innerText.includes('نشانی برنجی')");
await screenshot("play-chapter-one-after-first-choice-farsi");

await cdp("Emulation.setDeviceMetricsOverride", { width: 375, height: 812, deviceScaleFactor: 1, mobile: true }, sessionId);
await cdp("Page.reload", { ignoreCache: true }, sessionId);
await pause(1000);
const mobileState = await evaluate("document.documentElement.lang + '|' + document.documentElement.dir + '|' + Boolean(document.querySelector('.choice-list')) + '|' + Boolean(document.querySelector('.narration'))");
await screenshot("play-mobile-persisted-farsi");

console.log(JSON.stringify({ before, clicked, after, playState, advancedChoice, chapterOneFlow, mobileState, outputDir }, null, 2));
socket.close();
