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
  const homeCopy = { caseFile: "CASE FILE / 001", interactiveNoir: "AN INTERACTIVE NOIR NOVEL", homeDek: "The city forgets what it needs to survive. You were never meant to remember.", newGame: "NEW GAME", continue: "CONTINUE", codexLink: "THE CODEX", albumLink: "CHARACTER ALBUM", playerSettings: "PLAYER SETTINGS", localSave: "Your progress stays in this browser.", replaceCase: "REPLACE CASE FILE", beginInvestigation: "Begin a new investigation?", replaceWarning: "This will replace your current browser save.", beginAgain: "BEGIN AGAIN", keepSave: "KEEP SAVE" };

  useEffect(() => setHasSave(Boolean(readSave())), []);
  const begin = () => { writeSave(emptySave(storyStartId)); setLocation("/play"); };
  const continueGame = () => setLocation("/play");

  return <main className="home-page" dir="ltr">
    <div className="home-backdrop" />
    <GameHeader forceEnglish />
    <section className="home-hero">
      <div className="home-hero__number">{homeCopy.caseFile}</div>
      <p className="eyebrow">{homeCopy.interactiveNoir}</p>
      <h1><span>SHADOWS</span><em>of the city</em></h1>
      <p className="home-hero__dek">{homeCopy.homeDek}</p>
      <div className="home-actions">
        <button className="button-primary" onClick={() => hasSave ? setConfirmNew(true) : begin()}><CirclePlay size={17} /> {homeCopy.newGame} <ArrowRight size={16} /></button>
        <button className={`button-secondary ${hasSave ? "" : "is-disabled"}`} disabled={!hasSave} onClick={continueGame}><RotateCcw size={16} /> {homeCopy.continue}</button>
      </div>
      <div className="hero-links">
        <button onClick={() => setLocation("/codex")}><BookOpen size={15} /> {homeCopy.codexLink}</button>
        <button onClick={() => setLocation("/album")}><Compass size={15} /> {homeCopy.albumLink}</button>
        <button onClick={() => setLocation("/settings")}><Settings2 size={15} /> {homeCopy.playerSettings}</button>
      </div>
    </section>
    <aside className="home-note"><LockKeyhole size={14} /><span>{homeCopy.localSave}</span></aside>
    {confirmNew && <div className="modal-scrim" role="dialog" aria-modal="true"><div className="noir-modal"><p className="eyebrow">{homeCopy.replaceCase}</p><h2>{homeCopy.beginInvestigation}</h2><p>{homeCopy.replaceWarning}</p><div><button className="button-primary" onClick={begin}>{homeCopy.beginAgain}</button><button className="button-secondary" onClick={() => setConfirmNew(false)}>{homeCopy.keepSave}</button></div></div></div>}
  </main>;
}
