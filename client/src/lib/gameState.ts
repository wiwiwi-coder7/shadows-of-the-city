export type TextScale = "sm" | "md" | "lg";

export type GameSettings = {
  textScale: TextScale;
  highContrast: boolean;
  reducedMotion: boolean;
  sceneEffects: boolean;
  muted: boolean;
  musicVolume: number;
  ambienceVolume: number;
  effectsVolume: number;
  telemetryEnabled: boolean;
};

export type LocalSave = {
  version: 1;
  currentNodeId: string;
  visitedNodeIds: string[];
  selectedChoiceIds: string[];
  flags: Record<string, boolean>;
  unlockedIds: string[];
  lastPlayedAt: number;
};

export const SAVE_KEY = "shadows-of-the-city:save";
export const SETTINGS_KEY = "shadows-of-the-city:settings";
export const INSTALLATION_KEY = "shadows-of-the-city:installation";

export const defaultSettings: GameSettings = {
  textScale: "md",
  highContrast: false,
  reducedMotion: false,
  sceneEffects: true,
  muted: false,
  musicVolume: 60,
  ambienceVolume: 45,
  effectsVolume: 55,
  telemetryEnabled: true,
};

export function readSettings(): GameSettings {
  if (typeof window === "undefined") return defaultSettings;
  try {
    return { ...defaultSettings, ...JSON.parse(localStorage.getItem(SETTINGS_KEY) ?? "{}") };
  } catch {
    return defaultSettings;
  }
}

export function writeSettings(settings: GameSettings) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

export function readSave(): LocalSave | null {
  if (typeof window === "undefined") return null;
  try {
    const parsed = JSON.parse(localStorage.getItem(SAVE_KEY) ?? "null");
    if (!parsed || parsed.version !== 1 || typeof parsed.currentNodeId !== "string") return null;
    return parsed as LocalSave;
  } catch {
    return null;
  }
}

export function writeSave(save: LocalSave) {
  localStorage.setItem(SAVE_KEY, JSON.stringify(save));
}

export function removeSave() {
  localStorage.removeItem(SAVE_KEY);
}

export function getInstallationId() {
  const existing = localStorage.getItem(INSTALLATION_KEY);
  if (existing) return existing;
  const identifier = crypto.randomUUID();
  localStorage.setItem(INSTALLATION_KEY, identifier);
  return identifier;
}

export function emptySave(currentNodeId: string): LocalSave {
  return {
    version: 1,
    currentNodeId,
    visitedNodeIds: [currentNodeId],
    selectedChoiceIds: [],
    flags: { started: true, chapter_1: true },
    unlockedIds: ["character:nick", "place:harbor-district"],
    lastPlayedAt: Date.now(),
  };
}

export function shouldTrackGameplay(settings: GameSettings) {
  return settings.telemetryEnabled;
}
