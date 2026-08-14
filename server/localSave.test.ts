import { describe, expect, it } from "vitest";
import { emptySave } from "../client/src/lib/gameState";

describe("browser-local game save", () => {
  it("creates a versioned save that retains the exact resume node and progress collections", () => {
    const save = emptySave("CH1_S1_N01");
    expect(save.version).toBe(2);
    expect(save.currentNodeId).toBe("CH1_S1_N01");
    expect(save.visitedNodeIds).toEqual(["CH1_S1_N01"]);
    expect(save.selectedChoiceIds).toEqual([]);
    expect(save.unlockedIds.length).toBeGreaterThan(0);
  });
});
