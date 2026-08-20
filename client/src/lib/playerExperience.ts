export function primaryCaseAction(hasSave: boolean) {
  return hasSave ? "resume" : "start";
}

export function choiceFeedbackDelay(reducedMotion: boolean) {
  return reducedMotion ? 0 : 170;
}
