# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** CardHawk-Support
**Generated:** 2026-06-12 05:13:00
**Category:** Space Tech / Aerospace / Card Collector Dashboard

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#00D9FF` | `--color-primary` |
| Secondary | `#0F7BA3` | `--color-secondary` |
| CTA/Accent | `#00D9FF` | `--color-cta` |
| Background | `#060913` | `--color-background` |
| Card | `#0E1726` | `--color-card` |
| Text | `#E2E8F0` | `--color-text` |

**Color Notes:** High-tech, immersive cyber cyan and deep tech blues.

### Typography

- **Heading Font:** Roboto
- **Body Font:** Roboto
- **Mood:** high-tech, modern, precise, user-friendly
- **Google Fonts:** [Roboto](https://fonts.google.com/specimen/Roboto)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
```

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: rgba(0, 217, 255, 0.1);
  color: #00D9FF;
  border: 1px solid rgba(0, 217, 255, 0.3);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  background: rgba(0, 217, 255, 0.15);
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #0F7BA3;
  border: 2px solid #0F7BA3;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: #0E1726;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #00D9FF;
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 217, 255, 0.12);
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: #0E1726;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** High-Tech Cyber UI

**Keywords:** Precise, tech, clean lines, data-rich overlays, digital blue & neon cyan highlights, custom icons, dark backgrounds

**Best For:** Card collectors, gamers, tech utilities

**Key Effects:** Subtle glow animations, hover states with soft borders, grid overlays, glassmorphic backdrop blurs (where supported)

### Page Pattern

**Pattern Name:** App Store Style Landing

- **Conversion Strategy:** Show high-fidelity screenshot overlays, list exact integration platform use-cases (Whatnot, eBay Live, TikTok Shop), display direct app store downloads.
- **CTA Placement:** Above the fold, and prominent links at bottom of sections.
- **Section Order:** Navigation > Hero with phone mockups > Feature Highlights Grid > Screenshot Gallery > Help/Support CTA > Footer

---

## Anti-Patterns (Do NOT Use)

- ❌ Flat design without depth
- ❌ Text-heavy pages
- ❌ **Purple, Violet, or Indigo accents** — Comply with the project's Purple Ban to ensure original brand styling.

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for accessibility

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode (if applicable) / Dark mode text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
