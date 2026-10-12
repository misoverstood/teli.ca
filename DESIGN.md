# teli: design system

Every page is built against this file. Read PRODUCT.md first for audience, voice and goals.

Rule: components use tokens only. A new color, font, size, radius or spacing value gets added here before it is used anywhere. No raw hex values or one-off sizes in components.

## Direction

Black, white and gray. Very large display type. Content-forward, plain and confident. Personality comes from type and copy, not decoration. Inspired by the layout of ilands.ai, minus its hero metrics, dot labels, numbered card grids and carousel.

## Color (pure monochrome, no accent)

| Token | Value | Use |
| --- | --- | --- |
| ink | #0a0a0a | Body text on light, black bands, primary buttons |
| paper | #ffffff | Page background, text on black |
| mist | #f3f3f3 | Light gray bands and panels |
| line | #e2e2e2 | 1px dividers and borders |
| muted | #595959 | Secondary text on paper or mist (7.0:1 on paper, 6.3:1 on mist) |
| hero-gray | #737373 | Second hero line and other large text on paper only (4.7:1) |
| muted-on-ink | #a3a3a3 | Secondary text on black bands (7.8:1) |

- hero-gray is for large text on paper only. It drops below 4.5:1 on mist, so never use it there for body text.
- No gradients, glows, halos, tints or transparency effects.
- Light theme only. Black bands provide the contrast.

## Typography

- Family: Schibsted Grotesk (variable, self-hosted via Fontsource, no Google Fonts requests)
- Fallback: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif
- Weights in use: 400, 600, 700, 800. Nothing else.
- The family is swappable: it is defined once as the font token. After a swap, retune display sizes and tracking.

| Token | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- |
| display | clamp(3rem, 8vw + 1rem, 7.5rem) | 800 | 0.95 | -0.03em |
| h1 | clamp(2.5rem, 5vw + 1rem, 5rem) | 800 | 1.0 | -0.025em |
| statement | clamp(1.75rem, 3vw + 1rem, 3.5rem) | 700 | 1.1 | -0.02em |
| h2 | clamp(2rem, 3vw + 1rem, 3.25rem) | 700 | 1.05 | -0.02em |
| h3 | 1.5rem | 700 | 1.2 | -0.01em |
| lead | 1.25rem | 400 | 1.5 | 0 |
| body | 1.0625rem | 400 | 1.6 | 0 |
| small | 0.875rem | 400 | 1.5 | 0 |

- Display tracking never tighter than -0.03em. Check every hero on a 375px wide phone.
- Body text never below 16px. small is for footer and meta text only, never below 14px.
- Prose max width 68ch.
- Sentence case everywhere. No all-caps body text, no italic display type.

## Spacing

- Scale (rem): 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6, 8, 10
- Section vertical padding: clamp(4rem, 10vw, 10rem)
- Container: max width 75rem, side padding clamp(1.25rem, 5vw, 3rem)
- A heading sits closer to its own content than to the section above it.
- Related items close together, separate groups far apart. Never equal spacing everywhere.

## Shape

- Radii: 0 for bands, 0.5rem for inputs, 0.75rem for panels, full (pill) for buttons
- Borders: 1px line only
- Shadows: none. A surface is defined by its background or its 1px border, never both plus a shadow.

## Components

Header
- "teli" wordmark left, nav right: Services, About, Contact, plus a black "Get in touch" button
- Not sticky. Collapses to a simple menu below 768px.

Buttons
- Primary: ink background, paper text. Secondary: paper background, ink text, 1px ink border.
- On black bands the two invert.
- Minimum height 44px, weight 600, pill radius.

Links
- Underlined in body text, underline offset 0.2em, 1px; 2px on hover.
- Color alone never marks a link.

Focus
- :focus-visible gets a 2px solid outline with 2px offset: ink on light, paper on black bands.

Service rows
- Replaces card grids. Each row: service name on the left, one-line description on the right, a right arrow after the name, 1px line between rows. The whole row is the link.
- Two columns from 768px up, stacked below.

Statement band
- Ink background, one plain positioning paragraph in the statement size, max about 24ch per line.

Two-path split
- Two panels side by side from 768px up, stacked below: one mist, one ink.
- Left: small business and nonprofits. Right: home, home office and personal. Each has a heading, one sentence and a link to /contact.

CTA band
- Ink background, one h2, one primary button (inverted).

Footer
- Minimal: wordmark, nav links, Privacy, copyright line. small text.

Forms
- Labels above inputs, 1px line border, 0.5rem radius, 48px height.
- Errors in ink with a text message and icon, never color alone.

Images and icons
- Real photos only, no stock, no illustrations. None are required.
- Icons, if any: simple inline SVG line icons at 20px beside text. No icon tiles, no icons above headings.

## Page rhythm

Home: hero (paper), service rows (paper), statement (ink), personal and home services (mist), two-path split, CTA (ink), footer.

Service pages: h1 and lead (paper), what's included, how it works, FAQ (mist), CTA (ink), footer.

## Motion

- Hover and focus transitions only: 150ms ease-out on color, background and opacity.
- No entrance animations. All content is visible without JavaScript.
- Respect prefers-reduced-motion.

## Responsive

- Tailwind default breakpoints. Test at 375px, 768px and 1280px.
- No horizontal scrolling at any width. Text never touches the screen edge.

## Never

Visual: purple or blue gradients, neon or glow effects, gradient text, glassmorphism, halos and spotlights, reflexive cream or beige, colored stripe borders on cards, hairline border plus wide shadow, oversized card radii, decorative grid backgrounds, nested cards.

Layout and type: identical icon-card grids, icon tiles above headings, pill badges or small labels above headlines, numbered labels with no real sequence, big-number hero metrics, carousels, flat heading hierarchy, Inter or Geist.

Motion: pulsing dots, blinking cursors, marquees, bounce or elastic easing, hover zoom on images.

## Quality floor (check before any page ships)

- WCAG AA contrast: 4.5:1 body, 3:1 large text
- One h1 per page, no skipped heading levels
- Body 16px or larger, line height about 1.5 to 1.6, 65 to 75 characters per line
- No justified text, no gray text on dark gray, no placeholder images
- Works with keyboard only, visible focus everywhere
- Pre-launch pass per page: critique (hierarchy, clarity), audit (accessibility, performance), polish
