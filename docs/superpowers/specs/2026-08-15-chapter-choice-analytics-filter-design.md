# Chapter Choice Analytics Filter Design

## Objective

Add a chapter selector to the owner-only **Choice analysis** section of the GitHub Pages console. The selector allows the owner to inspect either all chapters or one of Chapters 1–10 without altering the dashboard’s headline aggregate metrics.

## Scope

The selector is placed above the choice-analysis cards and defaults to **All chapters**. Changing the value requests a fresh owner-authorized dashboard response with an optional `chapter` parameter. Only the following values change with the selected chapter: choice-selection total, distinct traced options, ranked top paths, and per-node option-split bars. The installation, game-start, completion, recorded-event, and chapter-reach summary remains global.

## API Contract

The `dashboard` action accepts an optional positive integer `chapter` in the inclusive range 1–10. When absent, the response reports all chapters. When supplied, the endpoint filters only `choice_selected` telemetry to that chapter before deriving `choiceEvents`, `choicePaths`, `choices`, and `choiceNodes`. It returns `choiceChapter` so the client can render the active scope unambiguously. Invalid values return a client error and never broaden the query silently.

## UI Behavior

The filter uses a native labelled select for keyboard accessibility. It exposes **All chapters** and Chapter 1 through Chapter 10. During a selection change, the existing charts remain visible with a concise updating state; after a successful response they are replaced atomically. If a chapter has no telemetry, the existing empty-state language is shown. If the request fails, the selected filter is retained and the owner sees the existing dashboard error treatment.

## Privacy and Boundaries

All values remain anonymous aggregates. The filter does not request player saves, identities, IP addresses, or personal data. The session token continues to be sent only in the `x-owner-token` header to the owner API.

## Verification

Unit coverage will verify URL parameter generation and scope parsing. The full test suite and TypeScript check must pass. The Edge Function will be deployed, the static build published, and live QA will confirm that selecting Chapter 1 changes analysis cards while aggregate metrics remain visible and the all-chapters option restores the prior view.
