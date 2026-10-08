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
  { id: "character:nick", name: "Nick", role: "Detective", imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663941034191/olujKuoSSbGsoNMP.jpg", unlockChapter: 1 },
  { id: "character:adry", name: "Lia", role: "The woman in the depot", imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663941034191/qVEFTkwVkVJerxAq.jpg", unlockChapter: 1 },
  { id: "character:kurt", name: "Kurt", role: "Police officer", imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663941034191/aBJPKKsjhLQRtICc.jpg", unlockChapter: 1 },
  { id: "character:gaspar", name: "Gaspar", role: "Café owner", imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663941034191/iXUYeEqcHerjrYSx.jpg", unlockChapter: 1 },
  { id: "character:hiller", name: "Hiller", role: "Forensic examiner", imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663941034191/pwDuJdGmBTTmsLrZ.jpg", unlockChapter: 1 },
  { id: "character:ozzie", name: "Ozzie", role: "Carriage driver", imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663941034191/DdcbRuEzHocaBKgr.jpg", unlockChapter: 1 },
  { id: "character:anton", name: "Anton", role: "Informant", imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663941034191/YyjwIHtQgosCJKAA.jpg", unlockChapter: 2 },
  { id: "character:adin", name: "Adin", role: "Old connection", imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663941034191/UuZfyAkRQEtiwwlI.jpg", unlockChapter: 2 },
  { id: "character:marcus", name: "Marcus Doyle", role: "Rival investigator", imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663941034191/GCBDpNnUqqWMGvbG.jpg", unlockChapter: 3 },
  { id: "character:erica", name: "Erica", role: "Printer", imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663941034191/IaMIFFVZPyZxRHCS.jpg", unlockChapter: 3 },
  { id: "character:vivienne", name: "Vivienne", role: "Woman in grey", imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663941034191/NOCVjnuNmDHUcduu.jpg", unlockChapter: 7 },
  { id: "character:beni", name: "Beni", role: "The Conductor", imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663941034191/lHdTFoOHfDWNUxEB.jpg", unlockChapter: 7 },
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
