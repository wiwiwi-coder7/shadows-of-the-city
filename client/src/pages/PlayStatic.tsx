import { ArrowLeft, ArrowRight, BookOpen, Check, ChevronRight, GalleryVerticalEnd, Pause, Settings2, SkipForward } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "wouter";
import { GameHeader } from "@/components/GameHeader";
import { storyNodes, storyStartId, type StoryNode } from "@/data/story.generated";
import { localizeStoryNode } from "@/data/story.fa";
import { emptySave, getInstallationId, readSave, readSettings, shouldTrackGameplay, writeSave, type GameSettings, type LocalSave } from "@/lib/gameState";
import { getPersianOverrides, trackAnonymousEvent, type PersianOverride } from "@/lib/ownerApi";
import { publicAssetFallbackUrl, publicAssetUrl } from "@/lib/publicAssets";
import { unlockForChapter } from "@/lib/unlocks";
import { useLocale } from "@/contexts/LocaleContext";

export default function PlayStatic() {
  const [, setLocation] = useLocation();
  const [save, setSave] = useState<LocalSave | null>(null);
  const [settings] = useState<GameSettings>(() => readSettings());
  const [persianOverrides, setPersianOverrides] = useState<PersianOverride[]>([]);
  const [showHud, setShowHud] = useState(true);
  const [activeSceneUrl, setActiveSceneUrl] = useState("");
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const [usingFallback, setUsingFallback] = useState(false);
  const [sceneUnavailable, setSceneUnavailable] = useState(false);
  const primaryAction = useRef<HTMLButtonElement | null>(null);
  const lastRequestedSceneUrl = useRef("");
  const { locale, t } = useLocale();
  const runtimeNodeById = useMemo(() => Object.fromEntries(storyNodes.map(item => [item.id, item])), []);
  const refreshPersianOverrides = useCallback(() => {
    getPersianOverrides().then(result => setPersianOverrides(result.overrides)).catch(() => { /* The bundled literary translation remains available if the public endpoint is temporarily unavailable. */ });
  }, []);

  useEffect(() => {
    const existingSave = readSave();
    const restored = existingSave ?? emptySave(storyStartId);
    setSave(restored);
    if (!existingSave) {
      writeSave(restored);
      if (shouldTrackGameplay(settings)) void trackAnonymousEvent({ installationId: getInstallationId(), eventType: "game_start", chapter: 1, nodeId: storyStartId, locale: settings.locale });
    }
  }, []);

  useEffect(() => {
    refreshPersianOverrides();
    const onFocus = () => refreshPersianOverrides();
    window.addEventListener("focus", onFocus);
    const channel = typeof BroadcastChannel === "undefined" ? null : new BroadcastChannel("sotc-persian-overrides");
    channel?.addEventListener("message", onFocus);
    return () => { window.removeEventListener("focus", onFocus); channel?.close(); };
  }, [refreshPersianOverrides]);

  const sourceNode: StoryNode | undefined = save ? runtimeNodeById[save.currentNodeId] : undefined;
  const overrideByNodeId = useMemo(() => new Map(persianOverrides.map(item => [item.id, item])), [persianOverrides]);
  const node = sourceNode ? localizeStoryNode(sourceNode, locale, overrideByNodeId.get(sourceNode.id)) : undefined;
  const optimizedSceneUrl = sourceNode ? publicAssetUrl(sourceNode.imageUrl) : "";
  const originalSceneUrl = sourceNode ? publicAssetFallbackUrl(sourceNode.imageUrl) : "";

  useEffect(() => {
    if (!node || !optimizedSceneUrl) return;
    const reusesLoadedScene = lastRequestedSceneUrl.current === optimizedSceneUrl && activeSceneUrl === optimizedSceneUrl;
    lastRequestedSceneUrl.current = optimizedSceneUrl;
    setActiveSceneUrl(optimizedSceneUrl); setSceneLoaded(reusesLoadedScene); setUsingFallback(false); setSceneUnavailable(false);
    const nextIds = Array.from(new Set([node.nextId, ...node.choices.map(choice => choice.target)].filter((id): id is string => Boolean(id && runtimeNodeById[id]))));
    nextIds.slice(0, 3).forEach(id => {
      const preload = new Image();
      preload.decoding = "async";
      preload.src = publicAssetUrl(runtimeNodeById[id].imageUrl);
    });
  }, [node?.id, optimizedSceneUrl]);

  const recoverScene = () => {
    if (!usingFallback && originalSceneUrl !== activeSceneUrl) { setUsingFallback(true); setActiveSceneUrl(originalSceneUrl); return; }
    setSceneUnavailable(true);
  };

  useEffect(() => {
    if (!node || !save) return;
    const upgraded = { ...save, unlockedIds: unlockForChapter(save, node.chapter), lastPlayedAt: Date.now() };
    setSave(upgraded);
    writeSave(upgraded);
    if (shouldTrackGameplay(settings)) void trackAnonymousEvent({ installationId: getInstallationId(), eventType: "node_view", chapter: node.chapter, nodeId: node.id, locale });
  }, [node?.id]);
  useEffect(() => { if (node) requestAnimationFrame(() => primaryAction.current?.focus()); }, [node?.id]);

  const advance = (choiceId?: string, candidateTarget?: string) => {
    if (!save || !node) return;
    const nextId = candidateTarget && runtimeNodeById[candidateTarget] ? candidateTarget : node.nextId;
    if (!nextId) return setLocation("/");
    const nextNode = runtimeNodeById[nextId];
    const next: LocalSave = {
      ...save,
      currentNodeId: nextId,
      visitedNodeIds: Array.from(new Set([...save.visitedNodeIds, nextId])),
      selectedChoiceIds: choiceId ? Array.from(new Set([...save.selectedChoiceIds, choiceId])) : save.selectedChoiceIds,
      flags: { ...save.flags, [`chapter_${nextNode.chapter}`]: true, ...(choiceId ? { [`choice_${choiceId}`]: true } : {}) },
      unlockedIds: unlockForChapter(save, nextNode.chapter),
      lastPlayedAt: Date.now(),
    };
    setSave(next);
    writeSave(next);
    if (shouldTrackGameplay(settings)) {
      const installationId = getInstallationId();
      if (choiceId) void trackAnonymousEvent({ installationId, eventType: "choice_selected", chapter: nextNode.chapter, nodeId: node.id, choiceId, locale });
      if (!save.flags[`chapter_${nextNode.chapter}`]) void trackAnonymousEvent({ installationId, eventType: "chapter_reached", chapter: nextNode.chapter, nodeId: nextNode.id, locale });
    }
  };

  const closeCase = () => {
    if (shouldTrackGameplay(settings) && node) void trackAnonymousEvent({ installationId: getInstallationId(), eventType: "game_complete", chapter: node.chapter, nodeId: node.id, locale });
    setLocation("/");
  };

  useEffect(() => {
    if (!node || !save || node.blocks.length > 0 || node.choices.length > 0 || !node.nextId) return;
    const timer = window.setTimeout(() => advance(), 0);
    return () => window.clearTimeout(timer);
  }, [node?.id, save?.currentNodeId]);

  if (!node || !save) return <div className="loading-screen">{t("loading")}</div>;
  const isFinalNode = !node.nextId;
  const playerClass = `story-player text-${settings.textScale} ${settings.highContrast ? "is-high-contrast" : ""} ${settings.reducedMotion ? "is-reduced-motion" : ""}`;
  const onStoryKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
    const number = Number(event.key);
    if (number >= 1 && number <= node.choices.length) {
      event.preventDefault();
      const choice = node.choices[number - 1];
      advance(choice.id, choice.target);
    }
    if ((event.key === "Enter" || event.key === " ") && node.choices.length === 0) {
      event.preventDefault();
      isFinalNode ? closeCase() : advance();
    }
  };

  return <main className={playerClass} dir={locale === "fa" ? "rtl" : "ltr"} onKeyDown={onStoryKeyDown}>
    <div className={`story-image ${sceneLoaded ? "is-loaded" : "is-loading"} ${sceneUnavailable ? "is-unavailable" : ""}`}><img src={activeSceneUrl} alt="" onLoad={() => setSceneLoaded(true)} onError={recoverScene} /></div>
    <div className={`story-grain ${settings.sceneEffects ? "" : "is-hidden"}`} /><div className="story-vignette" />
    {showHud && <div className="story-topbar"><button className="story-back" onClick={() => setLocation("/")}><ArrowLeft size={16} /> {t("archive")}</button><div className="chapter-status">{locale !== "fa" && <><span>{t("chapterShort")} {String(node.chapter).padStart(2, "0")}</span><i /></>}<span>{node.sceneTitle.replace(/\(.+\)/, "").trim()}</span></div><div className="story-tools"><button onClick={() => setLocation("/codex")} aria-label={t("openCodex")}><BookOpen size={16} /></button><button onClick={() => setLocation("/album")} aria-label={t("openAlbum")}><GalleryVerticalEnd size={16} /></button><button onClick={() => setLocation("/settings")} aria-label={t("openSettings")}><Settings2 size={16} /></button></div></div>}
    <button className="screen-toggle" onClick={() => setShowHud(!showHud)} aria-label={t("controls")}><Pause size={12} /></button>
    <section className="story-copy" aria-live="polite"><div className="story-copy__meta">{locale !== "fa" && <span>{t("scene", { scene: node.scene })}</span>}<span>{t("traced", { percent: Math.min(100, Math.round((save.visitedNodeIds.length / storyNodes.length) * 100)) })}</span></div>{!sceneLoaded && !sceneUnavailable && <p className="scene-loading">Developing the scene…</p>}{sceneUnavailable && <p className="scene-loading is-error">The scene art could not be reached. The story remains available.</p>}<div className="story-blocks">{node.blocks.map((block, index) => block.type === "dialogue" ? <div className="dialogue-line" key={`${node.id}-${index}`}><span>{block.speaker}</span><p>“{block.text}”</p></div> : <p className="narration" key={`${node.id}-${index}`}>{block.text}</p>)}</div>{node.choices.length > 0 ? <div className="choice-list"><p className="eyebrow">{t("yourMove")}</p>{node.choices.map((choice, index) => <button ref={index === 0 ? primaryAction : undefined} key={choice.id} onClick={() => advance(choice.id, choice.target)}><span>0{index + 1}</span><strong>{choice.label}</strong><ChevronRight size={17} /></button>)}</div> : <div className="continue-row">{isFinalNode ? <button ref={primaryAction} className="button-primary" onClick={closeCase}><Check size={16} /> {t("closeCase")}</button> : <button ref={primaryAction} className="button-primary" onClick={() => advance()}><SkipForward size={16} /> {t("continue")} <ArrowRight size={15} /></button>}</div>}</section>
  </main>;
}
