import { Activity, CheckCircle2, FilePenLine, LayoutDashboard, LockKeyhole, LogOut, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "wouter";
import { persianStoryNodes } from "@/data/story.fa";
import { OwnerApiError, type OwnerDashboard, type PersianOverride, checkOwnerSession, clearOwnerToken, deletePersianOverride, getOwnerDashboard, getPersianOverrides, loginOwner, logoutOwner, notifyPersianOverridesChanged, savePersianOverride } from "@/lib/ownerApi";
import "./admin.css";

type AdminTab = "overview" | "persian";
const tabs: { id: AdminTab; label: string; icon: typeof LayoutDashboard }[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "persian", label: "Persian story", icon: FilePenLine },
];

function errorText(error: unknown) {
  if (error instanceof OwnerApiError && error.status === 401) return "The archive does not recognize those credentials.";
  return error instanceof Error ? error.message : "The archive could not complete that request.";
}

export default function AdminStatic() {
  const [, setLocation] = useLocation();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState<AdminTab>("overview");

  useEffect(() => {
    let active = true;
    checkOwnerSession().then(result => active && setAuthenticated(result.authenticated)).catch(() => { clearOwnerToken(); if (active) setAuthenticated(false); });
    return () => { active = false; };
  }, []);

  if (authenticated === null) return <div className="admin-loading">Opening the archive…</div>;
  if (!authenticated) return <OwnerLogin onAuthenticated={() => setAuthenticated(true)} onLeave={() => setLocation("/")} />;

  return <main className="admin-shell">
    <aside className="admin-sidebar"><div className="admin-brand"><span>S</span><div><b>Shadows</b><em>Owner console</em></div></div><p className="eyebrow">Private editorial workspace</p><nav>{tabs.map(tab => { const Icon = tab.icon; return <button key={tab.id} className={activeTab === tab.id ? "is-active" : ""} onClick={() => setActiveTab(tab.id)}><Icon size={16} /> {tab.label}</button>; })}</nav><div className="admin-sidebar__footer"><button onClick={() => setLocation("/")}><Sparkles size={15} /> Public experience</button><button onClick={() => logoutOwner().finally(() => setAuthenticated(false))}><LogOut size={15} /> Lock console</button></div></aside>
    <section className="admin-main"><header className="admin-topbar"><div><p className="eyebrow">Restricted archive</p><h1>{tabs.find(tab => tab.id === activeTab)?.label}</h1></div><div className="admin-status"><ShieldCheck size={16} /><span>Owner session active</span></div></header>{activeTab === "overview" ? <Overview onUnauthorized={() => setAuthenticated(false)} /> : <PersianStoryEditor onUnauthorized={() => setAuthenticated(false)} />}</section>
  </main>;
}

function OwnerLogin({ onAuthenticated, onLeave }: { onAuthenticated: () => void; onLeave: () => void }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const submit = async (event: FormEvent) => {
    event.preventDefault(); setError(""); setPending(true);
    try { await loginOwner(identifier, password); onAuthenticated(); } catch (cause) { clearOwnerToken(); setError(errorText(cause)); } finally { setPending(false); }
  };
  return <main className="owner-login"><form onSubmit={submit}><div className="owner-login__mark"><LockKeyhole size={25} /></div><p className="eyebrow">Restricted archive</p><h1>Owner console</h1><p>Enter the private credentials issued at handoff. Player progress and local saves are never visible here.</p><label>Owner identifier<input autoComplete="username" value={identifier} onChange={event => setIdentifier(event.target.value)} placeholder="SOTC-XXXXXXXX" /></label><label>Passphrase<input type="password" autoComplete="current-password" value={password} onChange={event => setPassword(event.target.value)} placeholder="••••••••••••" /></label>{error && <div className="form-error">{error}</div>}<button className="button-primary" disabled={pending}>{pending ? "Verifying…" : "Unlock console"}</button><button type="button" className="button-secondary" onClick={onLeave}>Return to game</button></form></main>;
}

function Overview({ onUnauthorized }: { onUnauthorized: () => void }) {
  const [data, setData] = useState<OwnerDashboard | null>(null);
  const [error, setError] = useState("");
  const load = useCallback(async () => {
    try { setError(""); setData(await getOwnerDashboard()); } catch (cause) { setError(errorText(cause)); if (cause instanceof OwnerApiError && cause.status === 401) onUnauthorized(); }
  }, [onUnauthorized]);
  useEffect(() => { void load(); }, [load]);
  if (!data && !error) return <div className="admin-skeleton">Reading the city’s signals…</div>;
  return <div className="admin-view">{error && <div className="form-error">{error}</div>}<section className="metric-grid"><Metric icon={UsersRound} label="Anonymous installations" value={data?.installations ?? 0} /><Metric icon={Activity} label="Game starts" value={data?.starts ?? 0} /><Metric icon={CheckCircle2} label="Completed cases" value={data?.completions ?? 0} /><Metric icon={FilePenLine} label="Recorded events" value={data?.events ?? 0} /></section><section className="admin-grid-two"><article className="admin-card"><div className="card-heading"><h2>Chapter reach</h2><span>Unique installations</span></div><div className="bar-chart">{data?.chapterReach.map(point => <div key={point.chapter}><span>CH {String(point.chapter).padStart(2, "0")}</span><i><b style={{ width: `${Math.min(100, (point.reached / Math.max(1, data.installations)) * 100)}%` }} /></i><em>{point.reached}</em></div>)}</div></article><article className="admin-card"><div className="card-heading"><h2>Privacy boundary</h2><span>Anonymous only</span></div><p className="empty-copy">This console receives anonymous aggregates only. It cannot read player identities, browser-local saves, or personal information.</p><button className="button-secondary" onClick={() => void load()}>Refresh metrics</button></article></section><section className="privacy-note"><ShieldCheck size={17} /><p><strong>Publication boundary:</strong> Persian text changes are stored in Supabase and then fetched by the public GitHub Pages player. No Manus runtime is used in that path.</p></section></div>;
}

function Metric({ icon: Icon, label, value }: { icon: typeof Activity; label: string; value: number }) { return <article className="metric-card"><Icon size={18} /><div><b>{value.toLocaleString()}</b><span>{label}</span></div></article>; }

function PersianStoryEditor({ onUnauthorized }: { onUnauthorized: () => void }) {
  const entries = useMemo(() => Object.entries(persianStoryNodes).sort(([left], [right]) => left.localeCompare(right)), []);
  const [overrides, setOverrides] = useState<PersianOverride[]>([]);
  const [selectedId, setSelectedId] = useState(entries[0]?.[0] ?? "");
  const [sceneTitle, setSceneTitle] = useState("");
  const [blocks, setBlocks] = useState<string[]>([]);
  const [choiceLabels, setChoiceLabels] = useState<string[]>([]);
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const overrideById = useMemo(() => new Map(overrides.map(item => [item.id, item])), [overrides]);
  const base = persianStoryNodes[selectedId];
  const currentOverride = overrideById.get(selectedId);
  const loadOverrides = useCallback(async () => {
    try { setOverrides((await getPersianOverrides()).overrides); } catch (cause) { setError(errorText(cause)); if (cause instanceof OwnerApiError && cause.status === 401) onUnauthorized(); }
  }, [onUnauthorized]);
  useEffect(() => { void loadOverrides(); }, [loadOverrides]);
  useEffect(() => {
    if (!base) return;
    setSceneTitle(currentOverride?.scene_title ?? base.sceneTitle);
    setBlocks(Array.isArray(currentOverride?.blocks) ? currentOverride.blocks.map(String) : base.blocks.map(block => block.text));
    setChoiceLabels(Array.isArray(currentOverride?.choice_labels) ? currentOverride.choice_labels.map(String) : base.choices.map(choice => choice.label));
    setStatus(""); setError("");
  }, [selectedId, base, currentOverride]);
  if (!base) return <div className="admin-skeleton">Loading Persian story nodes…</div>;
  const save = async (event: FormEvent) => {
    event.preventDefault(); setPending(true); setStatus(""); setError("");
    try { await savePersianOverride({ nodeId: selectedId, sceneTitle, blocks, choiceLabels }); notifyPersianOverridesChanged(); await loadOverrides(); setStatus("Saved and published. Any open player in this browser refreshes the Persian revision immediately."); } catch (cause) { setError(errorText(cause)); if (cause instanceof OwnerApiError && cause.status === 401) onUnauthorized(); } finally { setPending(false); }
  };
  const restore = async () => {
    setPending(true); setStatus(""); setError("");
    try { await deletePersianOverride(selectedId); notifyPersianOverridesChanged(); await loadOverrides(); setStatus("Base Persian translation restored in open players."); } catch (cause) { setError(errorText(cause)); if (cause instanceof OwnerApiError && cause.status === 401) onUnauthorized(); } finally { setPending(false); }
  };
  return <div className="admin-view persian-editor" dir="rtl"><section className="admin-grid-two content-grid"><article className="admin-card"><div className="card-heading"><h2>گره‌های فارسی داستان</h2><span>{entries.length} گره</span></div><div className="content-list compact">{entries.map(([nodeId, node]) => <button type="button" className={`content-list__item ${selectedId === nodeId ? "is-active" : ""}`} onClick={() => setSelectedId(nodeId)} key={nodeId}><span><b>{node.sceneTitle}</b><small>{nodeId}{overrideById.has(nodeId) ? " · ویرایش‌شده" : " · پایه"}</small></span><code>{nodeId}</code></button>)}</div></article><article className="admin-card"><div className="card-heading"><h2>ویرایش فارسی</h2><span>{selectedId}</span></div><form className="admin-form structured-form" onSubmit={save}><label>عنوان صحنه<input required value={sceneTitle} onChange={event => setSceneTitle(event.target.value)} /></label><div className="form-subheading"><span>متن صحنه</span><small>نام گوینده و مقصدها ثابت‌اند</small></div>{base.blocks.map((block, index) => <label className="persian-block" key={`${selectedId}-block-${index}`}><span>{block.type === "dialogue" ? `دیالوگ — ${block.speaker ?? "راوی"}` : "روایت"}</span><textarea required value={blocks[index] ?? ""} onChange={event => setBlocks(current => current.map((item, candidate) => candidate === index ? event.target.value : item))} rows={4} /></label>)}{base.choices.length > 0 && <><div className="form-subheading"><span>انتخاب‌ها</span><small>مقصدها قفل هستند</small></div>{base.choices.map((choice, index) => <div className="persian-choice" key={`${selectedId}-choice-${choice.id}`}><label><span>متن انتخاب {index + 1}</span><input required value={choiceLabels[index] ?? ""} onChange={event => setChoiceLabels(current => current.map((item, candidate) => candidate === index ? event.target.value : item))} /></label><code>{choice.target}</code></div>)}</>}<div className="persian-editor__actions"><button className="button-primary" disabled={pending}>{pending ? "در حال ذخیره…" : "ذخیره و انتشار فوری"}</button><button type="button" className="button-secondary" disabled={!currentOverride || pending} onClick={() => void restore()}>بازگردانی ترجمهٔ پایه</button></div>{status && <p className="empty-copy">{status}</p>}{error && <div className="form-error">{error}</div>}</form></article></section></div>;
}
