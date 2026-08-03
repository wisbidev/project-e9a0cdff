# Design System — Coffee Lab Landing Page

> Source of truth: the approved `index.html` (preview: http://localhost:8080/design/e9a0cdff-0dec-42e6-a527-e93643398a4b).
> Every value below is extracted from it. Changing a value here without
> changing the approved design is a defect.

Last updated: 2026-05-27

## 1. Foundations

### 1.1 Color

Semantic tokens. Name by job, never by hue.

| Token | Value | Used for |
|---|---|---|
| `--color-bg` | `#FAF4E8` | Page background (warm cream) |
| `--color-surface` | `#FFFDF7` | Menu card background, button text, cup body fill |
| `--color-border` | `#EDE2CE` | Card border, drink border, dotted leader |
| `--color-text` | `#2F2116` | Headings, body text, cup line art |
| `--color-text-muted` | `#7C6350` | Hero subtitle |
| `--color-primary` | `#D97706` | Pill button background, steam, menu underline, focus ring |
| `--color-primary-hover` | `#B45309` | Button hover background, drink price text |
| `--color-primary-soft` | `#F6E3C4` | Drink row hover border |
| `--color-focus` | `#D97706` | `:focus-visible` outline (same token as primary) |

There are no success, warning, or danger tokens: the product is a static
landing page with no forms, alerts, or data-driven states.

#### Contrast audit

Every text-on-background pair actually used. Body text ≥ 4.5:1, large text
(≥ 18.66px bold or ≥ 24px) ≥ 3:1.

| Foreground | Background | Ratio | Passes |
|---|---|---|---|
| `--color-text` `#2F2116` | `--color-bg` `#FAF4E8` | 14.2:1 | AA |
| `--color-text` `#2F2116` | `--color-surface` `#FFFDF7` | 15.3:1 | AA |
| `--color-text-muted` `#7C6350` | `--color-bg` `#FAF4E8` | 5.1:1 | AA |
| `--color-surface` `#FFFDF7` | `--color-primary-hover` `#B45309` | 4.9:1 | AA |
| `--color-primary-hover` `#B45309` | `--color-surface` `#FFFDF7` | 4.9:1 | AA (price text) |
| `--color-surface` `#FFFDF7` | `--color-primary` `#D97706` | 3.1:1 | FAIL — see Known deviations |
| `--color-primary` `#D97706` | `--color-bg` `#FAF4E8` | 2.9:1 | Decorative steam / focus ring — see Known deviations |

### 1.2 Spacing

Base unit: `4px`. Every layout margin, padding, and gap in the product uses
one of these values.

| Token | Value | Used for |
|---|---|---|
| `--space-1` | `4px` | Illustration stroke widths, dotted-leader offset |
| `--space-4` | `16px` | Button padding-y, hero/menu side gutters, drink padding-y |
| `--space-5` | `20px` | Subtitle top margin |
| `--space-6` | `24px` | Hero side gutters, dotted leader min-width |
| `--space-8` | `32px` | Mobile cup bottom margin |
| `--space-10` | `40px` | Cup bottom margin, mobile card padding-y |
| `--space-11` | `44px` | List top margin, section underline width |
| `--space-12` | `48px` | Button top margin, mobile hero padding-y, card side padding |
| `--space-14` | `56px` | Card padding-y |
| `--space-16` | `64px` | Hero padding-y, mobile menu padding-y |
| `--space-20` | `80px` | Mobile menu bottom padding |
| `--space-24` | `96px` | Menu top padding |
| `--space-27` | `108px` | Cup size (88px on mobile) |
| `--space-28` | `110px` | Menu bottom padding |

Values that sit off the 4px grid (`10px` button gap, `14px` list gap /
underline margin, `18px` drink gap and padding-y, `22px` drink padding-x,
`34px` button padding-x) are recorded in Known deviations, not normalized.

### 1.3 Typography

Font families (system stacks — no webfonts are loaded):

- Body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
- Headings: `Georgia, "Times New Roman", serif`
- Mono: none used

| Token | Size | Line height | Weight | Used for |
|---|---|---|---|---|
| `--text-display` | `clamp(3rem, 9vw, 5.25rem)` | 1.05 | 700 | Hero h1 "Coffee Lab", `-0.02em` tracking |
| `--text-h2` | `clamp(1.9rem, 5vw, 2.4rem)` | 1.6 (inherited) | 700 | Menu heading, `-0.01em` tracking |
| `--text-lead` | `clamp(1.1rem, 2.6vw, 1.35rem)` | 1.6 (inherited) | 400 italic | Hero subtitle (muted) |
| `--text-item` | `1.18rem` | 1.6 (inherited) | 700 | Drink names (serif) |
| `--text-base` | `1rem` | 1.6 | 400 | Body copy |
| `--text-label` | `1rem` | 1.6 | 600 | Button label, `0.02em` tracking; price uses 600 + `tabular-nums` |

Heading levels are used in order (h1 → h2) and never skipped.

### 1.4 Radius, border, shadow, motion

| Token | Value | Used for |
|---|---|---|
| `--radius-focus` | `6px` | Focus outline corner radius |
| `--radius-md` | `16px` | Drink row cards |
| `--radius-lg` | `24px` | Menu card |
| `--radius-full` | `999px` | Pill button, menu underline bar |
| `--border-width` | `1px` solid `--color-border` | Menu card, drink rows |
| `--border-dotted` | `2px` dotted `--color-border` | Price leader dots |
| `--border-focus` | `3px` solid `--color-primary`, 3px offset | `:focus-visible` outline |
| `--shadow-card` | `0 10px 30px -12px rgba(47, 33, 22, 0.18)` | Resting menu card |
| `--shadow-btn` | `0 8px 20px -10px rgba(217, 119, 6, 0.55)` | Button resting |
| `--shadow-btn-hover` | `0 12px 26px -10px rgba(180, 83, 9, 0.55)` | Button hover |
| `--shadow-row-hover` | `0 8px 18px -12px rgba(47, 33, 22, 0.22)` | Drink row hover |
| `--duration-fast` | `0.25s ease` | All hover/focus transitions |
| `--duration-load` | `0.9s ease-out` | Staggered fade-up on load |
| `--duration-steam` | `3.2s ease-in-out infinite` | Cup steam loops (delays 0.55s, 1.1s) |

Motion respects `prefers-reduced-motion: reduce`: every animation and
transition is disabled, `scroll-behavior` falls back to `auto`, and state
changes remain. Fade-up staggers: cup 0s, h1 0.12s, subtitle 0.24s, button
0.36s.

### 1.5 Layout and breakpoints

The page is a single fluid column, centered, with no sidebar or multi-column
grid. Only one breakpoint exists in the approved design.

| Name | Condition | Container | Side gutters | Notes |
|---|---|---|---|---|
| Base | default (mobile-first) | hero-inner max 760px, menu-inner max 640px | hero 24px, menu 24px | Hero `min-height: 100svh`, content centered |
| Compact | `max-width: 560px` | unchanged | hero 20px, menu 16px | Card padding 40px 24px, cup 88px, section padding 64px 16px 80px |

There are no `min-width` tiers; layouts above 560px are fluid up to the
container max-widths.

Z-index scale (only these values are allowed):

| Layer | Value |
|---|---|
| Base | `0` |

No layered components (sticky header, modal, dropdown, toast) exist in the
approved design, so no z-index tokens are defined beyond base.

## 2. Components

### 2.1 Pill button (hero CTA)

**Purpose** — the single primary action: smooth-scroll to the menu. Use for
one emphasized action per screen. Not used for secondary or destructive
actions.

**Anatomy** — `[label: "See the menu"] [arrow icon?]` — the arrow is a
decorative down-chevron SVG, `aria-hidden`.

**Sizes** — one size only: `padding: 16px 34px`, `font-size: 1rem` (600),
pill radius `999px`. Height ≈ 58px, comfortably above the 44px minimum hit
target.

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Amber pill, white text, amber-tinted shadow | `--color-primary`, `--color-surface`, `--shadow-btn` |
| Hover | Deep amber background, lifts 2px, shadow deepens, arrow slides down 3px | `--color-primary-hover`, `--shadow-btn-hover` |
| Focus (keyboard) | 3px amber outline, 3px offset, 6px radius on the focus ring | `--color-focus` |
| Active / pressed | Returns to y=0 (no additional shadow change) | — |
| Disabled | Not applicable — it is a static anchor (`<a href="#menu">`); no disabled path exists in the approved design | |
| Loading | Not applicable — no async action | |
| Error | Not applicable — navigation only | |
| Empty | Not applicable — label is fixed copy | |

**Accessibility** — rendered as an `<a>` with `href="#menu"`; `html { scroll-behavior: smooth }` handles the motion, `prefers-reduced-motion` disables it. Text is the accessible name; the arrow is `aria-hidden`. Global `:focus-visible` rule applies.

### 2.2 Drink row

**Purpose** — one menu line: name, dotted leader, price. Reused for every
drink; the approved design ships exactly three (Espresso 45k, Latte 55k,
Cold Brew 60k).

**Anatomy** — `[name] [dotted leader (aria-hidden)] [price]`, baseline-aligned
in a flex row.

**Variants** — one variant only: cream-filled row on the card surface.

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | 1px `--color-border`, 16px radius, cream fill | `--color-border`, `--radius-md`, `--color-bg` |
| Hover | Border warms to soft amber, lifts 2px, soft shadow | `--color-primary-soft`, `--shadow-row-hover` |
| Focus (keyboard) | Not interactive — rows are `div`s, not links; no focus target | |
| Active / pressed | None (non-interactive) | |
| Disabled | Not applicable — static content | |
| Loading | Not applicable — static content | |
| Error | Not applicable — static content | |
| Empty | Not applicable — the menu is a fixed list; there is no empty path | |

**Accessibility** — name and price are plain text spans; the leader is
`aria-hidden`. The row hover is decorative (no action), so nothing is
discoverable only on hover.

### 2.3 Menu card

**Purpose** — the surface that frames the Menu section: white card, hairline
border, soft shadow, centered heading with amber underline.

**Anatomy** — `[h2 "Menu"] [amber underline] [drink rows ×3]`.

**States** — static container; no interactive or data states exist. It is
documented as non-interactive and must not receive hover/focus treatment.

### 2.4 Section heading (with underline)

**Purpose** — the Menu section's centered heading with a 44 × 3px amber
underline bar (pill radius) offset 14px below the text.

**States** — static. The underline is `::after` decoration, not a link.

### 2.5 Coffee cup illustration

**Purpose** — decorative brand mark above the h1 in the hero. Custom inline
SVG (cup, saucer, handle, coffee surface, three steam strokes) — no emoji,
no icon font. `aria-hidden="true"`.

**Anatomy** — `[steam ×3] [cup body] [coffee surface] [handle] [saucer]`.

**States** — static illustration. Steam loops continuously (3.2s ease-in-out,
staggered 0s / 0.55s / 1.1s) and stops under `prefers-reduced-motion`. The
whole cup also participates in the load fade-up.

## 3. Content and formatting

- **Voice and tone** — warm, minimal, calm. One short line says what the
  product is; the menu is the facts. No superlatives, no exclamation marks.
- **Currency** — Vietnamese dong, abbreviated to thousands without a symbol
  or decimals, exactly as the stakeholder's copy: `45k`, `55k`, `60k`.
- **Capitalization** — sentence case for the button ("See the menu");
  Title Case for drink names ("Cold Brew"); brand written exactly as
  "Coffee Lab".
- **Empty and error wording** — not applicable: the page is fully static,
  has no forms and no fetchable content, so no empty or error states exist
  to write copy for.

## 4. Known deviations

Places where the approved design does not follow its own rules or the
anti-patterns in `references/ai-defaults.md`. Recorded, not silently fixed.

| Where | Deviation | Why it stands | Follow-up |
|---|---|---|---|
| Pill button default state | White text on `#D97706` measures 3.1:1, below the 4.5:1 AA threshold for 16px/600 text (hover state on `#B45309` passes at 4.9:1) | The stakeholder approved this exact amber/white pair | Offer a darker amber for the resting button in a follow-up only if the stakeholder asks; do not change the approved design |
| Focus ring | `--color-primary` on the cream background measures 2.9:1, just under the 3:1 WCAG 2.4.11 focus-appearance threshold | Focus is still clearly visible (3px ring, 3px offset); approved as designed | Track as a known contrast gap for a future polish pass |
| Spacing grid | `10px` (button gap), `14px` (list gap, underline margin), `18px` (drink gap/padding-y), `22px` (drink padding-x), `34px` (button padding-x) sit off the 4px base grid | Small deliberate fine-tuning of the pill and menu rows; normalizing would change the approved look | Keep as-is; if a future screen needs a generic spacing token, standardize on the 4px grid |
| Breakpoints | Only one breakpoint (`max-width: 560px`); no `min-width` tiers, no column layouts | Single-column centered layout is the whole product; the content never needs more | No action unless the product grows sections that need multi-column layout |
| Typography ramp | No `--text-xs`/`--text-sm`/`--text-lg` steps — the design jumps from 1rem body to 1.18rem items to fluid display sizes | The page has exactly two levels of content hierarchy | Extend the ramp only when new content needs it |

### ai-defaults compliance

The approved design already avoids every anti-pattern in
`references/ai-defaults.md`: no purple/indigo palette (domain-chosen warm
cream + amber + brown), no decorative gradients, a restrained radius scale
(pills only for the button), light resting shadows with elevation only on
interaction, a layout derived from the real content, no emoji (custom SVG
illustration), realistic copy of realistic length, visible `:focus-visible`
outlines, and no text-over-image or hover-only affordances.

## 5. Change log

| Date | Change | Design PR |
|---|---|---|
| 2026-05-27 | Initial design system extracted from the approved `index.html` | (design system PR) |
