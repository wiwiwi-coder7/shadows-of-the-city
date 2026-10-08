import type { GameSettings } from "./gameState";

let context: AudioContext | null = null;

function getContext() {
  if (typeof window === "undefined" || typeof AudioContext === "undefined") return null;
  context ??= new AudioContext();
  if (context.state === "suspended") void context.resume();
  return context;
}

export function playUiCue(settings: GameSettings, kind: "choice" | "confirm") {
  if (settings.muted || settings.effectsVolume <= 0) return;
  const audio = getContext();
  if (!audio) return;
  const oscillator = audio.createOscillator();
  const gain = audio.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = kind === "choice" ? 220 : 330;
  gain.gain.setValueAtTime(0.0001, audio.currentTime);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.008, settings.effectsVolume / 1000), audio.currentTime + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + (kind === "choice" ? 0.08 : 0.12));
  oscillator.connect(gain).connect(audio.destination);
  oscillator.start();
  oscillator.stop(audio.currentTime + 0.14);
}
