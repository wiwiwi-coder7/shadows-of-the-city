import { describe, expect, it } from "vitest";
import { storyNodes, storyStartId } from "../client/src/data/story.generated";

describe("approved story runtime data", () => {
  it("contains the full ten-chapter story with a valid entry node", () => {
    expect(storyNodes).toHaveLength(120);
    expect(storyStartId).toBe("CH1_S1_N01");
    expect(new Set(storyNodes.map(node => node.chapter))).toEqual(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  });

  it("assigns an approved image and a coherent fallback destination to every non-final node", () => {
    const ids = new Set(storyNodes.map(node => node.id));
    storyNodes.forEach((node, index) => {
      expect(node.imageUrl).toMatch(/^\/manus-storage\//);
      if (index < storyNodes.length - 1) expect(ids.has(node.nextId ?? "")).toBe(true);
    });
  });

  it("uses Lia as the character's canonical display name", () => {
    const serializedStory = JSON.stringify(storyNodes);
    expect(serializedStory).toContain("Lia");
    expect(serializedStory).not.toMatch(/adry/gi);
    expect(serializedStory).not.toContain("آدری");
  });
});
