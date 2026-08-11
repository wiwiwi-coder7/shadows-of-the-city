import { BookOpen, GalleryVerticalEnd, Menu, Settings2, Sparkles } from "lucide-react";
import { useLocation } from "wouter";
import { useLocale } from "@/contexts/LocaleContext";

export function GameHeader({ compact = false }: { compact?: boolean }) {
  const [, setLocation] = useLocation();
  const { t } = useLocale();

  return (
    <header className={`site-header ${compact ? "site-header--compact" : ""}`}>
      <button className="brand-mark" onClick={() => setLocation("/")} aria-label="Shadows of the City home">
        <span className="brand-mark__glyph">S</span>
        <span className="brand-mark__copy">
                  <span>{t("brandTitle")}</span>
          <em>{t("brandSubtitle")}</em>
        </span>
      </button>
      <nav className="site-nav" aria-label="Game navigation">
        <button onClick={() => setLocation("/codex")}><BookOpen size={15} /> {t("codex")}</button>
        <button onClick={() => setLocation("/album")}><GalleryVerticalEnd size={15} /> {t("album")}</button>
        <button onClick={() => setLocation("/settings")}><Settings2 size={15} /> {t("settings")}</button>
        <button className="nav-admin" onClick={() => setLocation("/admin")}><Sparkles size={14} /> {t("archive")}</button>
      </nav>
      <button className="mobile-menu" aria-label="Open game navigation"><Menu size={20} /></button>
    </header>
  );
}
