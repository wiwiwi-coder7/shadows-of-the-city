import { describe, expect, it } from "vitest";
import { chapter1Farsi } from "../client/src/data/chapter1.fa";
import { localizeStoryNode, persianStoryNodes } from "../client/src/data/story.fa";
import { storyNodes } from "../client/src/data/story.generated";

describe("Persian story localization", () => {
  it("covers every Chapter 1 runtime node, including each narrative convergence", () => {
    const chapterOneIds = storyNodes.filter(node => node.chapter === 1).map(node => node.id).sort();
    expect(chapterOneIds).toHaveLength(17);
    expect(Object.keys(chapter1Farsi).sort()).toEqual(chapterOneIds);
  });

  it("covers all 120 runtime nodes, preserves choices, and removes player-visible production material", () => {
    expect(Object.keys(persianStoryNodes).sort()).toEqual(storyNodes.map(node => node.id).sort());
    storyNodes.forEach(node => {
      const localized = localizeStoryNode(node, "fa");
      expect(localized.choices.map(choice => ({ id: choice.id, target: choice.target }))).toEqual(node.choices.map(choice => ({ id: choice.id, target: choice.target })));
      expect(localized.sceneTitle).not.toBe(node.sceneTitle);
      expect(localized.blocks.length).toBeLessThanOrEqual(node.blocks.length);
      expect(localized.blocks.length > 0 || Boolean(node.nextId) || localized.choices.length > 0).toBe(true);
      expect(localized.choices).toHaveLength(node.choices.length);
      expect(localized.sceneTitle).not.toMatch(/[A-Za-z]{2,}/);
      expect(localized.sceneTitle).not.toMatch(/[\(（\)）]/);
      expect(localized.sceneTitle).not.toMatch(/(?:تصمیم|یادداشت|پایان|آغاز|انتقال)/);
      localized.blocks.forEach(block => {
        expect(block.text.trim().length).toBeGreaterThan(0);
        expect(block.text).not.toMatch(/[A-Za-z]{2,}/);
        expect(block.text).not.toMatch(/\[(?:صحنه|فصل|ثابت|رفع|پایان|expression|tone|state|branch|fixed|transition)/i);
        expect(block.text).not.toMatch(/^(?:فضای داخلی|فضای خارجی|نمای باز|پالت|حالت|خلق و خو|interior|exterior|wide shot|palette|mood)/i);
        if (block.speaker) expect(block.speaker).not.toMatch(/[A-Za-z]{2,}/);
      });
      localized.choices.forEach(choice => {
        expect(choice.label.trim().length).toBeGreaterThan(0);
        expect(choice.label).not.toMatch(/[A-Za-z]{2,}/);
      });
    });
  });

  it("keeps English prose while applying the same production-material cleanup and falls back safely for missing Persian entries", () => {
    const opening = storyNodes[0];
    const missingTranslation = { ...opening, id: "MISSING_PERSIAN_ENTRY" };
    expect(localizeStoryNode(opening, "en").blocks[0].text).toBe(opening.blocks[0].text);
    expect(localizeStoryNode(missingTranslation, "fa").blocks).toEqual(localizeStoryNode(missingTranslation, "en").blocks);
  });

  it("provides an authored Persian overlay for the Chapter 1 opening including every choice", () => {
    const translation = chapter1Farsi.CH1_S1_N01;
    expect(translation.sceneTitle).toBe("آپارتمان نیک");
    expect(translation.blocks[0].text).toContain("پاشو");
    expect(translation.choices).toHaveLength(3);
    expect(translation.choices[0].label).toContain("آستر");
  });

  it("uses the full Persian overlay while retaining continuous source destinations", () => {
    const opening = storyNodes.find(node => node.id === "CH1_S1_N01")!;
    const chapterTwo = storyNodes.find(node => node.chapter === 2)!;
    const localizedOpening = localizeStoryNode(opening, "fa");
    const localizedChapterTwo = localizeStoryNode(chapterTwo, "fa");
    expect(localizedOpening.blocks[0].text).toContain("پاشو");
    expect(localizedOpening.choices[0].target).toBe(opening.choices[0].target);
    expect(localizedChapterTwo.blocks.length).toBeGreaterThan(0);
    expect(localizedChapterTwo.nextId).toBe(chapterTwo.nextId);
  });
});
