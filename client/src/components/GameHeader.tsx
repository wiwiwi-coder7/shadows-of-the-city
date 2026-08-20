import { BookOpen, GalleryVerticalEnd, GitCompare, Home, Menu, Settings2, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { useLocale } from "@/contexts/LocaleContext";

export function GameHeader({ compact = false, forceEnglish = false }: { compact?: boolean; forceEnglish?: boolean }) {
  const [, setLocation] = useLocation();
  const { t } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = forceEnglish ? { brandTitle: "SHADOWS", brandSubtitle: "of the city", codex: "Codex", album: "Album", settings: "Settings", archive: "Archive", comparison: "Path comparison" } : null;
  const go = (path: string) => { setLocation(path); setMenuOpen(false); };

  return <>
    <header className={`site-header ${compact ? "site-header--compact" : ""}`} dir={forceEnglish ? "ltr" : undefined}>
      <button className="brand-mark" onClick={() => go("/")} aria-label="Shadows of the City home">
        <span className="brand-mark__glyph">S</span>
        <span className="brand-mark__copy"><span>{copy?.brandTitle ?? t("brandTitle")}</span><em>{copy?.brandSubtitle ?? t("brandSubtitle")}</em></span>
      </button>
      <nav className="site-nav" aria-label="Game navigation">
        <button onClick={() => go("/codex")}><BookOpen size={15} /> {copy?.codex ?? t("codex")}</button>
        <button onClick={() => go("/album")}><GalleryVerticalEnd size={15} /> {copy?.album ?? t("album")}</button>
        <button onClick={() => go("/settings")}><Settings2 size={15} /> {copy?.settings ?? t("settings")}</button>
        {import.meta.env.VITE_STATIC_RUNTIME !== "true" && <button className="nav-admin" onClick={() => go("/admin")}><Sparkles size={14} /> {copy?.archive ?? t("archive")}</button>}
      </nav>
      <button className="mobile-menu" onClick={() => setMenuOpen(true)} aria-label="Open game navigation" aria-expanded={menuOpen}><Menu size={20} /></button>
    </header>
    {menuOpen && <>
      <button className="mobile-nav-scrim" onClick={() => setMenuOpen(false)} aria-label="Close game navigation" />
      <nav className="mobile-nav-sheet" aria-label="Game navigation">
        <div className="mobile-nav-sheet__header"><span className="eyebrow">CASE FILE / 001</span><button onClick={() => setMenuOpen(false)} aria-label="Close game navigation"><X size={19} /></button></div>
        <button onClick={() => go("/")}><Home size={17} /> {copy?.archive ?? t("archive")}</button>
        <button onClick={() => go("/codex")}><BookOpen size={17} /> {copy?.codex ?? t("codex")}</button>
        <button onClick={() => go("/album")}><GalleryVerticalEnd size={17} /> {copy?.album ?? t("album")}</button>
        <button onClick={() => go("/compare")}><GitCompare size={17} /> {copy?.comparison ?? "مقایسه مسیرها"}</button>
        <button onClick={() => go("/settings")}><Settings2 size={17} /> {copy?.settings ?? t("settings")}</button>
      </nav>
    </>}
  </>;
}
