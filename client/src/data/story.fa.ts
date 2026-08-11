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

export function hasPersianStoryNode(nodeId: string) {
  return Boolean(persianStoryNodes[nodeId]);
}

export function localizeStoryNode(node: StoryNode, locale: "en" | "fa"): StoryNode {
  if (locale !== "fa") return node;
  const translation = persianStoryNodes[node.id];
  return translation ? { ...node, ...translation } : node;
}
