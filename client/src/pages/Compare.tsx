import { useEffect, useMemo, useState } from "react";
import { useLocation } from "wouter";
import { GameHeader } from "@/components/GameHeader";
import { storyNodes, type StoryNode } from "@/data/story.generated";
import { readSave, type LocalSave } from "@/lib/gameState";
import { useLocale } from "@/contexts/LocaleContext";
import { ArrowLeft, GitCompare, GitBranch, CheckCircle2, Circle, MapPin, Compass } from "lucide-react";

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
  const chapters = useMemo(() => {
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
        {chapters.map(({ chapter, nodes }) => {
          const chapterNodes = nodes.filter(n => visitedSet.has(n.id) || n.choices.some(c => selectedSet.has(c.id)));
          if (chapterNodes.length === 0 && (save?.currentNodeId ? nodes.some(n => n.id === save.currentNodeId) : chapter === 1)) {
            // ensure at least active or chapter 1 is visible
          }

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
                  {nodes.filter(n => visitedSet.has(n.id)).length} / {nodes.length} {locale === "fa" ? "گره بازدیدشده" : "nodes visited"}
                </span>
              </div>

              <div className="space-y-4">
                {nodes.map(node => {
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
                          {node.choices.map(choice => {
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
