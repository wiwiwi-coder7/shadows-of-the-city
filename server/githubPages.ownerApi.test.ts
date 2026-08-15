import { describe, expect, it } from "vitest";
import { persianStoryNodes, localizeStoryNode } from "../client/src/data/story.fa";
import { storyNodes } from "../client/src/data/story.generated";
import { OWNER_API_URL, ownerDashboardSearch } from "../client/src/lib/ownerApi";
import { publicAssetFallbackUrl, publicAssetUrl } from "../client/src/lib/publicAssets";

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

  it("uses a lightweight WebP scene asset with a deterministic PNG fallback", () => {
    const source = "/manus-storage/scene_01_nicks_apartment_ab12cd34.png";
    expect(publicAssetUrl(source)).toContain("/game-assets/scenes-webp/scene_01_nicks_apartment.webp");
    expect(publicAssetFallbackUrl(source)).toContain("/game-assets/scenes/scene_01_nicks_apartment.png");
  });

  it("only creates valid one-to-ten chapter filter parameters for the owner dashboard", () => {
    expect(ownerDashboardSearch()).toBeUndefined();
    expect(ownerDashboardSearch(1)).toEqual({ chapter: "1" });
    expect(ownerDashboardSearch(10)).toEqual({ chapter: "10" });
    expect(() => ownerDashboardSearch(0)).toThrow("between 1 and 10");
    expect(() => ownerDashboardSearch(11)).toThrow("between 1 and 10");
  });
});
