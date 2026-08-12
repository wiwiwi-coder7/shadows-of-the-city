# Persian Localization QA Record

**Date:** 11 August 2026  
**Scope:** Chapter 1 Persian narrative overlay, in-app language control, RTL layout, local persistence, and English fallback behavior.

| Check | Result | Evidence |
|---|---|---|
| English initial state | Passed | Interactive browser run reported `en|ltr` before the settings interaction. |
| In-app English → Persian change | Passed | The actual `فارسی / Persian` settings button was located and clicked. The resulting browser state was `fa|rtl|fa`: document language, direction, and persisted settings all switched. |
| Desktop Persian settings layout | Passed | `qa/shadows-of-the-city/settings-after-in-app-farsi-switch.png` shows the Persian settings screen in RTL orientation after the button click. |
| Chapter 1 Persian overlay | Passed | The post-switch player state contained Persian Chapter 1 narration and speaker text, beginning with «درست… بیدار شو». |
| Chapter 1 choice flow | Passed | The first displayed Chapter 1 choice was activated in the interactive browser run; the following node rendered the Persian «نشانی برنجی» narrative. |
| Mobile RTL story layout | Passed | `qa/shadows-of-the-city/play-mobile-persisted-farsi.png` shows Chapter 1 narration, dialogue, and all three choices in RTL mobile layout after the persisted in-app switch. |
| English comparison | Passed | Desktop and mobile screenshots were captured for `/play?lang=en`; the normal English LTR player remains legible and aligned. |
| Chapters 2–10 fallback | Passed by automated behavior test | `localizeChapterOneNode` returns the original English node unchanged for Chapter 2+ while the player renders the Persian `untranslatedChapter` notice when locale is `fa`. |

The QA command used a browser session connected to the running development preview, rather than relying only on a URL language override. Its reported state is retained in the terminal record; generated visual evidence remains at `/home/ubuntu/qa/shadows-of-the-city/`.

## Full-Chapter Persian QA — 11 August 2026

The final localization registry covers all **120** runtime story nodes. An interactive browser QA run loaded representative opening nodes from Chapters 2, 6, and 10 after setting the local save directly, and confirmed `lang=fa`, `dir=rtl`, visible Persian text, three rendered choices, and no fallback notice for every sample. A 375-pixel mobile run for Chapter 10 kept the story column within the viewport at **347 pixels**, with Persian narration, dialogue and choices legible in RTL.

The supplied Persian display font is applied only to concise headings. Narrative body text and choices use Vazirmatn for clearer mobile reading; the supplied IR Lotus font remains available as a self-hosted fallback asset. A final lexical audit removed visible Latin words from Chapters 2–10, other than internal field/identifier names that never render to players. Screenshots for the extended QA are stored in `/home/ubuntu/qa/shadows-of-the-city-full-persian/`.

### Per-chapter runtime verification

An exhaustive connected-browser run set a Persian local save at the first playable node of every translated chapter, validated the rendered Arabic-script content and RTL document direction, triggered the first displayed choice, then repeated the same flow at 375 pixels. In each case the fallback notice was absent, the opening supplied three choices, and the selected path advanced to the next Persian node.

| Chapter | Opening node exercised | First-choice destination | Desktop | Mobile |
|---|---|---|---|---|
| 2 | `CH2_S1_N01` | `CH2_S1_N02` | Passed | Passed |
| 3 | `CH3_S1_N01` | `CH3_S1_N02` | Passed | Passed |
| 4 | `CH4_S1_N01` | `CH4_S1_N02` | Passed | Passed |
| 5 | `CH5_S1_N01` | `CH5_S1_N02` | Passed | Passed |
| 6 | `CH6_S1_N01` | `CH6_S1_N02` | Passed | Passed |
| 7 | `CH7_S1_N01` | `CH7_S1_N02` | Passed | Passed |
| 8 | `CH8_S1_N01` | `CH8_S1_N02` | Passed | Passed |
| 9 | `CH9_S1_N01` | `CH9_S1_N02` | Passed | Passed |
| 10 | `CH10_S1_N01` | `CH10_S1_N02` | Passed | Passed |

The 375-pixel checks kept the story column at 347 pixels, within the mobile viewport, across the complete sample set. Screenshot evidence for each chapter and viewport is retained in `/home/ubuntu/qa/shadows-of-the-city-full-persian/`.

## Narrative Cleanup QA — 12 August 2026

The player layer now filters production-only blocks for both locales, while retaining node IDs, story routing, scene art, and choices. The Persian HUD no longer shows chapter or scene labels; it shows only the in-world location. Empty bridge nodes advance silently through their existing destination rather than presenting a transition screen.

The post-cleanup browser run exercised `CH2_S1_N01` through `CH10_S1_N01` and the first choice from each node in both desktop and 375-pixel mobile layouts. Every sampled route reported Persian text, RTL direction, no fallback, no production-language pattern, three initial choices, and a normal transition to `CHx_S1_N02`. The `/?lang=fa` Home-route capture remained English in copy, layout, and typography.

| Chapter | Verified opening | First-choice result | Desktop / mobile production-language check |
|---|---|---|---|
| 2 | `CH2_S1_N01` | `CH2_S1_N02` | `false` / `false` |
| 3 | `CH3_S1_N01` | `CH3_S1_N02` | `false` / `false` |
| 4 | `CH4_S1_N01` | `CH4_S1_N02` | `false` / `false` |
| 5 | `CH5_S1_N01` | `CH5_S1_N02` | `false` / `false` |
| 6 | `CH6_S1_N01` | `CH6_S1_N02` | `false` / `false` |
| 7 | `CH7_S1_N01` | `CH7_S1_N02` | `false` / `false` |
| 8 | `CH8_S1_N01` | `CH8_S1_N02` | `false` / `false` |
| 9 | `CH9_S1_N01` | `CH9_S1_N02` | `false` / `false` |
| 10 | `CH10_S1_N01` | `CH10_S1_N02` | `false` / `false` |
