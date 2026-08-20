# Player Experience Polish Design

## Intent

This pass keeps the cinematic noir identity and continuous ten-chapter narrative intact while removing avoidable friction for a first-time or returning player. It changes no story node, choice target, local-save field, analytics event, or owner-admin contract.

## Design direction

The public experience will use a **case-file command surface** rather than a collection of small, competing links. The home screen will give a returning player one dominant action: `RESUME CASE`. Starting over remains available but becomes explicitly destructive only when a save exists. The resume panel will retain scene, date, and progress context while no longer duplicating the main call to action.

The player view will use a compact progress rail with chapter, scene, trace percentage, and local-save reassurance in one readable place. Narrative type gains a little more room and contrast. Choices will read as deliberate decisions: stronger numbering, clearer hover/focus treatment, short selected-state feedback, and protection from accidental double activation. A visible save acknowledgement follows the interaction without interrupting the prose.

The current mobile-menu control does not expose navigation. It will become an accessible navigation sheet on compact screens, with direct routes to the codex, album, path review, settings, and home. On larger screens existing compact navigation remains available.

## Components and data flow

`GameHeader` owns the responsive navigation sheet and emits only route changes. `Home` derives the primary action from the existing `LocalSave` fields, so no new persistence is introduced. `PlayStatic` and `Play` share the same interaction states: an optional pending choice id and save-feedback message. Both continue to write the existing local save before visual transition.

## Validation

TypeScript and focused Vitest tests will verify state-safe helper behavior. Browser review will cover a new-player home state, a saved-progress home state, story choice feedback, keyboard choices, the mobile navigation sheet, and the final static GitHub Pages artifact. `prefers-reduced-motion` and current text-scale/high-contrast behavior remain respected.
