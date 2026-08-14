# GitHub Pages Owner Console Scope

## Purpose

The standalone GitHub Pages build serves the public game without a Manus runtime. Its owner console is available at `#/admin` and calls the protected Supabase `owner-api` Edge Function directly.

## Retained owner capabilities

The console retains the capabilities required for independent operation: identifier-and-password owner login, opaque server-issued session tokens, anonymous aggregate dashboard metrics, Persian narrative-node editing, base-translation restoration, and immediate same-browser publication notifications to open player tabs. The player also refreshes published Persian overrides when it regains focus.

## Intentional static-build scope

The standalone console does not expose the legacy Manus-hosted English-content editor, audio catalog and assignment editor, or validation dashboard. These interfaces depended on broader server contracts that are outside the user-required static migration. The public game continues to use its approved bundled English narrative, art, local saves, codex, album, settings, and Supabase-hosted Persian overrides.

## Privacy and publication boundary

No player save is uploaded. When telemetry is enabled in the player’s local settings, the build sends only an anonymous installation identifier and aggregate gameplay event fields to the Supabase Edge Function. Owner credentials, password hashes, service-role credentials, and database access never enter the public bundle.
