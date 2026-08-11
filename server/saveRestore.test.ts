import { afterEach, describe, expect, it, vi } from "vitest";
import { emptySave, readSave, writeSave } from "../client/src/lib/gameState";

describe("browser-local save restoration", () => {
  afterEach(() => vi.unstubAllGlobals());

  it("persists the case state and restores it without a server dependency", () => {
    const store = new Map<string, string>();
    vi.stubGlobal("window", {});
    vi.stubGlobal("localStorage", { getItem: (key: string) => store.get(key) ?? null, setItem: (key: string, value: string) => store.set(key, value), removeItem: (key: string) => store.delete(key) });
    const save = { ...emptySave("CH1_S1_N01"), currentNodeId: "CH2_S1_N01", flags: { chapter_1: true, chapter_2: true } };
    writeSave(save);
    expect(readSave()).toMatchObject({ currentNodeId: "CH2_S1_N01", flags: { chapter_2: true } });
  });
});
