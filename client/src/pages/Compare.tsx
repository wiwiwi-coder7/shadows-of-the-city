import { useEffect, useMemo, useState } from "react";
import { useLocation } from "wouter";
import { GameHeader } from "@/components/GameHeader";
import { storyNodes, type StoryNode } from "@/data/story.generated";
import { readSave, type LocalSave } from "@/lib/gameState";
import { badgeDefinitions, unlockedBadgeIds } from "@/lib/badges";
import { useLocale } from "@/contexts/LocaleContext";
import { ArrowLeft, Award, CheckCircle2, Circle, Eye, GitBranch, LockKeyhole, Map as MapIcon, Moon, Stamp } from "lucide-react";

const badgeIcon = { map: MapIcon, branch: GitBranch, eye: Eye, seal: Stamp, moon: Moon };

export default function ComparePage() {
  const [, setLocation] = useLocation();
  const [save, setSave] = useState<LocalSave | null>(null);
  const { locale, t } = useLocale();

  useEffect(() => {
    setSave(readSave());
  }, []);

  const visitedSet = useMemo(() => new Set(save?.visitedNodeIds ?? []), [save]);
  const selectedSet = useMemo(() => new Set(save?.selectedChoiceIds ?? []), [save]);

  // Group nodes by chapter
  const chapters = useMemo<Array<{ chapter: number; nodes: StoryNode[] }>>(() => {
    const map = new Map<number, StoryNode[]>();
    storyNodes.forEach(node => {
      const list = map.get(node.chapter) ?? [];
      list.push(node);
      map.set(node.chapter, list);
    });
    return Array.from(map.entries()).map(([chapter, nodes]) => ({ chapter, nodes }));
  }, []);

  const totalVisited = save?.visitedNodeIds.length ?? 0;
  const totalNodes = storyNodes.length;
  const percentTraced = Math.min(100, Math.round((totalVisited / totalNodes) * 100));
  const finalNodeIds = useMemo(() => storyNodes.filter(node => !node.nextId).map(node => node.id), []);
  const badgeIds = new Set(save ? unlockedBadgeIds(save, finalNodeIds) : []);

  return (
    <main className="library-page" dir={locale === "fa" ? "rtl" : "ltr"}>
      <GameHeader compact />
      <section className="library-hero">
        <button onClick={() => setLocation("/")}>
          <ArrowLeft size={16} /> {t("returnToArchive") ?? "Back"}
        </button>
        <p className="eyebrow">{locale === "fa" ? "تحلیل مسیرها و انتخاب‌ها" : "PATH COMPARISON & DIVERGENCE"}</p>
        <h1>{locale === "fa" ? "مقایسهٔ مسیرها و انتخاب‌های پرونده" : "Case Pathway Comparison"}</h1>
        <p>
          {locale === "fa"
            ? `شما تاکنون ${percentTraced} درصد از مسیرهای پرونده را ردیابی کرده‌اید. در اینجا می‌توانید انتخاب‌های ثبت‌شدهٔ خود را در مقایسه با سایر شاخه‌های ممکن در طول ۱۰ فصل بررسی کنید.`
            : `You have traced ${percentTraced}% of the case pathways. Review your recorded decisions alongside alternative branching routes across all 10 chapters.`}
        </p>
      </section>

      <section className="library-content max-w-5xl mx-auto px-4 py-8 space-y-8">
        <div className="rounded-2xl border border-[#c7f35b]/20 bg-[#c7f35b]/[0.035] p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c7f35b]/10 text-[#c7f35b]"><Award size={20} /></div>
              <div><p className="eyebrow">{locale === "fa" ? "نشان‌های افتخار" : "UNLOCKABLE DISTINCTIONS"}</p><h2 className="text-lg font-semibold text-white">{locale === "fa" ? "نشان‌های پرونده" : "Case Badges"}</h2></div>
            </div>
            <span className="rounded-full border border-[#c7f35b]/25 bg-[#c7f35b]/10 px-3 py-1 text-xs font-medium text-[#d9ff83]">{badgeIds.size} / {badgeDefinitions.length} {locale === "fa" ? "بازشده" : "unlocked"}</span>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {badgeDefinitions.map(badge => {
              const isUnlocked = badgeIds.has(badge.id);
              const Icon = badgeIcon[badge.icon];
              return <article key={badge.id} className={`rounded-xl border p-4 ${isUnlocked ? "border-[#c7f35b]/30 bg-black/20" : "border-white/8 bg-black/10 opacity-60"}`}>
                <div className="flex items-start gap-3"><div className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${isUnlocked ? "bg-[#c7f35b]/15 text-[#c7f35b]" : "bg-white/5 text-white/30"}`}>{isUnlocked ? <Icon size={18} /> : <LockKeyhole size={17} />}</div><div><h3 className="text-sm font-semibold text-white">{badge.title[locale]}</h3><p className="mt-1 text-xs leading-5 text-white/55">{badge.description[locale]}</p></div></div>
              </article>;
            })}
          </div>
        </div>
        {chapters.map(({ chapter, nodes }) => {
          return (
            <div key={chapter} className="rounded-2xl border border-white/10 bg-white/[.03] p-6 backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c7f35b]/10 text-[#c7f35b]">
                    <GitBranch size={20} />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-white">
                      {locale === "fa" ? `فصل ${chapter}` : `Chapter ${chapter}`}
                    </h2>
                    <p className="text-xs text-white/50">
                      {locale === "fa" ? "مسیر انتخاب‌ها و انشعابات این فصل" : "Branching choices and decision nodes"}
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 border border-white/10">
                  {nodes.filter((node: StoryNode) => visitedSet.has(node.id)).length} / {nodes.length} {locale === "fa" ? "گره بازدیدشده" : "nodes visited"}
                </span>
              </div>

              <div className="space-y-4">
                {nodes.map((node: StoryNode) => {
                  const isVisited = visitedSet.has(node.id);
                  if (!isVisited && node.choices.length === 0) return null; // skip unvisited filler nodes

                  return (
                    <div key={node.id} className={`rounded-xl border p-4 transition-colors ${isVisited ? "border-[#c7f35b]/30 bg-[#c7f35b]/[0.02]" : "border-white/5 bg-white/[.01] opacity-60"}`}>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-2">
                          {isVisited ? <CheckCircle2 size={16} className="text-[#c7f35b]" /> : <Circle size={16} className="text-white/30" />}
                          <span className="text-xs font-mono text-white/50">{node.id}</span>
                          <span className="text-sm font-medium text-white">{node.sceneTitle}</span>
                        </div>
                        <span className="text-xs text-white/40">{locale === "fa" ? `صحنه ${node.scene}` : `Scene ${node.scene}`}</span>
                      </div>

                      {node.choices.length > 0 && (
                        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                          {node.choices.map((choice: StoryNode["choices"][number]) => {
                            const isChosen = selectedSet.has(choice.id);
                            return (
                              <div
                                key={choice.id}
                                className={`flex items-start justify-between rounded-lg border p-3 text-xs leading-5 transition-all ${
                                  isChosen
                                    ? "border-[#c7f35b] bg-[#c7f35b]/10 text-white font-medium shadow-[0_0_15px_rgba(199,243,91,0.15)]"
                                    : "border-white/10 bg-white/5 text-white/70 hover:border-white/20"
                                }`}
                              >
                                <div className="space-y-1">
                                  <div className="flex items-center gap-1.5">
                                    <span className={`h-2 w-2 rounded-full ${isChosen ? "bg-[#c7f35b]" : "bg-white/30"}`} />
                                    <span className="text-[10px] uppercase tracking-wider text-white/50">
                                      {isChosen ? (locale === "fa" ? "انتخاب شما" : "Your Choice") : (locale === "fa" ? "مسیر جایگزین" : "Alternative Route")}
                                    </span>
                                  </div>
                                  <p>{choice.label}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
