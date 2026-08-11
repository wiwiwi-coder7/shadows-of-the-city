import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { GameHeader } from "@/components/GameHeader";
import { SettingsPanel } from "@/components/SettingsPanel";
import { readSettings, removeSave, writeSettings, type GameSettings } from "@/lib/gameState";
import { useLocale } from "@/contexts/LocaleContext";

export default function SettingsPage() {
  const [, setLocation] = useLocation();
  const [settings, setSettings] = useState<GameSettings>(() => {
    const saved = readSettings();
    const previewAccessibility = import.meta.env.DEV && new URLSearchParams(window.location.search).get("preview") === "a11y";
    return previewAccessibility ? { ...saved, textScale: "lg", highContrast: true, reducedMotion: true } : saved;
  });
  const { t } = useLocale();
  const update = (next: GameSettings) => { setSettings(next); writeSettings(next); };
  const reset = () => { removeSave(); setLocation("/"); };
  return <main className="settings-page"><GameHeader compact /><div className="settings-wrap"><button className="return-link" onClick={() => setLocation("/")}><ArrowLeft size={16} /> {t("returnToArchive")}</button><SettingsPanel settings={settings} onChange={update} onResetSave={reset} /></div></main>;
}
