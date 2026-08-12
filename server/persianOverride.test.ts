import { describe, expect, it } from "vitest";
import { storyNodes } from "../client/src/data/story.generated";
import { localizeStoryNode, persianStoryNodes } from "../client/src/data/story.fa";

describe("Persian story overrides", () => {
  it("applies Persian text while preserving the original choice destinations", () => {
    const source = storyNodes.find(node => node.id === "CH1_S1_N01")!;
    const translation = persianStoryNodes[source.id];
    const localized = localizeStoryNode(source, "fa", {
      id: source.id,
      sceneTitle: "عنوان آزمون",
      blocks: translation.blocks.map((block, index) => `متن آزمون ${index + 1}`),
      choiceLabels: translation.choices.map((_, index) => `انتخاب آزمون ${index + 1}`),
    });
    expect(localized.sceneTitle).toBe("عنوان آزمون");
    expect(localized.blocks.map(block => block.text)).toEqual(translation.blocks.map((_, index) => `متن آزمون ${index + 1}`));
    expect(localized.choices.map(choice => choice.label)).toEqual(translation.choices.map((_, index) => `انتخاب آزمون ${index + 1}`));
    expect(localized.choices.map(choice => choice.target)).toEqual(source.choices.map(choice => choice.target));
  });

  it("ignores an override whose structure does not match the Persian base node", () => {
    const source = storyNodes.find(node => node.id === "CH1_S1_N01")!;
    const localized = localizeStoryNode(source, "fa", { id: source.id, sceneTitle: "نباید اعمال شود", blocks: ["فقط یک متن"], choiceLabels: [] });
    expect(localized.sceneTitle).not.toBe("نباید اعمال شود");
    expect(localized.choices.map(choice => choice.target)).toEqual(source.choices.map(choice => choice.target));
  });
});
