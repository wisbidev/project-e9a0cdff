# Story — Menu section with three drinks

Module: `landing`
Plan item: "Menu section with three drinks" (P1, feature)
SRS requirements implemented: LANDING-003, LANDING-004
Design source of truth: `design/index.html` (menu markup) + `design/design-system.md` (menu card §2.3, drink row §2.2, section heading §2.4)

## User story

*As a* Visitor, *I want to* see the Coffee Lab menu with exactly three drinks and their prices, *so that* I know what the shop sells and what it costs, and I land on it directly from the hero button.

## Scope

### In scope

- A `<section id="menu">` placed directly below the hero with no section in between — the scroll target of the hero button.
- A centered `h2` heading reading exactly "Menu" with the amber underline bar (44 × 3px, pill radius, 14px below the text).
- The cream menu card (`--color-surface` `#FFFDF7`) with 1px hairline border (`--color-border` `#EDE2CE`), 24px radius, and resting card shadow, inside the 640px max-width menu container.
- Exactly three drink rows, each with name, dotted leader (`aria-hidden`), and price, in this order and with these exact strings:
  - Espresso — 45k
  - Latte — 55k
  - Cold Brew — 60k
- Drink row styling: cream fill, 1px hairline border, 16px radius, serif bold name (1.18rem), price in 600 weight amber `--color-primary-hover` with `tabular-nums`; decorative quiet hover (border warms to `--color-primary-soft`, lifts 2px, soft shadow) with the 0.25s ease transition.
- Section and card padding/spacing per the design system (menu top padding 96px, bottom 110px; card padding 56px; compact breakpoint ≤560px: card padding 40px 24px, section padding 64px 16px 80px).
- Responsive behaviour down to 320px: no horizontal page scroll, prices never cut off.

### Out of scope

- Anything beyond the three drinks: no fourth drink, no drink descriptions, no images, no badges, no links inside the menu, no decorative filler.
- Additional sections (About, Hours, Locations, Footer, gallery) — the page is exactly Hero + Menu.
- Ordering, payment, cart, or any interactive behaviour in the menu — the drink rows are non-interactive `div`s.
- The hero section itself (headline, subtitle, button) — built in story "Hero section with scroll-to-menu button"; this story only provides the `#menu` anchor it points to.
- Any backend, database, API, or data fetching — the project shape is `static`; the menu is fixed copy.
- Price formatting changes — prices ship exactly as "45k", "55k", "60k" with no currency symbol or suffix.

## UI scope

The menu section as rendered in the approved design (`design/index.html`): one screen region on the single-page document, immediately below the hero. States that must exist: default, hover on drink rows (decorative only), and narrow viewport (320px). No separate routes, loading, empty, or error states — the content is static and ships with the page. No new screens are created by this story.

## Acceptance criteria

Test derives its cases directly from these; each criterion must be observable.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is loaded | I inspect the document structure | A section with `id="menu"` sits directly after the hero section with no section in between |
| AC-2 | The page is loaded | I scroll to the menu section | The heading reads exactly "Menu" |
| AC-3 | The page is loaded | I scroll to the menu section | I see exactly three drink rows, in order: Espresso 45k, Latte 55k, Cold Brew 60k — names and prices match the spec verbatim |
| AC-4 | The page is loaded | I scroll to the menu section | No fourth drink or any other content appears beyond the heading and the three rows |
| AC-5 | The page is loaded | I look at the menu section | It uses the card styling from the design system: cream surface, 1px hairline border, 24px rounded corners, soft resting shadow |
| AC-6 | The page is loaded and the menu is below the fold | I click the hero button | I land at the top of the menu section |
| AC-7 | The page is rendered at 320px wide | I look at the menu section | All three drinks and prices are fully visible with no horizontal page scroll |

### Failure and boundary behaviour

| Case | Condition | Expected behaviour |
|---|---|---|
| JavaScript disabled | The visitor's browser runs without JS | The menu is static HTML: it renders correctly with all three drinks, and the `#menu` anchor still resolves from the hero button |
| Copy drift | A drink name or price renders differently from the spec | Defect: names and prices must match exactly ("Espresso"/"45k", "Latte"/"55k", "Cold Brew"/"60k") with no currency suffix added or removed |
| Reduced motion | `prefers-reduced-motion: reduce` is set | The drink-row hover transition is disabled; state changes remain instant |
| Narrow viewport | 320px wide | Menu items and prices stay fully readable, no cut-off prices, no horizontal scroll |
| Permission | Any visitor | All visitors are identical — no permission differences in this module |

## Dependencies

- **Approved design** (`design/index.html` + `design/design-system.md`) — exists; supplies the exact markup, copy, palette, and spacing this story builds to.
- **Story "Hero section with scroll-to-menu button"** — provides the button that scrolls to `#menu`; the anchor target (`id="menu"`) is delivered by this story. AC-6 (end-to-end scroll) can only be verified once both stories are implemented; this story itself only needs to provide the anchor.
- **Project scaffold** — Next.js (TypeScript) + Tailwind CSS; the static shape means no backend or database work at any point.
- **Assumption** — prices are final and ship verbatim as "45k", "55k", "60k" ("k" = thousand VND, no currency symbol displayed).
