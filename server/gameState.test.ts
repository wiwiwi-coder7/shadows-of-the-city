import { afterEach, describe, expect, it } from "vitest";
import { defaultSettings, emptySave, readSettings, SETTINGS_KEY, shouldTrackGameplay, writeSettings } from "../client/src/lib/gameState";
import { unlockForChapter } from "../client/src/lib/unlocks";

describe("local player state", () => {
  const originalWindow = globalThis.window;
  const originalLocalStorage = globalThis.localStorage;

  afterEach(() => {
    if (originalWindow) Object.defineProperty(globalThis, "window", { configurable: true, value: originalWindow });
    else delete (globalThis as Record<string, unknown>).window;
    if (originalLocalStorage) Object.defineProperty(globalThis, "localStorage", { configurable: true, value: originalLocalStorage });
    else delete (globalThis as Record<string, unknown>).localStorage;
  });

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

  it("persists the player's selected locale alongside other local settings", () => {
    const values = new Map<string, string>();
    const localStorage = { getItem: (key: string) => values.get(key) ?? null, setItem: (key: string, value: string) => values.set(key, value) };
    Object.defineProperty(globalThis, "window", { configurable: true, value: { localStorage } });
    Object.defineProperty(globalThis, "localStorage", { configurable: true, value: localStorage });
    writeSettings({ ...defaultSettings, locale: "fa" });
    expect(localStorage.getItem(SETTINGS_KEY)).toContain('"locale":"fa"');
    expect(readSettings().locale).toBe("fa");
  });
});
