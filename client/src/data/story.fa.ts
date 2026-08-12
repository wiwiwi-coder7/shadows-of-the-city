import type { StoryNode } from "./story.generated";
import { chapter1Farsi } from "./chapter1.fa";
import { chapter2Farsi } from "./chapter2.fa";
import { chapter3Farsi } from "./chapter3.fa";
import { chapter4Farsi } from "./chapter4.fa";
import { chapter5Farsi } from "./chapter5.fa";
import { chapter6Farsi } from "./chapter6.fa";
import { chapter7Farsi } from "./chapter7.fa";
import { chapter8Farsi } from "./chapter8.fa";
import { chapter9Farsi } from "./chapter9.fa";
import { chapter10Farsi } from "./chapter10.fa";

export const persianStoryNodes = { ...chapter1Farsi, ...chapter2Farsi, ...chapter3Farsi, ...chapter4Farsi, ...chapter5Farsi, ...chapter6Farsi, ...chapter7Farsi, ...chapter8Farsi, ...chapter9Farsi, ...chapter10Farsi };

const presentationOnly = /^(?:\s*[-–]\s*(?:fixed|relationship|branch|choice|note|continuity|design|writer|نتایج|پرچم|شاخه|یادداشت)|\s*\[?\s*(?:(?:scene|chapter)\s+\d+\s+(?:ends?|begins?|start|end|transition)|(?:صحنه|فصل)\s*\d*\s*(?:به پایان|شروع|پایان|انتقال))|\s*(?:interior|exterior|wide shot|close on|establishing shot|camera|cut to|فضای داخلی|فضای خارجی|خارج به داخل|نمای باز|نمای نزدیک|کادربندی|پالت|حالت|خلق و خو))/i;
const productionTerms = /(?:\bpalette\s*:|\bmood\s*:|\bcamera\s*:|\bframing\s*:|\bproduction\s+note\b|\bbranch\s+(?:note|design)\b|\brelationship\s+flag\b|پالت(?:\s*رنگی)?\s*:|حالت\s*:|حال[‌\s]*و[‌\s]*هوا\s*:|کادربندی\s*:|یادداشت\s*(?:طراح|تولید)|توضیح\s*شاخه|پرچم\s*(?:رابطه|های))/i;

function cleanPlayerText(raw: string) {
  if (presentationOnly.test(raw) || productionTerms.test(raw)) return null;
  const text = raw
    .replace(/^\s*\([^)]{0,220}\)\s*/g, "")
    .replace(/\s*\[[^\]]*\]/g, "")
    .replace(/^\s*["“]|["”]\s*$/g, "")
    .trim();
  return text || null;
}

function cleanSceneTitle(raw: string) {
  const cleaned = raw
    .replace(/\s*[\(（][^\)）]{0,160}[\)）]/g, "")
    .replace(/\s*[-–—]\s*(?:تصمیم|تله|اتهام|یادداشت|پایان|آغاز|انتقال|رویارویی|پی‌آمد).*/, "")
    .trim();
  return /^(?:پایان[‌\s-]*بندی|epilogue)$/i.test(cleaned) ? "کرانهٔ بندر" : cleaned;
}

export function hasPersianStoryNode(nodeId: string) {
  return Boolean(persianStoryNodes[nodeId]);
}

export function localizeStoryNode(node: StoryNode, locale: "en" | "fa"): StoryNode {
  const translation = locale === "fa" ? persianStoryNodes[node.id] : undefined;
  const merged = translation ? { ...node, ...translation } : node;
  return {
    ...merged,
    sceneTitle: cleanSceneTitle(merged.sceneTitle),
    blocks: merged.blocks.map(block => {
      const text = cleanPlayerText(block.text);
      if (!text) return null;
      return { ...block, ...(["NARRATION", "راوی"].includes(block.speaker ?? "") ? { type: "narration" as const, speaker: undefined } : {}), text };
    }).filter((block): block is StoryNode["blocks"][number] => Boolean(block)),
  };
}
