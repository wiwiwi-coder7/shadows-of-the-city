# Persian Narrative Rewrite Implementation Plan

## 1. Separate playable prose from production material

Create a deterministic content-cleaning utility used only for the published player layer. It will discard whole blocks that are transition markers, fixed-outcome notes, branch commentary, production direction, or solely visual camera/palette/mood material. It will remove inline bracketed or parenthesized performance direction from otherwise playable dialogue. Node IDs, choices, choice targets, image URLs and unlock flow stay untouched.

## 2. Re-author Persian story data

Generate a clean English player-source view from the 120 source nodes. Rewrite the surviving scene titles, narration, dialogue, and choices into concise, idiomatic noir Persian in small validated batches. The translator must preserve one source block per retained source block and one choice per source choice, but must never emit annotation syntax, English IDs, design commentary, or chapter-transition language. A lexical and structural gate rejects invalid output before it is saved.

## 3. Render a continuous localized experience

Apply the cleaner before localization so both English and Persian players cannot receive design notes. Ensure player progression skips emptied structural bridge nodes via the existing next IDs rather than announcing any transition. Make the Persian local title `سایه‌های شهر` wherever internal localized labels use the product name. Protect Home from the locale: its text, title and typography stay in the current English treatment at `/` and `/?lang=fa`.

## 4. Validate and review

Add tests for removed marker patterns, block/choice parity after filtering, English passthrough and blank-node continuity. Run a prose QA scan for forbidden annotations and residual English. Inspect desktop and mobile Persian flows across all chapter boundaries and verify the Home route remains visually English. Run type checking, Vitest and the production build before saving the corrected checkpoint.
