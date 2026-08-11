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
