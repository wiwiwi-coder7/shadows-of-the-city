# Shadows of the City — Redesign

## What changed

- Rebuilt the gameplay presentation as a mobile-first interactive-novel shell: scene frame, readable narrative panel, and one consistent choice system.
- Added responsive behavior for portrait mobile, tablet, and desktop without forcing landscape mode.
- Added safer scene loading states, accessible image alt text, focus-visible controls, reduced-motion handling, and a compact game utility header.
- Reworked the character album to use one portrait per unlocked character instead of composite expression sheets.
- Added a credits / licenses screen, game mark, manifest metadata, favicon, and social description.
- Kept the local save, continue, restart, branching, localized story, codex, settings, and comparison flows intact.

## What was preserved

- All story nodes, chapter progression, choice targets, save keys, unlock logic, and ending behavior.
- Existing scene artwork and public asset fallback behavior.
- English/Persian language switching and RTL story rendering.
- Existing settings for text size, contrast, reduced motion, scene effects, sound levels, mute, privacy, and reset.

## Assets

- `archives/character-expression-originals/` contains the original composite character sheets.
- `archives/character-expression-originals.zip` is the requested backup archive.
- Single portrait crops are hosted externally and referenced by the character catalog; they are not bundled into the repository.
- The new game mark is `client/public/shadows-mark.svg`.

## Sources and licenses

- Lucide icons: https://lucide.dev/ — ISC license.
- Existing game art: project-owned/previously configured game asset storage; no external stock art was added.
- Fonts and existing asset sources remain documented by their existing project configuration. No new commercial font was downloaded.

## Known limitations

- The project’s remote Supabase asset service can temporarily enter a sleeping/startup state; the player now shows a graceful scene fallback while story text remains playable.
- Audio volume and mute settings remain part of the existing settings model; no new large audio pack was added without verified licensing.
