export type CatalogType = "character" | "place" | "organization" | "symbol" | "evidence";

export type CodexEntry = {
  id: string;
  type: CatalogType;
  title: string;
  summary: string;
  unlockChapter: number;
};

export type CharacterEntry = {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  unlockChapter: number;
};

export const codexEntries: CodexEntry[] = [
  { id: "character:nick", type: "character", title: "Nick", summary: "A young detective carrying an old case he cannot fully remember.", unlockChapter: 1 },
  { id: "character:adry", type: "character", title: "Lia", summary: "A guarded woman who recognizes more of Nick's past than she says.", unlockChapter: 1 },
  { id: "character:kurt", type: "character", title: "Kurt", summary: "A sharp young police officer caught between conscience and the institution.", unlockChapter: 1 },
  { id: "character:gaspar", type: "character", title: "Gaspar", summary: "The quietly observant owner of a harbor café and keeper of old rumors.", unlockChapter: 1 },
  { id: "character:hiller", type: "character", title: "Hiller", summary: "A meticulous forensic examiner whose restraint hides genuine care.", unlockChapter: 1 },
  { id: "character:ozzie", type: "character", title: "Ozzie", summary: "A carriage driver with a view of the city no map can capture.", unlockChapter: 1 },
  { id: "character:anton", type: "character", title: "Anton", summary: "A teenage informant who reads people as carefully as chessboards.", unlockChapter: 2 },
  { id: "character:adin", type: "character", title: "Adin", summary: "A dangerous old connection whose history reaches back to the program.", unlockChapter: 2 },
  { id: "character:marcus", type: "character", title: "Marcus Doyle", summary: "A rival investigator with more pride than patience — and more loyalty than he admits.", unlockChapter: 3 },
  { id: "character:erica", type: "character", title: "Erica", summary: "A poised printer with costly favors, sharp instincts and an old debt to collect.", unlockChapter: 3 },
  { id: "character:vivienne", type: "character", title: "Vivienne", summary: "A woman in grey who stands at the edge of memory and the edge of the room.", unlockChapter: 7 },
  { id: "character:beni", type: "character", title: "Beni", summary: "The Conductor. Controlled, persuasive and at the center of the city’s hidden machinery.", unlockChapter: 7 },
  { id: "place:harbor-district", type: "place", title: "Harbor District", summary: "A wet maze of old commerce, night routes and shadows with long memories.", unlockChapter: 1 },
  { id: "place:precinct", type: "place", title: "The Precinct", summary: "A bureaucratic shelter where pressure leaks through every worn wall.", unlockChapter: 1 },
  { id: "place:guildhall", type: "place", title: "Chandler’s Guildhall", summary: "A respectable old institution with a less respectable foundation beneath it.", unlockChapter: 7 },
  { id: "organization:rookery", type: "organization", title: "The Rookery", summary: "A disciplined network moving through the city’s official blind spots.", unlockChapter: 4 },
  { id: "symbol:raven", type: "symbol", title: "Broken Raven", summary: "A discreet mark used by people who want their power recognized but never named.", unlockChapter: 1 },
  { id: "evidence:token", type: "evidence", title: "The Token", summary: "An object sewn into an old coat — and into a missing part of Nick’s life.", unlockChapter: 1 },
  { id: "evidence:report", type: "evidence", title: "Falsified Report", summary: "A document that turns a missing memory into an organized conspiracy.", unlockChapter: 7 },
];

export const characterEntries: CharacterEntry[] = [
  { id: "character:nick", name: "Nick", role: "Detective", imageUrl: "/manus-storage/nick_expression_sheet_ff7ab402.png", unlockChapter: 1 },
  { id: "character:adry", name: "Lia", role: "The woman in the depot", imageUrl: "/manus-storage/adry_expression_sheet_fe98de3a.png", unlockChapter: 1 },
  { id: "character:kurt", name: "Kurt", role: "Police officer", imageUrl: "/manus-storage/kurt_expression_sheet_5ca03a49.png", unlockChapter: 1 },
  { id: "character:gaspar", name: "Gaspar", role: "Café owner", imageUrl: "/manus-storage/gaspar_expression_sheet_563293c2.png", unlockChapter: 1 },
  { id: "character:hiller", name: "Hiller", role: "Forensic examiner", imageUrl: "/manus-storage/hiller_expression_sheet_7be0518d.png", unlockChapter: 1 },
  { id: "character:ozzie", name: "Ozzie", role: "Carriage driver", imageUrl: "/manus-storage/ozzie_expression_sheet_8877aafb.png", unlockChapter: 1 },
  { id: "character:anton", name: "Anton", role: "Informant", imageUrl: "/manus-storage/anton_expression_sheet_78c1bb27.png", unlockChapter: 2 },
  { id: "character:adin", name: "Adin", role: "Old connection", imageUrl: "/manus-storage/adin_expression_sheet_4cf82657.png", unlockChapter: 2 },
  { id: "character:marcus", name: "Marcus Doyle", role: "Rival investigator", imageUrl: "/manus-storage/marcus_doyle_expression_sheet_a06b43fb.png", unlockChapter: 3 },
  { id: "character:erica", name: "Erica", role: "Printer", imageUrl: "/manus-storage/erica_expression_sheet_80a332b6.png", unlockChapter: 3 },
  { id: "character:vivienne", name: "Vivienne", role: "Woman in grey", imageUrl: "/manus-storage/vivienne_expression_sheet_681ae408.png", unlockChapter: 7 },
  { id: "character:beni", name: "Beni", role: "The Conductor", imageUrl: "/manus-storage/beni_expression_sheet_5bf6ae2e.png", unlockChapter: 7 },
];

export const interfaceCopy = {
  en: {
    newGame: "New Game",
    continue: "Continue",
    settings: "Settings",
    codex: "Codex",
    album: "Character Album",
    returnToMenu: "Return to menu",
  },
  fa: {
    newGame: "بازی جدید",
    continue: "ادامه",
    settings: "تنظیمات",
    codex: "کدکس",
    album: "آلبوم شخصیت‌ها",
    returnToMenu: "بازگشت به منو",
  },
};
