import { ArrowLeft, ArrowRight, BookOpen, Check, ChevronRight, GalleryVerticalEnd, Pause, Settings2, SkipForward } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "wouter";
import { GameHeader } from "@/components/GameHeader";
import { storyNodes, storyStartId, type StoryNode } from "@/data/story.generated";
import { hasPersianStoryNode, localizeStoryNode } from "@/data/story.fa";
import { emptySave, getInstallationId, readSave, readSettings, shouldTrackGameplay, writeSave, type GameSettings, type LocalSave } from "@/lib/gameState";
import { trpc } from "@/lib/trpc";
import { unlockForChapter } from "@/lib/unlocks";
import { useLocale } from "@/contexts/LocaleContext";

export default function Play() {
  const [, setLocation] = useLocation();
  const [save, setSave] = useState<LocalSave | null>(null);
  const [settings, setSettings] = useState<GameSettings>(() => readSettings());
  const [showHud, setShowHud] = useState(true);
  const lastTrackedNode = useRef<string>("");
  const sceneAudio = useRef<HTMLAudioElement | null>(null);
  const primaryAction = useRef<HTMLButtonElement | null>(null);
  const track = trpc.game.track.useMutation();
  const publishedContent = trpc.game.publishedContent.useQuery();
  const persianOverrides = trpc.game.persianStoryOverrides.useQuery();
  const audioCues = trpc.game.audioCues.useQuery();
  const { locale, t } = useLocale();

  useEffect(() => {
    const next = readSave() ?? emptySave(storyStartId);
    setSave(next);
    if (!readSave()) writeSave(next);
  }, []);

  const runtimeNodes = useMemo(() => {
    const overrides = new Map((publishedContent.data ?? []).filter(item => item.kind === "story-node").map(item => [item.id, item.payload as unknown as StoryNode]));
    return storyNodes.map(staticNode => overrides.get(staticNode.id) ?? staticNode);
  }, [publishedContent.data]);
  const runtimeNodeById = useMemo(() => Object.fromEntries(runtimeNodes.map(runtimeNode => [runtimeNode.id, runtimeNode])), [runtimeNodes]);
  const sourceNode: StoryNode | undefined = useMemo(() => save ? runtimeNodeById[save.currentNodeId] : undefined, [save, runtimeNodeById]);
  const persianOverrideByNodeId = useMemo(() => new Map((persianOverrides.data ?? []).map(override => [override.id, override])), [persianOverrides.data]);
  const node: StoryNode | undefined = useMemo(() => sourceNode ? localizeStoryNode(sourceNode, locale, locale === "fa" ? persianOverrideByNodeId.get(sourceNode.id) : undefined) : undefined, [sourceNode, locale, persianOverrideByNodeId]);
  const trackEvent = (eventType: "game_start" | "node_view" | "choice_selected" | "chapter_reached" | "game_complete", choiceId?: string) => {
    if (!shouldTrackGameplay(settings) || !node) return;
    track.mutate({ installationId: getInstallationId(), eventType, chapter: node.chapter, nodeId: node.id, choiceId: choiceId ?? null, locale });
  };

  useEffect(() => {
    if (!node || lastTrackedNode.current === node.id) return;
    lastTrackedNode.current = node.id;
    trackEvent(save?.visitedNodeIds.length === 1 ? "game_start" : "node_view");
  }, [node?.id, settings.telemetryEnabled]);
  useEffect(() => {
    if (!node) return;
    sceneAudio.current?.pause();
    sceneAudio.current = null;
    if (settings.muted) return;
    const cue = audioCues.data?.find(item => item.targetType === "node" && item.targetId === node.id)
      ?? audioCues.data?.find(item => item.targetType === "scene" && item.targetId === `scene-${node.chapter}-${node.scene}`)
      ?? audioCues.data?.find(item => item.targetType === "chapter" && item.targetId === `chapter-${node.chapter}`);
    if (!cue) return;
    const volumeByCategory = { music: settings.musicVolume, ambience: settings.ambienceVolume, sfx: settings.effectsVolume };
    const audio = new Audio(cue.url);
    audio.loop = cue.loop;
    audio.volume = Math.max(0, Math.min(1, (cue.volume / 100) * (volumeByCategory[cue.category] / 100)));
    sceneAudio.current = audio;
    audio.play().catch(() => undefined);
    return () => { audio.pause(); };
  }, [node?.id, audioCues.data, settings.muted, settings.musicVolume, settings.ambienceVolume, settings.effectsVolume]);
  useEffect(() => {
    if (!node || !save) return;
    const upgraded = { ...save, unlockedIds: unlockForChapter(save, node.chapter), lastPlayedAt: Date.now() };
    setSave(upgraded);
    writeSave(upgraded);
  }, [node?.id]);
  useEffect(() => { if (node) requestAnimationFrame(() => primaryAction.current?.focus()); }, [node?.id]);

  const advance = (choiceId?: string, candidateTarget?: string) => {
    if (!save || !node) return;
    const nextId = candidateTarget && runtimeNodeById[candidateTarget] ? candidateTarget : node.nextId;
    if (!nextId) return setLocation("/");
    const nextNode = runtimeNodeById[nextId];
    if (choiceId) trackEvent("choice_selected", choiceId);
    if (nextNode.chapter > node.chapter) trackEvent("chapter_reached");
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
      if (isFinalNode) { trackEvent("game_complete"); setLocation("/"); } else advance();
    }
  };

  return <main className={playerClass} dir={locale === "fa" ? "rtl" : "ltr"} onKeyDown={onStoryKeyDown}>
    <div className="story-image" style={{ backgroundImage: `url(${node.imageUrl})` }} />
    <div className={`story-grain ${settings.sceneEffects ? "" : "is-hidden"}`} />
    <div className="story-vignette" />
    {showHud && <div className="story-topbar"><button className="story-back" onClick={() => setLocation("/")}><ArrowLeft size={16} /> {t("archive")}</button><div className="chapter-status">{locale !== "fa" && <><span>{t("chapterShort")} {String(node.chapter).padStart(2, "0")}</span><i /></>}<span>{node.sceneTitle.replace(/\(.+\)/, "").trim()}</span></div><div className="story-tools"><button onClick={() => setLocation("/codex")} aria-label={t("openCodex")}><BookOpen size={16} /></button><button onClick={() => setLocation("/album")} aria-label={t("openAlbum")}><GalleryVerticalEnd size={16} /></button><button onClick={() => setLocation("/settings")} aria-label={t("openSettings")}><Settings2 size={16} /></button></div></div>}
    <button className="screen-toggle" onClick={() => setShowHud(!showHud)} aria-label={t("controls")}><Pause size={12} /></button>
    <section className="story-copy" aria-live="polite">
      {locale === "fa" && !hasPersianStoryNode(node.id) && <p className="story-fallback">{t("untranslatedChapter")}</p>}
      <div className="story-copy__meta">{locale !== "fa" && <span>{t("scene", { scene: node.scene })}</span>}<span>{t("traced", { percent: Math.min(100, Math.round((save.visitedNodeIds.length / storyNodes.length) * 100)) })}</span></div>
      <div className="story-blocks">{node.blocks.map((block, index) => block.type === "dialogue" ? <div className="dialogue-line" key={`${node.id}-${index}`}><span>{block.speaker}</span><p>“{block.text}”</p></div> : <p className="narration" key={`${node.id}-${index}`}>{block.text}</p>)}</div>
      {node.choices.length > 0 ? <div className="choice-list"><p className="eyebrow">{t("yourMove")}</p>{node.choices.map((choice, index) => <button ref={index === 0 ? primaryAction : undefined} key={choice.id} onClick={() => advance(choice.id, choice.target)}><span>0{index + 1}</span><strong>{choice.label}</strong><ChevronRight size={17} /></button>)}</div> : <div className="continue-row">{isFinalNode ? <button ref={primaryAction} className="button-primary" onClick={() => { trackEvent("game_complete"); setLocation("/"); }}><Check size={16} /> {t("closeCase")}</button> : <button ref={primaryAction} className="button-primary" onClick={() => advance()}><SkipForward size={16} /> {t("continue")} <ArrowRight size={15} /></button>}</div>}
    </section>
  </main>;
}
