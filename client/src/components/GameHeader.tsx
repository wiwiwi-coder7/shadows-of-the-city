import { BookOpen, GalleryVerticalEnd, Menu, Settings2, Sparkles } from "lucide-react";
import { useLocation } from "wouter";
import { useLocale } from "@/contexts/LocaleContext";

export function GameHeader({ compact = false, forceEnglish = false }: { compact?: boolean; forceEnglish?: boolean }) {
  const [, setLocation] = useLocation();
  const { t } = useLocale();
  const copy = forceEnglish ? { brandTitle: "SHADOWS", brandSubtitle: "of the city", codex: "Codex", album: "Album", settings: "Settings", archive: "Archive" } : null;

  return (
    <header className={`site-header ${compact ? "site-header--compact" : ""}`} dir={forceEnglish ? "ltr" : undefined}>
      <button className="brand-mark" onClick={() => setLocation("/")} aria-label="Shadows of the City home">
        <span className="brand-mark__glyph">S</span>
        <span className="brand-mark__copy">
          <span>{copy?.brandTitle ?? t("brandTitle")}</span>
          <em>{copy?.brandSubtitle ?? t("brandSubtitle")}</em>
        </span>
      </button>
      <nav className="site-nav" aria-label="Game navigation">
        <button onClick={() => setLocation("/codex")}><BookOpen size={15} /> {copy?.codex ?? t("codex")}</button>
        <button onClick={() => setLocation("/album")}><GalleryVerticalEnd size={15} /> {copy?.album ?? t("album")}</button>
        <button onClick={() => setLocation("/settings")}><Settings2 size={15} /> {copy?.settings ?? t("settings")}</button>
        <button className="nav-admin" onClick={() => setLocation("/admin")}><Sparkles size={14} /> {copy?.archive ?? t("archive")}</button>
      </nav>
      <button className="mobile-menu" aria-label="Open game navigation"><Menu size={20} /></button>
    </header>
  );
}
