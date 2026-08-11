import { describe, expect, it } from "vitest";
import { defaultSettings, emptySave, shouldTrackGameplay } from "../client/src/lib/gameState";
import { unlockForChapter } from "../client/src/lib/unlocks";

describe("local player state", () => {
  it("starts a new case with only the non-spoiler baseline files unlocked", () => {
    const save = emptySave("CH1_S1_N01");
    expect(save.currentNodeId).toBe("CH1_S1_N01");
    expect(save.unlockedIds).toEqual(["character:nick", "place:harbor-district"]);
  });

  it("unlocks later character files only after the relevant chapter", () => {
    const initial = emptySave("CH1_S1_N01");
    expect(unlockForChapter(initial, 2)).toContain("character:anton");
    expect(unlockForChapter(initial, 2)).not.toContain("character:vivienne");
    expect(unlockForChapter(initial, 7)).toContain("character:vivienne");
  });

  it("honors the anonymous telemetry privacy opt-out", () => {
    expect(shouldTrackGameplay(defaultSettings)).toBe(true);
    expect(shouldTrackGameplay({ ...defaultSettings, telemetryEnabled: false })).toBe(false);
  });
});
