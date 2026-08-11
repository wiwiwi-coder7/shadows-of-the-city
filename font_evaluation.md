# Persian Font Evaluation

**Date:** 11 August 2026  
**Scope:** Persian typography for the Shadows of the City game interface and RTL narrative player.

## Inputs and authorization basis

The supplied `Persianfont.zip` package contained 414 font files, including `IRLotus.ttf` and `IRYekanBold.ttf`. No separate license, README, or attribution document was present in the archive. The project owner explicitly confirmed permission to use the supplied fonts in this project on 11 August 2026. This owner confirmation is the basis for including the selected files; it does not establish any broader redistribution right outside this project.

| Candidate | Visual role tested | Observation | Decision |
|---|---|---|---|
| **IRYekanBold** | Short Persian headings in Settings and library views | Clear, compact, and visually compatible with the game’s noir display hierarchy. | **Selected** as `Shadows Persian Display` for concise RTL headings. |
| **IRLotus** | Narrative paragraphs and choice labels | Attractive character, but its thin strokes reduce legibility over photographic scenes at mobile reading sizes. | Stored as an uploaded project fallback asset; not used as the default story-body face. |
| **Vazirmatn** | Narrative paragraphs, dialogue, choices, and standard UI | The most legible option at the tested 13–18 px mobile range and on dark scene overlays. | **Selected** as the default Persian reading face. |

## Implementation

`IRYekanBold` is served as a self-hosted web font from the project’s durable storage path and used only for prominent headings. The supplied `IRLotus` asset is also hosted for a future editorial variant, while the existing `Vazirmatn` family remains the default for long-form text. This division keeps the owner-supplied visual identity visible without trading away readable Persian narrative text on desktop or mobile.
