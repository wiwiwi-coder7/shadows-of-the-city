import { describe, expect, it } from "vitest";
import { chapter1Farsi, localizeChapterOneNode } from "../client/src/data/chapter1.fa";
import { storyNodes } from "../client/src/data/story.generated";

describe("Chapter 1 Persian localization", () => {
  it("covers every Chapter 1 runtime node, including each narrative convergence", () => {
    const chapterOneIds = storyNodes.filter(node => node.chapter === 1).map(node => node.id).sort();
    expect(chapterOneIds).toHaveLength(17);
    expect(Object.keys(chapter1Farsi).sort()).toEqual(chapterOneIds);
  });

  it("provides an authored Persian overlay for the Chapter 1 opening including every choice", () => {
    const translation = chapter1Farsi.CH1_S1_N01;
    expect(translation.sceneTitle).toBe("آپارتمان نیک");
    expect(translation.blocks[0].text).toContain("بیدار شو");
    expect(translation.choices).toHaveLength(3);
    expect(translation.choices[0].label).toContain("آستر");
  });

  it("uses Persian narrative content only for Chapter 1 and preserves English later chapters", () => {
    const opening = storyNodes.find(node => node.id === "CH1_S1_N01")!;
    const chapterTwo = storyNodes.find(node => node.chapter === 2)!;
    const localizedOpening = localizeChapterOneNode(opening, "fa");
    expect(localizedOpening.blocks[0].text).toContain("بیدار شو");
    expect(localizedOpening.choices[0].target).toBe(opening.choices[0].target);
    expect(localizeChapterOneNode(chapterTwo, "fa")).toBe(chapterTwo);
    expect(localizeChapterOneNode(opening, "en")).toBe(opening);
  });
});
