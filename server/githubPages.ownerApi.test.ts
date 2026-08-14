import { describe, expect, it } from "vitest";
import { persianStoryNodes, localizeStoryNode } from "../client/src/data/story.fa";
import { storyNodes } from "../client/src/data/story.generated";
import { OWNER_API_URL } from "../client/src/lib/ownerApi";

describe("GitHub Pages Supabase runtime", () => {
  it("uses a standalone Supabase Edge Function rather than a Manus endpoint", () => {
    expect(OWNER_API_URL).toBe("https://blxvvllrtpmqgswhpjiy.supabase.co/functions/v1/owner-api");
    expect(OWNER_API_URL).not.toContain("manus");
  });

  it("renders a published snake_case Persian override returned by the Edge Function", () => {
    const source = storyNodes[0];
    const translation = persianStoryNodes[source.id];
    const localized = localizeStoryNode(source, "fa", {
      id: source.id,
      scene_title: "عنوان آزمایشی انتشار",
      blocks: translation.blocks.map((block, index) => index === 0 ? "متن آزمایشی انتشار" : block.text),
      choice_labels: translation.choices.map(choice => choice.label),
    });
    expect(localized.sceneTitle).toBe("عنوان آزمایشی انتشار");
    expect(localized.blocks[0]?.text).toBe("متن آزمایشی انتشار");
  });
});
