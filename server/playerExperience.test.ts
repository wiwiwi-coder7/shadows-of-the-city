import { describe, expect, it } from "vitest";
import { choiceFeedbackDelay, primaryCaseAction } from "../client/src/lib/playerExperience";

describe("player experience decisions", () => {
  it("gives a returning player one resume-first action", () => {
    expect(primaryCaseAction(true)).toBe("resume");
    expect(primaryCaseAction(false)).toBe("start");
  });

  it("does not delay a decision when reduced motion is requested", () => {
    expect(choiceFeedbackDelay(true)).toBe(0);
    expect(choiceFeedbackDelay(false)).toBe(170);
  });
});
