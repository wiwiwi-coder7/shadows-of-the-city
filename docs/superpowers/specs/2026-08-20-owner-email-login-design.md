# Owner Email Login Design

## Goal

Replace the legacy randomly generated owner identifier with one fixed authorized email address, `adry.201088@gmail.com`, and a newly generated six-digit numeric password. The GitHub Pages owner console remains the only supported login surface.

## Authentication Contract

The login request accepts a JSON object with `email` and `password` string fields. The Edge Function normalizes the email to lower case, validates that it exactly matches the authorized email, and validates that the password contains exactly six ASCII digits. Incorrect email and password inputs receive the same `INVALID_CREDENTIALS` response so the API does not reveal which field failed.

The credential record continues to keep only a per-credential salt and scrypt hash; no password is stored or returned. Every existing `admin_sessions` row is deleted when the credential is replaced, so all legacy sessions are invalidated immediately. New successful logins continue to receive the existing opaque, 14-day owner token.

## Owner Console

The login screen displays the authorized email as fixed information and collects only the six-digit numeric passcode. It uses `inputMode="numeric"`, `autoComplete="one-time-code"`, and a digit pattern while retaining `type="password"` so leading zeroes are preserved.

## Validation and Verification

Tests cover the email/pin request contract and the login client payload. Before deployment, the static build, type checks, and Vitest suite must pass. Production verification uses an invalid login attempt followed by the authorized email and generated PIN, then confirms an authenticated dashboard session.
