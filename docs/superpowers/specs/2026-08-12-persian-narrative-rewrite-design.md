# Persian Narrative Rewrite Design

**Status:** Approved direction awaiting written-spec review  
**Scope:** Player-facing Persian story data only. The English source and the landing page remain visually and textually unchanged.

## Objective

Replace the current literal, machine-like Persian overlay with natural noir narrative Persian. The player must see only story prose, dialogue, and choices. They must not see development annotations, visual production instructions, emotional-performance labels, relationship-tracking notes, branch explanations, or scene/chapter transition notices.

The Persian name of the game is **«سایه‌های شهر»** wherever the game title appears in localized internal screens. The landing page is an explicit exception: it remains English in both locales so its existing typography and composition are preserved.

## Content boundary

| Content type | Persian player experience |
|---|---|
| Narrative prose, dialogue, scene title, and choices | Rewritten in natural Persian and retained. |
| Production direction such as lighting, camera, palette, composition, or mood | Removed. |
| Bracketed performance labels, character-state labels, and implementation notes | Removed. |
| Fixed-outcome notes, relationship-flag notes, and branch-design commentary | Removed. |
| “Scene ended”, “transition”, “chapter start”, and “chapter end” markers | Removed. Continuous play advances directly through existing choices and destinations. |

## Data and rendering approach

The rewrite preserves every node ID, scene image URL, choice ID, and choice target. A focused content-cleaning layer first removes non-diegetic source blocks from the Persian node overlay. The remaining prose is rewritten rather than translated word-for-word. This keeps browser saves, unlock behavior, keyboard navigation, the admin data model, and story routing intact.

`Home.tsx` will be protected from locale-driven title or typography changes. Story, Settings, Codex, and Album retain their Persian/RTL support; the Home route retains the current English visual system.

## Quality rules

Every surviving Persian block must read as in-world narration or dialogue. Character traits must emerge from action and speech; no explanatory parenthetical such as “older than her age”, “controlled anger”, or “resolution” may appear. Scene transitions are implied by the next scene’s narrative rather than announced. The rewrite uses consistent Persian names: نیک، آدری، کرت، گاسپار، هیلر، اریکا، آنتون، بنی، وین، اوزی و آدین.

## Validation

Automated tests will verify the absence of prohibited annotation patterns, preserved choice routing, English passthrough, and continuous localized routing. Browser QA will inspect the start, a transition, and an end-adjacent node for every chapter in Persian RTL. A separate Home-route check will verify that `?lang=fa` does not alter its English content or type treatment.
