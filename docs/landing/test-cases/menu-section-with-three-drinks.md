# Test Cases — Menu Section with Three Drinks

Module: `landing`
Function: Menu section with three drinks
Requirements traced: LANDING-003, LANDING-004 (`docs/landing/SRS.md`)
Design reference: `design/design-system.md` (menu card, drink row, section heading)

**Risk level: Low.** The menu is static, read-only content on a brochure page:
no user input, no data written, no accounts. Failure modes are limited to copy
drift (wrong names/prices), missing or extra content, and styling/layout
regressions, so coverage is proportional — one case per acceptance criterion,
plus the boundary and permission rows the SRS explicitly defines.

## Happy path — acceptance criteria

**Scenario**: Menu shows exactly three drinks with their exact prices
**Given**: The page is loaded
**When**: I scroll to the menu section
**Then**: I see exactly three drinks, each with its price: Espresso 45k, Latte 55k, Cold Brew 60k

Trace: LANDING-003 AC-1

**Scenario**: Menu shows no content beyond the three items
**Given**: The page is loaded
**When**: I scroll to the menu section
**Then**: No fourth drink and no other content (no additional drinks, descriptions, images, links, or decorative filler) appears beyond the three items

Trace: LANDING-003 AC-2

**Scenario**: Menu uses the approved card and hairline styling
**Given**: The page is loaded
**When**: I scroll to the menu section
**Then**: The menu renders as a rounded, minimal card per the design spec — card surface `#FFFDF7`, 1px hairline border `#EDE2CE`, 24px corner radius, dark brown text `#2F2116`, and one amber accent (`#D97706` underline, prices in the amber hover tone `#B45309`)

Trace: LANDING-003 AC-3

**Scenario**: Hero button lands at the top of the menu
**Given**: The page is loaded and the menu is below the fold
**When**: I click the hero button
**Then**: I land at the top of the menu section, not partway through it

Trace: LANDING-004 AC-1

**Scenario**: Hero is immediately followed by the menu
**Given**: The page is loaded
**When**: I inspect the page structure
**Then**: The hero section is immediately followed by the menu section, with no other section between them

Trace: LANDING-004 AC-2

## Boundary, failure and permission behavior explicitly required by the SRS

**Scenario**: Menu resolves and renders without JavaScript
**Given**: The visitor's browser runs without JavaScript
**When**: The page loads and the menu anchor is followed
**Then**: The `#menu` anchor still resolves, and the menu is visible and correctly laid out with all three drinks and prices

Trace: LANDING-003/LANDING-004 failure table — JavaScript disabled

**Scenario**: Menu stays fully readable at 320px wide
**Given**: The page is viewed at 320px wide
**When**: I look at the menu section
**Then**: The menu remains fully readable with no horizontal page scroll and no cut-off prices

Trace: LANDING-003/LANDING-004 failure table — narrow viewport

**Scenario**: Menu copy matches the spec exactly
**Given**: The page is loaded
**When**: I compare the menu copy against the spec
**Then**: The three items and prices match exactly — Espresso 45k, Latte 55k, Cold Brew 60k — with no currency symbol or suffix added or removed

Trace: LANDING-003/LANDING-004 failure table — copy drift

**Scenario**: All visitors see the identical menu
**Given**: Any visitor opens the page
**When**: They view the menu section
**Then**: The menu shows the same three items and prices for everyone — there are no permission differences in this module

Trace: LANDING-003/LANDING-004 failure table — permission

## Traceability

| Requirement | Acceptance / behavior | Test case |
|---|---|---|
| LANDING-003 | Exactly three drinks with exact prices | Menu shows exactly three drinks with their exact prices |
| LANDING-003 | No other content beyond the three items | Menu shows no content beyond the three items |
| LANDING-003 | Card/hairline styling from the design spec | Menu uses the approved card and hairline styling |
| LANDING-004 | Scroll target lands at top of menu | Hero button lands at the top of the menu |
| LANDING-004 | Menu directly below the hero | Hero is immediately followed by the menu |
| LANDING-003/004 | JS disabled behavior | Menu resolves and renders without JavaScript |
| LANDING-003/004 | 320px viewport behavior | Menu stays fully readable at 320px wide |
| LANDING-003/004 | Copy drift is a defect | Menu copy matches the spec exactly |
| LANDING-003/004 | Permission — all visitors identical | All visitors see the identical menu |
