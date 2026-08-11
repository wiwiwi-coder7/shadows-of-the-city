import type { LocalSave } from "./gameState";

export function unlockForChapter(save: LocalSave, chapter: number) {
  const newlyUnlocked = [
    chapter >= 1 ? ["character:adry", "character:kurt", "character:gaspar", "character:hiller", "character:ozzie", "symbol:raven", "evidence:token", "place:precinct"] : [],
    chapter >= 2 ? ["character:anton", "character:adin"] : [],
    chapter >= 3 ? ["character:marcus", "character:erica"] : [],
    chapter >= 4 ? ["organization:rookery"] : [],
    chapter >= 7 ? ["character:vivienne", "character:beni", "place:guildhall", "evidence:report"] : [],
  ].flat();
  return Array.from(new Set([...save.unlockedIds, ...newlyUnlocked]));
}
