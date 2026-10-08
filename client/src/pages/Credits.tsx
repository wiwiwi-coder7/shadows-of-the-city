import { ArrowLeft, ExternalLink } from "lucide-react";
import { useLocation } from "wouter";
import { GameHeader } from "@/components/GameHeader";

export default function CreditsPage() {
  const [, setLocation] = useLocation();
  return <main className="library-page credits-page"><GameHeader compact /><section className="library-hero"><button onClick={() => setLocation("/")}><ArrowLeft size={16} /> Back to the archive</button><p className="eyebrow">Credits / licenses</p><h1>Behind the case</h1><p>A concise record of the visual and software resources used by Shadows of the City.</p></section><section className="credits-content">
    <article className="credits-card"><p className="eyebrow">Original game art</p><h2>Story scenes and character art</h2><p>Original game artwork is served from the project asset store. The album now presents one portrait crop per character; the original composite expression sheets remain preserved in the project workspace archive.</p><p className="archive-note">Archive: <code>character-expression-originals.zip</code></p></article>
    <article className="credits-card"><p className="eyebrow">Open source</p><h2>Interface foundations</h2><p>Lucide icons are used for interface symbols under the ISC license. React, Vite, Wouter and the project dependencies retain their original licenses in package metadata.</p><a href="https://lucide.dev/" target="_blank" rel="noreferrer" className="text-link">Lucide icon library <ExternalLink size={14} /></a></article>
    <article className="credits-card"><p className="eyebrow">Privacy</p><h2>Local-first progress</h2><p>Save data remains in this browser. Optional anonymous gameplay insight can be disabled from Settings. No account is needed to play.</p></article>
  </section></main>;
}
