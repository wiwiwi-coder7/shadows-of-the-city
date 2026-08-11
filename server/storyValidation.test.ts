import { describe, expect, it } from "vitest";
import { validateManagedStory } from "./storyValidation";

describe("managed story validation", () => {
  it("follows every choice branch when finding broken and unreachable nodes", () => {
    const result = validateManagedStory([
      { id: "start", payload: { isStart: true, imageUrl: "/scene.png", choices: [{ target: "left" }, { target: "missing" }] } },
      { id: "left", payload: { imageUrl: "/left.png", nextId: "end" } },
      { id: "end", payload: { imageUrl: "/end.png" } },
      { id: "orphan", payload: { imageUrl: "/orphan.png" } },
    ]);
    expect(result.brokenDestinations).toEqual(["start → missing"]);
    expect(result.unreachable).toEqual(["orphan"]);
  });

  it("reports a missing scene image for any managed node", () => {
    const result = validateManagedStory([{ id: "start", payload: { isStart: true } }]);
    expect(result.missingImages).toEqual(["start"]);
  });
});
