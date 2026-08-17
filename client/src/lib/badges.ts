import type { LocalSave } from "./gameState";

export type BadgeDefinition = {
  id: string;
  icon: "map" | "branch" | "eye" | "seal" | "moon";
  title: { en: string; fa: string };
  description: { en: string; fa: string };
  unlocked: (save: LocalSave, finalNodeIds?: string[]) => boolean;
};

export const badgeDefinitions: BadgeDefinition[] = [
  {
    id: "badge:first-turn",
    icon: "branch",
    title: { en: "First Turn", fa: "نخستین انشعاب" },
    description: { en: "Commit to your first consequential choice.", fa: "نخستین انتخاب سرنوشت‌ساز خود را ثبت کن." },
    unlocked: save => save.selectedChoiceIds.length >= 1,
  },
  {
    id: "badge:case-cartographer",
    icon: "map",
    title: { en: "Case Cartographer", fa: "نقشه‌بردار پرونده" },
    description: { en: "Trace at least half of the case's narrative nodes.", fa: "دست‌کم نیمی از گره‌های روایی پرونده را ردیابی کن." },
    unlocked: save => save.visitedNodeIds.length >= 60,
  },
  {
    id: "badge:crossroads",
    icon: "eye",
    title: { en: "Crossroads", fa: "چهارراه" },
    description: { en: "Record twelve separate choices across the case.", fa: "دوازده انتخاب جداگانه در پرونده ثبت کن." },
    unlocked: save => save.selectedChoiceIds.length >= 12,
  },
  {
    id: "badge:long-night",
    icon: "moon",
    title: { en: "The Long Night", fa: "شبِ بلند" },
    description: { en: "Reach the final chapter of the case.", fa: "به فصل پایانی پرونده برس." },
    unlocked: save => Boolean(save.flags.chapter_10),
  },
  {
    id: "badge:case-closed",
    icon: "seal",
    title: { en: "Case Closed", fa: "پرونده مختومه" },
    description: { en: "Reach one of the case's final resolutions.", fa: "به یکی از پایان‌بندی‌های پرونده برس." },
    unlocked: (save, finalNodeIds = []) => finalNodeIds.includes(save.currentNodeId),
  },
];

export function unlockedBadgeIds(save: LocalSave, finalNodeIds: string[] = []) {
  return badgeDefinitions.filter(badge => badge.unlocked(save, finalNodeIds)).map(badge => badge.id);
}
