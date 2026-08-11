import { Contrast, Eye, Languages, MonitorUp, RotateCcw, Volume2 } from "lucide-react";
import { useState } from "react";
import { defaultSettings, type GameSettings, type TextScale } from "@/lib/gameState";
import "./settings.css";
import { useLocale } from "@/contexts/LocaleContext";

type Props = {
  settings: GameSettings;
  onChange: (settings: GameSettings) => void;
  onResetSave?: () => void;
};

function Toggle({ checked, onChange, label, hint }: { checked: boolean; onChange: (next: boolean) => void; label: string; hint?: string }) {
  return <label className="setting-row">
    <span><strong>{label}</strong>{hint && <small>{hint}</small>}</span>
    <button className={`switch ${checked ? "is-on" : ""}`} onClick={() => onChange(!checked)} type="button" aria-pressed={checked}>
      <span />
    </button>
  </label>;
}

function Volume({ label, value, onChange }: { label: string; value: number; onChange: (next: number) => void }) {
  return <label className="volume-row"><span>{label}<b>{value}%</b></span><input type="range" min="0" max="100" value={value} onChange={event => onChange(Number(event.target.value))} /></label>;
}

export function SettingsPanel({ settings, onChange, onResetSave }: Props) {
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const update = <K extends keyof GameSettings>(key: K, value: GameSettings[K]) => onChange({ ...settings, [key]: value });
  const { t } = useLocale();

  return <div className="settings-card">
    <div className="settings-title"><SettingsIcon /><div><p className="eyebrow">{t("playerSettings")}</p><h1>{t("setAtmosphere")}</h1></div></div>
    <section className="settings-section">
      <div className="settings-section__heading"><Eye size={16} /><span>{t("reading")}</span></div>
      <div className="scale-control">
        <span>{t("textSize")}</span>
        <div>{(["sm", "md", "lg"] as TextScale[]).map(size => <button key={size} onClick={() => update("textScale", size)} className={settings.textScale === size ? "is-selected" : ""}>{size === "sm" ? "A" : size === "md" ? "A+" : "A++"}</button>)}</div>
      </div>
      <Toggle label={t("highContrast")} hint={t("highContrastHint")} checked={settings.highContrast} onChange={value => update("highContrast", value)} />
      <Toggle label={t("reducedMotion")} hint={t("reducedMotionHint")} checked={settings.reducedMotion} onChange={value => update("reducedMotion", value)} />
      <Toggle label={t("sceneEffects")} hint={t("sceneEffectsHint")} checked={settings.sceneEffects} onChange={value => update("sceneEffects", value)} />
    </section>
    <section className="settings-section">
      <div className="settings-section__heading"><Volume2 size={16} /><span>{t("sound")}</span></div>
      <Toggle label={t("muteAudio")} hint={t("muteHint")} checked={settings.muted} onChange={value => update("muted", value)} />
      <Volume label={t("music")} value={settings.musicVolume} onChange={value => update("musicVolume", value)} />
      <Volume label={t("ambience")} value={settings.ambienceVolume} onChange={value => update("ambienceVolume", value)} />
      <Volume label={t("effects")} value={settings.effectsVolume} onChange={value => update("effectsVolume", value)} />
    </section>
    <section className="settings-section">
      <div className="settings-section__heading"><Languages size={16} /><span>{t("language")}</span></div>
      <div className="locale-status"><span>English</span><b>{t("active")}</b></div>
      <div className="locale-status is-coming"><span>فارسی / Persian</span><small>{t("persianStatus")}</small></div>
    </section>
    <section className="settings-section">
      <div className="settings-section__heading"><MonitorUp size={16} /><span>{t("privacy")}</span></div>
      <Toggle label={t("anonymousInsights")} hint={t("telemetryHint")} checked={settings.telemetryEnabled} onChange={value => update("telemetryEnabled", value)} />
    </section>
    {onResetSave && <section className="danger-zone">
      {showResetConfirm ? <div className="reset-confirm"><p>{t("resetPrompt")}</p><button onClick={onResetSave}>{t("eraseProgress")}</button><button className="button-quiet" onClick={() => setShowResetConfirm(false)}>{t("keepIt")}</button></div> : <button className="reset-save" onClick={() => setShowResetConfirm(true)}><RotateCcw size={15} /> {t("resetSave")}</button>}
    </section>}
  </div>;
}

function SettingsIcon() { return <Contrast size={22} strokeWidth={1.5} />; }

export { defaultSettings };
