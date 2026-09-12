# CardHawk web design system

The website follows Material 3 principles, implemented with shared static CSS and semantic HTML. The source of truth is `styles.css`; shared theme and interaction behavior lives in `theme.js` and `site.js`.

## Direction

Let the product screenshots and content carry the page. Use restrained teal, neutral tonal surfaces, regular-weight typography, and generous spacing. Avoid decorative radar patterns, neon glows, glass effects, perpetual animation, and cards around every paragraph. The website palette complements the existing app screenshots; it does not claim to mirror Android source tokens.

## Foundations

- Use `--md-sys-color-*` role pairs for light and dark themes. Pair primary with on-primary, secondary-container with on-secondary-container, and surface with on-surface or on-surface-variant.
- Use Roboto with system sans-serif fallbacks. Display: 57/64, 45/52, or 36/44 depending on width, weight 400. Headlines: 32/40 or 28/36. Titles: 22/28. Body: 16/24. Labels: 14/20, weight 500.
- Base spacing on 4px increments. Page gutters: 24px compact, 32px expanded. Major section spacing: 40–64px.
- Shape roles: 12px cards, 16px callouts, 28px hero container, fully rounded action and navigation controls.
- Use tonal surfaces for grouping, outlines for document separation, and low elevation only for the phone preview.

## Components and layout

- Consistent top app bar with a clearly identified current page and a 48px theme control.
- Filled buttons for emphasized actions, tonal buttons for the scanner demo, text buttons for secondary navigation. Use visible hover, pressed, and keyboard-focus states.
- Landing: product introduction and demo, unboxed feature columns, screenshot gallery, support callout.
- Support: introduction, sticky section index on expanded screens, readable single-column documents. Section index moves above the document on compact screens. Preserve legal wording and dates unless explicitly asked to edit them.
- Desktop layout adapts at 1000px and 700px. Never force horizontal scrolling.

## Accessibility and behavior

Use semantic links and buttons, a skip link, visible focus outlines, native headings and lists, and hidden/inert demo controls when unavailable. Keep primary controls at least 48px tall. Support system theme preference, persistent overrides when storage is available, and reduced motion. Text contrast should meet WCAG AA. Decorative content must not compete with reading or expose redundant accessible labels.

## References

- https://m3.material.io/styles/color/roles
- https://m3.material.io/styles/typography/type-scale-tokens
- https://m3.material.io/components/cards/overview
- https://github.com/material-components/material-web/blob/main/docs/components/button.md
