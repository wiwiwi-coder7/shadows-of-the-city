import { describe, expect, it } from "vitest";
import { emptySave } from "../client/src/lib/gameState";
import { unlockedBadgeIds } from "../client/src/lib/badges";

describe("achievement badges", () => {
  it("unlocks badges deterministically from local progress without storing sensitive player data", () => {
    const save = emptySave("CH1_S1_N01");
    save.selectedChoiceIds = Array.from({ length: 12 }, (_, index) => `choice-${index}`);
    save.visitedNodeIds = Array.from({ length: 60 }, (_, index) => `node-${index}`);
    save.flags.chapter_10 = true;
    save.currentNodeId = "CH10_S3_N01";

    expect(unlockedBadgeIds(save, ["CH10_S3_N01"])).toEqual([
      "badge:first-turn",
      "badge:case-cartographer",
      "badge:crossroads",
      "badge:long-night",
      "badge:case-closed",
    ]);
  });

  it("keeps badges locked for an unstarted investigation", () => {
    expect(unlockedBadgeIds(emptySave("CH1_S1_N01"))).toEqual([]);
  });
});
