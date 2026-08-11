# Accessibility QA Record

The public settings route was reviewed in the development accessibility preview (`/settings?preview=a11y`). This mode activates the large text choice, high-contrast mode, and reduced-motion mode without changing an individual player’s saved preferences. The review confirms that their active controls are visually distinct and that the full settings panel remains legible.

| Control | Active-state evidence | Result |
|---|---|---|
| Text scale | The **A++** selector is active in the development accessibility preview. | The selected state is visible and the settings card remains readable. |
| High contrast | The high-contrast switch is active in the same preview. | The active switch state is clear against the dark interface. |
| Reduced motion | The reduced-motion switch is active in the same preview. | The active switch state is clear and the runtime applies its reduced-motion class. |
| Keyboard choices | The story-player review at `/play` shows the first choice receiving the visible focus ring after a node loads. | Native Tab/Enter activation works, while number keys select the corresponding visible choice. |

The player uses semantic buttons for all choices and restores focus to the next actionable control after a node change. This provides a predictable keyboard-only continuation path without requiring pointer input.
