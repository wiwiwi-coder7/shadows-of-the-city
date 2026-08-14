# Persian Literary Reread — 2026-08-13

## Scope and outcome

All ten authored Persian chapter sources were reread directly at node level. The review assessed player-visible narration, dialogue, choice labels, scene titles, character-name consistency, continuity between choices, and removal of non-diegetic language. Node IDs, choice IDs, destinations, flags, unlock behavior, and continuous chapter flow were not altered.

The editorial target was a natural, restrained Persian noir voice: cinematic without inflated metaphor, concise in dialogue, and consistent with each character’s established register. The existing rewrites were broadly sound. This pass therefore applies selective corrections where a phrase read as translated, a word choice was too technical, or a name spelling had drifted.

| Chapter | Reread result | Recorded follow-up |
| --- | --- | --- |
| 1 | Passed for voice, pacing, and opening continuity. | No wording change required. |
| 2 | Refined. | Replaced operational jargon in `CH2_S4_N03`, clarified Audrey’s unreadable expression, corrected the company-name drift, and made the Anton reference idiomatic. |
| 3 | Refined. | Smoothed a rigid physical-description phrase, corrected the shipping-company name to `دریگر`, and clarified Erica’s exit beat. |
| 4 | Refined. | Reworked three unnatural constructions in Gaspar and Audrey’s dialogue without changing the emotional beat. |
| 5 | Refined. | Corrected the canonical spelling `آدین` throughout its grief sequence and retained the understated mourning register. |
| 6 | Refined. | Smoothed Nick’s withheld-memory narration, Erica’s bargain, and Kurt’s coercion disclosure. |
| 7 | Refined. | Clarified the return-from-flashback physical beat while preserving the reveal and Vivian encounter. |
| 8 | Refined. | Removed one redundant construction in the rooftop confession; its intimate, restrained register otherwise passed. |
| 9 | Refined. | Clarified Gaspar’s survival line, Doyle’s uncertainty, and Kurt’s final warning. |
| 10 | Refined. | Clarified Erica’s infiltration timing and corrected the final remaining `آدین` spelling in the confrontation choice. |

## Chapters 2–6 node-level record

The following internal record is deliberately terse. **P** means the node passed as-is after a direct reread; **R** means the listed player-facing copy received a selective refinement. All other behavior stayed unchanged.

| Chapter | Nodes reread | Result |
| --- | --- | --- |
| 2 | `CH2_S1_N01`, `CH2_S1_N02`, `CH2_S2_N01`, `CH2_S2_N02`, `CH2_S2_N03`, `CH2_S3_N01`, `CH2_S3_N02`, `CH2_S3_N03`, `CH2_S4_N01`, `CH2_S4_N02` | **P** — voice, choice language, and noir pacing remained natural. |
| 2 | `CH2_S4_N03` | **R** — replaced the overly operational «پاک‌سازی» with «اتاق پشتی را می‌گردند»; clarified Audrey’s expression and the Anton reference. |
| 3 | `CH3_S1_N01`, `CH3_S1_N02`, `CH3_S1_N03`, `CH3_S2_N01`, `CH3_S2_N02`, `CH3_S3_N01`, `CH3_S3_N02`, `CH3_S3_N03`, `CH3_S4_N01` | **P** — threat, memory, and dialogue beats retain their established register. |
| 3 | `CH3_S2_N03` | **R** — made the post-fight physical beat less literal and more idiomatic. |
| 3 | `CH3_S4_N02`, `CH3_S4_N03` | **R** — restored `دریگر` spelling and refined Erica’s exit phrasing. |
| 4 | `CH4_S1_N01`, `CH4_S1_N02`, `CH4_S2_N01`, `CH4_S2_N02`, `CH4_S2_N03`, `CH4_S3_N01`, `CH4_S3_N02`, `CH4_S4_N01`, `CH4_S4_N02`, `CH4_S4_N03`, `CH4_S5_N03` | **P** — investigation, trust, and safe-house continuity passed. |
| 4 | `CH4_S3_N03`, `CH4_S5_N01`, `CH4_S5_N02` | **R** — corrected three constructions that read as translated rather than authored Persian. |
| 5 | `CH5_S1_N01`, `CH5_S1_N02`, `CH5_S2_N01`, `CH5_S3_N03`, `CH5_S4_N02` | **P** — the grief sequence remained restrained and character-consistent. |
| 5 | `CH5_S1_N03`, `CH5_S2_N01`, `CH5_S2_N02`, `CH5_S3_N01`, `CH5_S3_N02`, `CH5_S4_N01`, `CH5_S4_N03`, `CH5_S5_N01`, `CH5_S5_N02` | **R** — standardized every remaining `آدین` reference and corrected the surrounding labels and narration. |
| 6 | `CH6_S1_N01`, `CH6_S2_N01`, `CH6_S2_N02`, `CH6_S2_N03`, `CH6_S3_N01`, `CH6_S3_N03`, `CH6_S4_N01`, `CH6_S4_N03` | **P** — discovery, negotiation, and personnel-file scenes passed. |
| 6 | `CH6_S1_N02`, `CH6_S3_N02`, `CH6_S4_N02` | **R** — smoothed one metaphor, Erica’s request, and Kurt’s coercion disclosure. |

## Canonical editorial safeguards

The canonical spelling for Adin is **`آدین`**. The shared localization test now asserts that the former variant `ادین` does not remain in the composed Persian story registry. The test also checks representative revised prose from Chapters 2, 5, and 10 and confirms that player-facing narrative routing remains unchanged.

The full test suite passed after the review: **10 test files and 21 tests**. TypeScript checking and the production build also passed. The production build only emitted expected static-asset resolution and bundle-size advisories; neither affects the runtime story flow.

> This record is an editorial QA artifact, not player-visible content. The game itself continues to omit production notes, chapter-transition screens, and editorial annotations.
