import { ArrowLeft, BookOpen, LockKeyhole, Search, UsersRound } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "wouter";
import { GameHeader } from "@/components/GameHeader";
import { characterEntries, codexEntries, type CatalogType } from "@/data/gameCatalog";
import { useLocale } from "@/contexts/LocaleContext";
import { readSave } from "@/lib/gameState";

const typeMessageKey: Record<CatalogType, string> = { character: "characters", place: "places", organization: "organizations", symbol: "symbols", evidence: "evidence" };

export function CodexPage() {
  const [, setLocation] = useLocation();
  const [filter, setFilter] = useState<CatalogType | "all">("all");
  const [search, setSearch] = useState("");
  const [unlocked, setUnlocked] = useState<string[]>([]);
  const { t } = useLocale();
  useEffect(() => setUnlocked(readSave()?.unlockedIds ?? []), []);
  const entries = useMemo(() => codexEntries.filter(entry => (filter === "all" || entry.type === filter) && entry.title.toLowerCase().includes(search.toLowerCase())), [filter, search]);
  const types: CatalogType[] = ["character", "place", "organization", "symbol", "evidence"];
  return <main className="library-page"><GameHeader compact /><section className="library-hero"><button onClick={() => setLocation("/")}><ArrowLeft size={16} /> {t("returnToArchive")}</button><p className="eyebrow">{t("fieldNotes")}</p><h1>{t("codexTitle")}</h1><p>{t("codexDek")}</p></section><section className="library-content"><div className="library-controls"><div className="filter-pills"><button className={filter === "all" ? "is-active" : ""} onClick={() => setFilter("all")}>{t("allFiles")}</button>{types.map(type => <button key={type} className={filter === type ? "is-active" : ""} onClick={() => setFilter(type)}>{t(typeMessageKey[type])}</button>)}</div><label className="search-field"><Search size={16} /><input value={search} onChange={event => setSearch(event.target.value)} placeholder={t("searchFiles")} /></label></div><div className="codex-grid">{entries.map(entry => { const isUnlocked = unlocked.includes(entry.id); return <article className={`codex-card ${isUnlocked ? "" : "is-locked"}`} key={entry.id}>{isUnlocked ? <BookOpen size={18} /> : <LockKeyhole size={18} />}<p className="eyebrow">{t(typeMessageKey[entry.type])}</p><h2>{isUnlocked ? entry.title : t("classified")}</h2><p>{isUnlocked ? entry.summary : t("fileLocked", { chapter: entry.unlockChapter })}</p></article>; })}</div></section></main>;
}

export function AlbumPage() {
  const [, setLocation] = useLocation();
  const [unlocked, setUnlocked] = useState<string[]>([]);
  const { t } = useLocale();
  useEffect(() => setUnlocked(readSave()?.unlockedIds ?? []), []);
  return <main className="library-page"><GameHeader compact /><section className="library-hero"><button onClick={() => setLocation("/")}><ArrowLeft size={16} /> {t("returnToArchive")}</button><p className="eyebrow">{t("knownFaces")}</p><h1>{t("albumTitle")}</h1><p>{t("albumDek")}</p></section><section className="album-grid">{characterEntries.map(person => { const isUnlocked = unlocked.includes(person.id); return <article className={`album-card ${isUnlocked ? "" : "is-locked"}`} key={person.id}><div className="album-image">{isUnlocked ? <img src={person.imageUrl} alt={t("expressionSheet", { name: person.name })} /> : <div className="locked-portrait"><UsersRound size={40} /><LockKeyhole size={15} /></div>}</div><div><p className="eyebrow">{isUnlocked ? person.role : t("unlocksChapter", { chapter: person.unlockChapter })}</p><h2>{isUnlocked ? person.name : t("unknown")}</h2></div></article>; })}</section></main>;
}
