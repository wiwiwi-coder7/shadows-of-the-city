import { describe, expect, it } from "vitest";
import { chapter1Farsi, localizeChapterOneNode } from "../client/src/data/chapter1.fa";
import { localizeStoryNode, persianStoryNodes } from "../client/src/data/story.fa";
import { storyNodes } from "../client/src/data/story.generated";

describe("Persian story localization", () => {
  it("covers every Chapter 1 runtime node, including each narrative convergence", () => {
    const chapterOneIds = storyNodes.filter(node => node.chapter === 1).map(node => node.id).sort();
    expect(chapterOneIds).toHaveLength(17);
    expect(Object.keys(chapter1Farsi).sort()).toEqual(chapterOneIds);
  });

  it("covers all 120 runtime nodes and preserves every structural choice destination", () => {
    expect(Object.keys(persianStoryNodes).sort()).toEqual(storyNodes.map(node => node.id).sort());
    storyNodes.forEach(node => {
      const localized = localizeStoryNode(node, "fa");
      expect(localized.choices.map(choice => ({ id: choice.id, target: choice.target }))).toEqual(node.choices.map(choice => ({ id: choice.id, target: choice.target })));
      expect(localized.sceneTitle).not.toBe(node.sceneTitle);
      expect(localized.blocks).toHaveLength(node.blocks.length);
      expect(localized.choices).toHaveLength(node.choices.length);
      expect(localized.sceneTitle).not.toMatch(/[A-Za-z]{2,}/);
      localized.blocks.forEach(block => {
        expect(block.text.trim().length).toBeGreaterThan(0);
        expect(block.text).not.toMatch(/[A-Za-z]{2,}/);
        if (block.speaker) expect(block.speaker).not.toMatch(/[A-Za-z]{2,}/);
      });
      localized.choices.forEach(choice => {
        expect(choice.label.trim().length).toBeGreaterThan(0);
        expect(choice.label).not.toMatch(/[A-Za-z]{2,}/);
      });
    });
  });

  it("returns English unchanged when English is selected or a Persian entry is unexpectedly missing", () => {
    const opening = storyNodes[0];
    const missingTranslation = { ...opening, id: "MISSING_PERSIAN_ENTRY" };
    expect(localizeStoryNode(opening, "en")).toBe(opening);
    expect(localizeStoryNode(missingTranslation, "fa")).toBe(missingTranslation);
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
