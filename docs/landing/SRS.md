# SRS — Landing

Module: `landing`
Last updated: 2026-05-27
Design: [View the approved design](http://localhost:8080/design/e9a0cdff-0dec-42e6-a527-e93643398a4b)
Design system: `design/design-system.md`

> One file per module, at `docs/{module}/SRS.md`. It covers only the functions
> that belong to this module. Never write `docs/SRS.md`.

## 1. Purpose

The landing module is the entire product: a single-page brochure site for
Coffee Lab. It introduces the brand with a hero and shows the three drinks the
shop sells. Anyone who visits the site uses this module; without it the
business has no web presence at all. The site is deliberately static —
frontend only, no backend, no database, no forms, no login — so this module is
also the whole scope of the project.

## 2. Actors

Every visitor to the page is anonymous. There are no accounts, roles, or
permissions in this module because the site has no state and stores no data.

| Actor | Who they are | What they may do in this module |
|---|---|---|
| Visitor | Anyone who opens the page | View the hero and menu; click the hero button to scroll to the menu |

## 3. Scope

**In scope** — the functions specified below, by their plan titles:

- Hero section with scroll-to-menu button
- Menu section with three drinks

**Out of scope** — name what a reader would reasonably expect here and say
where it lives instead. This section prevents the same argument twice.

- Backend, database, API, or server-side logic — deliberately not built; the
  project shape is `static` and the content is fixed.
- Forms, contact, login, or account features — deliberately not built; the
  stakeholder asked for a brochure site with exactly two sections.
- Additional sections (About, Hours, Locations, Footer, gallery) — deliberately
  not built; the approved plan is exactly a Hero and a Menu, nothing else.
- Ordering, payment, or cart functionality — deliberately not built; the menu
  is informational only.

## 4. Functional requirements

One subsection per function. Every requirement carries a stable id
`LANDING-NNN` — ids are permanent: never renumber, never reuse. When a
requirement is dropped, mark it `(withdrawn)` and keep the id.

### 4.1 Hero section with scroll-to-menu button

**Requirement LANDING-001 — Hero shows the brand headline and subtitle**

*As a* Visitor, *I want to* see the Coffee Lab name and tagline as the first
thing on the page, *so that* I immediately understand whose site I am on.

Behaviour:

1. The page loads and the hero section is the first section visible.
2. The hero displays the headline exactly as "Coffee Lab".
3. Below the headline, the hero displays the subtitle exactly as
   "Slow-roasted, small batch".
4. The hero renders on the warm cream background with dark brown text and an
   amber accent, in the calm, minimal style of the approved design.

**Acceptance criteria** — each maps one-to-one onto a test case in
`docs/landing/test-cases/hero.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is loaded | I look at the top of the page | The headline reads exactly "Coffee Lab" |
| AC-2 | The page is loaded | I look at the hero section | The subtitle reads exactly "Slow-roasted, small batch" |
| AC-3 | The page is loaded | I look at the hero section | The hero uses the cream/dark-brown/amber palette from the design spec |

**Requirement LANDING-002 — Button smooth-scrolls to the menu**

*As a* Visitor, *I want to* click a button in the hero that takes me to the
menu, *so that* I reach the drinks without scrolling manually.

Behaviour:

1. The hero shows a button labelled to indicate the menu ("Menu" or equivalent
   label), styled as an amber pill.
2. When the button is clicked, the page scrolls smoothly to the top of the
   menu section.
3. The button has a quiet hover state: the amber deepens to the hover color
   from the design spec; no dramatic animation.
4. On load, the hero content fades in softly (staggered fade-up); the fade is
   subtle and completes quickly.

**Acceptance criteria** — each maps one-to-one onto a test case in
`docs/landing/test-cases/hero.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is loaded and the menu is below the fold | I click the hero button | The page scrolls smoothly until the menu section is in view |
| AC-2 | The page is loaded | I hover over the hero button | The button shows its quiet hover state (amber deepens, no dramatic animation) |
| AC-3 | The page is loaded with reduced motion not requested | I watch the hero appear | The hero content fades in softly on load |

**Failure, boundary and permission behaviour** — the part most often skipped
and most often the source of bugs. Every row needs a defined outcome; "should
not happen" is not an outcome.

| Case | Condition | Expected behaviour |
|---|---|---|
| JavaScript disabled | The visitor's browser runs without JS | The button is a real anchor (`#menu`) and still jumps to the menu; smooth scrolling is a progressive enhancement, not a requirement for navigation to work |
| Reduced motion | `prefers-reduced-motion: reduce` is set | The fade-in is skipped or made instant, and smooth scroll is replaced by an instant jump |
| Short viewport | The menu section is already visible when the page loads | Clicking the button still navigates to the menu; no error |
| Permission | Any visitor | All visitors are identical — there are no permission differences in this module |

**Data touched** — the fields this function reads and writes, in product terms.
The physical schema is TL's job in `docs/architecture/erd.md`; this is the list
that document has to satisfy. This static module holds no user data; the only
"data" is the fixed marketing copy, which must ship verbatim.

| Field | Type | Required | Rule |
|---|---|---|---|
| Headline | static text | yes | Exactly "Coffee Lab" |
| Subtitle | static text | yes | Exactly "Slow-roasted, small batch" |
| Button label | static text | yes | Labels the menu; copy must match the design |
### 4.2 Menu section with three drinks

**Requirement LANDING-003 — Menu lists exactly three drinks with prices**

*As a* Visitor, *I want to* see the Coffee Lab menu with its prices, *so that*
I know what to order and what it costs.

Behaviour:

1. The menu section sits directly below the hero and is the scroll target of
   the hero button.
2. The section shows a heading ("Menu" or equivalent from the design) and
   exactly three drinks, each with a price:
   - Espresso — 45k
   - Latte — 55k
   - Cold Brew — 60k
3. The menu shows no other content: no additional drinks, descriptions,
   images, links, or decorative filler beyond the approved design.
4. The menu is styled consistently with the rest of the page: rounded,
   minimal, calm, using the cream/dark-brown/amber palette (card background,
   hairline border, dark brown text, amber accent for prices or highlights as
   per the design).

**Acceptance criteria** — each maps one-to-one onto a test case in
`docs/landing/test-cases/menu.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is loaded | I scroll to the menu section | I see exactly three drinks: Espresso 45k, Latte 55k, Cold Brew 60k |
| AC-2 | The page is loaded | I scroll to the menu section | No fourth drink or any other content beyond the three items appears |
| AC-3 | The page is loaded | I scroll to the menu section | The menu uses the card/hairline styling from the design spec |

**Requirement LANDING-004 — Menu is the scroll target of the hero button**

*As a* Visitor, *I want to* land on the menu when I click the hero button,
*so that* the hero and the menu are connected into one smooth journey.

Behaviour:

1. The menu section carries the anchor the hero button points to.
2. Scrolling to the menu lands at the top of the menu section, not partway
   through it.
3. The menu section is directly below the hero with no other section between
   them.

**Acceptance criteria** — each maps one-to-one onto a test case in
`docs/landing/test-cases/menu.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is loaded and the menu is below the fold | I click the hero button | I land at the top of the menu section |
| AC-2 | The page is loaded | I inspect the page structure | The hero is immediately followed by the menu with no section in between |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| JavaScript disabled | The visitor's browser runs without JS | The menu anchor still resolves via the `#menu` link; the menu is visible and correctly laid out without JS |
| Narrow viewport | The page is viewed at 320px wide | The menu remains fully readable with no horizontal page scroll and no cut-off prices |
| Copy drift | A price or name is rendered differently from the spec | This is a defect: the three items and prices must match exactly, with no currency suffix added or removed |
| Permission | Any visitor | All visitors are identical — there are no permission differences in this module |

**Data touched** — fixed menu copy only; no user data is read or written.

| Field | Type | Required | Rule |
|---|---|---|---|
| Drink name | static text | yes | Exactly one of: "Espresso", "Latte", "Cold Brew" |
| Drink price | static text | yes | Exactly "45k", "55k", "60k" respectively; no "VND" suffix |
| Item count | static | yes | Exactly three items, no more |
## 5. Screens

The design is the source of truth for appearance; this section maps functions
onto it so nothing in the design is unaccounted for and nothing specified here
is missing from the design.

| Screen | Section in the design | Functions it serves | States that must exist |
|---|---|---|---|
| Hero | Hero: animated coffee-cup SVG, "Coffee Lab" serif headline, "Slow-roasted, small batch" italic subtitle, amber pill button | LANDING-001, LANDING-002 | default (fade-in on load), reduced-motion (no animation) |
| Menu | Menu: cream card with "Menu" heading and exactly three drinks | LANDING-003, LANDING-004 | default, narrow viewport (320px) |

The page is a single scrolling document; there are no separate routes,
loading, empty, or error states beyond the initial paint, because all content
is static and ships with the page.

## 6. Non-functional requirements

Only what is real for this module. Delete rows that do not apply rather than
inventing a number nobody will check.

| Area | Requirement |
|---|---|
| Performance | The page is statically generated with no API calls; above-the-fold content (hero) is visible within 1.5s on a typical connection |
| Accessibility | All interactive elements (the hero button) are keyboard-reachable with a visible focus state; text contrast meets WCAG AA (≥ 4.5:1) against its background; `prefers-reduced-motion` disables the fade-in and smooth scroll |
| Responsive | Layout works from 320px up; no horizontal page scroll; menu items and prices stay fully visible |
| Localisation | Copy is English as approved; prices are shown exactly as "45k", "55k", "60k" per the design — no currency symbols or suffixes added |
| Privacy | No personal data is collected, stored, or transmitted; the site has no forms and no analytics |

## 7. Dependencies and assumptions

- **Depends on:** the approved design (`design/index.html` + `design/design-system.md`) for exact copy and palette; the Next.js (TypeScript) + Tailwind CSS scaffold for rendering.
- **Assumption:** the copy and prices in the plan are final and ship verbatim ("Coffee Lab", "Slow-roasted, small batch", Espresso 45k, Latte 55k, Cold Brew 60k).
- **Assumption:** "k" denotes thousand (VND); no currency suffix is displayed.
- **Assumption:** the site targets modern browsers; smooth scrolling and CSS transitions are used as progressive enhancement, with the anchor navigation working without JS.

| Open question | Proposed default | Who decides |
|---|---|---|
| None — all content, styling, and scope decisions are settled in the plan and design | — | — |

## 8. Traceability

Every plan item in this module appears exactly once, and every requirement id
traces to a test case. A gap in this table is a gap in the build.

| Plan item | Requirement ids | Test cases |
|---|---|---|
| Hero section with scroll-to-menu button | LANDING-001, LANDING-002 | `test-cases/hero.md` |
| Menu section with three drinks | LANDING-003, LANDING-004 | `test-cases/menu.md` |
