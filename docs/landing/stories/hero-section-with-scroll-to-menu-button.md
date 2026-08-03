# Story — Hero section with scroll-to-menu button

Module: `landing`
Plan item: 1 — Hero section with scroll-to-menu button (P1, feature)
Requirements: LANDING-001, LANDING-002
Test cases: `docs/landing/test-cases/hero.md`

## User story

As a **Visitor**, I want to land on a hero that shows the Coffee Lab name and
tagline and lets me jump straight to the menu, so that I immediately know whose
site this is and reach the drinks without scrolling.

## In scope

- The hero section as the first section of the page, per the approved design
  and `design/design-system.md`.
- Decorative coffee-cup inline SVG above the headline (`aria-hidden`, steam
  animation per `--duration-steam`).
- Headline `h1` reading exactly **Coffee Lab** (serif, `--text-display`).
- Subtitle reading exactly **Slow-roasted, small batch** (italic, muted,
  `--text-lead`).
- Primary pill button labelled **See the menu** with a decorative down-chevron
  (`aria-hidden`), rendered as a real anchor `<a href="#menu">`.
- Smooth scrolling from the button to the menu section (`html {
  scroll-behavior: smooth }`), disabled under `prefers-reduced-motion`.
- Soft staggered fade-up on load (`--duration-load`, staggers cup 0s / h1
  0.12s / subtitle 0.24s / button 0.36s), skipped under
  `prefers-reduced-motion`.
- Quiet button hover (amber deepens to `#B45309`, 2px lift, shadow deepens) and
  visible keyboard focus ring (`:focus-visible`, 3px amber outline, 3px
  offset).

## Out of scope

- The Menu section itself (heading, card, the three drinks) — its own plan
  item, item 2; this story only targets its anchor.
- Any other section (About, Hours, Footer, gallery) — deliberately not built;
  the plan is exactly Hero + Menu.
- Backend, database, API, forms, login, analytics — the project shape is
  `static`.
- Any behaviour that requires JavaScript to work: with JS disabled the button
  must still navigate via its `#menu` anchor (instant jump); smooth scroll is
  a progressive enhancement.
- Additional animations beyond the approved fade-up, steam loop, hover lift,
  and arrow slide — no scroll-triggered, parallax, or looping hero effects.

## UI scope

One screen: the hero, first section of a single scrolling document, content
centered, `min-height: 100svh`, side gutters 24px (20px under 560px). States
that must exist:

| State | Behaviour |
|---|---|
| Default (load) | Cup, headline, subtitle, button fade up in sequence; button at rest (amber pill, white text) |
| Hover | Button background deepens to `#B45309`, lifts 2px, shadow deepens, chevron slides down 3px |
| Focus (keyboard) | Button shows 3px amber outline with 3px offset |
| Reduced motion | No fade, no steam, no smooth scroll — content appears instantly, anchor jumps instantly |
| JS disabled | Anchor navigation still works; content fully visible |

## Acceptance criteria

Each criterion is observable and maps one-to-one onto a test case in
`docs/landing/test-cases/hero.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is loaded | I look at the top of the page | The hero is the first section and the headline reads exactly "Coffee Lab" |
| AC-2 | The page is loaded | I look at the hero section | The subtitle reads exactly "Slow-roasted, small batch" |
| AC-3 | The page is loaded | I look at the hero section | The hero uses the cream (`#FAF4E8`) background, dark brown (`#2F2116`) text, and amber (`#D97706`) accent with rounded corners, per the design system |
| AC-4 | The page is loaded and the menu is below the fold | I click the hero button | The page scrolls smoothly until the top of the menu section is in view |
| AC-5 | The page is loaded | I hover over the hero button | The button shows the quiet hover state: amber deepens to `#B45309` with no dramatic animation |
| AC-6 | The page is loaded, reduced motion not requested | I watch the hero appear | The hero content fades in softly on load (staggered fade-up) |
| AC-7 | `prefers-reduced-motion: reduce` is set | I load the page and click the button | No fade-in plays and scrolling is an instant jump, not smooth |
| AC-8 | JavaScript is disabled | I click the hero button | The button is a real `<a href="#menu">` and still navigates to the menu (instant jump) |
| AC-9 | The page is loaded | I tab to the hero button | The button receives keyboard focus with a visible amber focus ring |
| AC-10 | The page is loaded | I inspect the hero copy | Headline, subtitle, and button label ship verbatim: "Coffee Lab", "Slow-roasted, small batch", "See the menu" |

## Dependencies

- **Menu section with three drinks** (plan item 2) must exist for
  end-to-end scroll verification — it provides the `#menu` anchor target and
  sits directly below the hero. The button and hero can be built and reviewed
  in isolation before that story lands.
- Approved design (`design/index.html` + `design/design-system.md`) for exact
  copy, palette, and motion tokens.
- Next.js (TypeScript) + Tailwind CSS scaffold for rendering.
