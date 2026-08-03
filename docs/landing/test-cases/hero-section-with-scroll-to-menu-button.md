# Test Cases — Hero section with scroll-to-menu button

Module: `landing`
Plan item: 1 — Hero section with scroll-to-menu button (P1, feature)
Requirements: LANDING-001, LANDING-002
Test artifact owner: Test (Linh)
Risk level: **Low** — a static, data-free hero with a single navigation action;
no writes, no roles, no external dependencies, and no user data. Depth is
therefore proportional: one case per acceptance criterion, plus the edge
behaviours the SRS explicitly defines with a concrete outcome (JS disabled,
reduced motion, short viewport, keyboard focus). Nothing speculative beyond
that.

Sources of truth: `docs/landing/SRS.md` §4.1, `docs/landing/stories/hero-section-with-scroll-to-menu-button.md`,
`design/design-system.md`.

Permission note: the SRS defines a single actor (Visitor) with no roles and no
permission differences, so there is no role that must be denied and no denial
case to write.

## Happy path

### LANDING-001 — Hero shows the brand headline and subtitle

**Scenario**: Hero is the first section and shows the brand headline
**Given**: The page is loaded
**When**: I look at the top of the page
**Then**: The first section visible is the hero, and its headline reads exactly "Coffee Lab"

Traces to: LANDING-001 AC-1 (story AC-1)

**Scenario**: Hero shows the subtitle
**Given**: The page is loaded
**When**: I look at the hero section
**Then**: The subtitle reads exactly "Slow-roasted, small batch"

Traces to: LANDING-001 AC-2 (story AC-2)

**Scenario**: Hero uses the cream / dark-brown / amber palette with rounded corners
**Given**: The page is loaded
**When**: I inspect the hero's background, text, and accent
**Then**: The hero background is warm cream `#FAF4E8`, the headline is dark
brown `#2F2116`, the subtitle is muted `#7C6350`, and the amber accent
(`#D97706`) appears exactly once as the button, which has fully rounded
(pill) corners

Traces to: LANDING-001 AC-3 (story AC-3)

**Scenario**: Hero copy ships verbatim
**Given**: The page is loaded
**When**: I inspect every text string in the hero
**Then**: The headline is exactly "Coffee Lab", the subtitle is exactly
"Slow-roasted, small batch", and the button label is exactly "See the menu" —
no added, removed, or reworded copy

Traces to: LANDING-001 AC-1/AC-2; LANDING-002 behaviour 1; story AC-10

### LANDING-002 — Button smooth-scrolls to the menu

**Scenario**: Button smooth-scrolls to the menu section
**Given**: The page is loaded, the menu section (anchor `#menu`) is below the
fold, and reduced motion is not requested
**When**: I click the hero button
**Then**: The page scrolls smoothly (the scroll position changes gradually, not
instantly) and ends with the top of the menu section in view, not partway
through it

Traces to: LANDING-002 AC-1 (story AC-4); LANDING-004 behaviour 2

**Scenario**: Button shows a quiet hover state
**Given**: The page is loaded
**When**: I hover over the hero button
**Then**: The button background deepens from `#D97706` to `#B45309` with no
dramatic animation

Traces to: LANDING-002 AC-2 (story AC-5)

**Scenario**: Hero fades in softly on load
**Given**: The page is loaded and reduced motion is not requested
**When**: I watch the hero appear on first paint
**Then**: The hero content (cup, headline, subtitle, button) fades up softly in
sequence and is fully visible once the load animation completes

Traces to: LANDING-002 AC-3 (story AC-6)

## Explicitly required edge behaviour

Included only because the SRS and story define a concrete expected outcome for
them; nothing else is added beyond the happy path.

**Scenario**: Button still navigates with JavaScript disabled
**Given**: JavaScript is disabled in the browser
**When**: I click the hero button
**Then**: The button is a real anchor (`<a href="#menu">`) and the page jumps to
the menu section (instant jump; no smooth scroll, no error)

Traces to: SRS §4.1 failure/boundary (JS disabled); story AC-8

**Scenario**: Reduced motion disables the fade-in and the smooth scroll
**Given**: `prefers-reduced-motion: reduce` is set
**When**: I load the page and click the hero button
**Then**: No fade-in plays on load, and the click causes an instant jump to the
menu rather than a smooth scroll

Traces to: SRS §4.1 failure/boundary (reduced motion); SRS §6 accessibility; story AC-7

**Scenario**: Clicking the button when the menu is already visible
**Given**: The menu section is already in view (short viewport or the page is
already scrolled)
**When**: I click the hero button
**Then**: The page still navigates to the top of the menu section and no error
occurs

Traces to: SRS §4.1 failure/boundary (short viewport)

**Scenario**: Button is keyboard-reachable with a visible focus ring
**Given**: The page is loaded
**When**: I press Tab until the hero button receives focus
**Then**: The button is focusable and shows a visible 3px amber focus ring with
3px offset

Traces to: SRS §6 accessibility (interactive elements keyboard-reachable with a
visible focus state); story AC-9

## Coverage and automation

Every case below is automated; none requires manual judgement, because each
expected result is a specific, tool-observable value (text content, computed
style, or scroll position).

| Case | Automation | Why it is observable by a tool |
|---|---|---|
| Headline, subtitle, verbatim copy, button label | Assert rendered text content of the h1, subtitle, and anchor | Static DOM text, no judgement needed |
| Palette + rounded corners | Assert computed styles: `background-color` `#FAF4E8`, `color` `#2F2116` / `#7C6350`, button `background-color` `#D97706`, `border-radius` `999px` | Design tokens are machine-checkable |
| Smooth scroll to menu | Click the button; assert `scrollY` reaches the top of `#menu`, and sample `scrollY` over time to confirm the move is gradual, not instant | Position and gradualness are observable |
| Quiet hover | Hover the button and assert computed `background-color` becomes `#B45309` | Computed style on `:hover` is observable |
| Fade-in on load | Track hero opacity from first paint until it settles; assert it starts near 0 and ends fully visible | Transition timing is observable |
| JS disabled | Load with JS disabled, click the anchor, assert an instant jump to `#menu` | Anchor href and jump are observable |
| Reduced motion | Emulate `prefers-reduced-motion: reduce`; assert no fade and an instant jump | Emulatable in the test browser |
| Short viewport | Load at a small viewport with the menu in view; click and assert no error and the menu top in view | Observable |
| Keyboard focus | Tab to the button and assert the `:focus-visible` outline (3px amber, 3px offset) | Observable |

## Dependencies

- The Menu section (plan item 2) provides the `#menu` anchor target. The
  end-to-end scroll, JS-disabled, and short-viewport cases run only once that
  section exists; until then they are blocked.
- The copy, palette, and copy-verbatim cases run against the hero in isolation
  with no other section present.
