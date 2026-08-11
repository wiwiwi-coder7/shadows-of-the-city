import { ArrowLeft, LockKeyhole } from "lucide-react";
import { useLocation } from "wouter";

export default function AdminPlaceholder() {
  const [, setLocation] = useLocation();
  return <main className="admin-gate"><section><LockKeyhole size={26} /><p className="eyebrow">Restricted archive</p><h1>Owner console</h1><p>The private editorial console is being prepared with server-side access controls. Public story data and player saves are never exposed here.</p><button className="button-secondary" onClick={() => setLocation("/")}><ArrowLeft size={15} /> Return to the game</button></section></main>;
}
