import { ArrowRight, BookOpen, CirclePlay, Compass, LockKeyhole, RotateCcw, Settings2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { GameHeader } from "@/components/GameHeader";
import { emptySave, readSave, writeSave } from "@/lib/gameState";
import { storyStartId } from "@/data/story.generated";
import { useLocale } from "@/contexts/LocaleContext";

export default function Home() {
  const [, setLocation] = useLocation();
  const [hasSave, setHasSave] = useState(false);
  const [confirmNew, setConfirmNew] = useState(false);
  const { t } = useLocale();

  useEffect(() => setHasSave(Boolean(readSave())), []);
  const begin = () => { writeSave(emptySave(storyStartId)); setLocation("/play"); };
  const continueGame = () => setLocation("/play");

  return <main className="home-page">
    <div className="home-backdrop" />
    <GameHeader />
    <section className="home-hero">
      <div className="home-hero__number">{t("caseFile")}</div>
      <p className="eyebrow">{t("interactiveNoir")}</p>
      <h1><span>{t("brandTitle").toUpperCase()}</span><em>{t("brandSubtitle")}</em></h1>
      <p className="home-hero__dek">{t("homeDek")}</p>
      <div className="home-actions">
        <button className="button-primary" onClick={() => hasSave ? setConfirmNew(true) : begin()}><CirclePlay size={17} /> {t("newGame")} <ArrowRight size={16} /></button>
        <button className={`button-secondary ${hasSave ? "" : "is-disabled"}`} disabled={!hasSave} onClick={continueGame}><RotateCcw size={16} /> {t("continue")}</button>
      </div>
      <div className="hero-links">
        <button onClick={() => setLocation("/codex")}><BookOpen size={15} /> {t("codexLink")}</button>
        <button onClick={() => setLocation("/album")}><Compass size={15} /> {t("albumLink")}</button>
        <button onClick={() => setLocation("/settings")}><Settings2 size={15} /> {t("playerSettings")}</button>
      </div>
    </section>
    <aside className="home-note"><LockKeyhole size={14} /><span>{t("localSave")}</span></aside>
    {confirmNew && <div className="modal-scrim" role="dialog" aria-modal="true"><div className="noir-modal"><p className="eyebrow">{t("replaceCase")}</p><h2>{t("beginInvestigation")}</h2><p>{t("replaceWarning")}</p><div><button className="button-primary" onClick={begin}>{t("beginAgain")}</button><button className="button-secondary" onClick={() => setConfirmNew(false)}>{t("keepSave")}</button></div></div></div>}
  </main>;
}
