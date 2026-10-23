# teli.ca: design system

Every page is built against this file. Read PRODUCT.md first for audience, voice and goals.

Rule: components use tokens only. A new color, font, size, radius or spacing value gets added here before it is used anywhere. No raw hex values or one-off sizes in components.

## Direction

Black, white and gray with one green accent used sparingly. Very large display type. Content-forward, plain and confident. Personality comes from type and copy, not decoration. Inspired by the layout of ilands.ai, minus its hero metrics, dot labels, numbered card grids and carousel.

## Color

| Token | Value | Use |
| --- | --- | --- |
| ink | #0a0a0a | Body text on light, black bands, primary buttons |
| paper | #ffffff | Page background, text on black |
| mist | #f3f3f3 | Light gray bands and panels |
| line | #e2e2e2 | 1px dividers and borders |
| muted | #595959 | Secondary text on paper or mist (7.0:1 on paper, 6.3:1 on mist) |
| hero-gray | #737373 | Second hero line and other large text on paper only (4.7:1) |
| muted-on-ink | #a3a3a3 | Secondary text on black bands (7.8:1) |
| accent | #16a34a | Bright green accent. See the accent rules below (3.3:1 on paper, 3.0:1 on mist, 6.0:1 on ink) |

Accent rules
- Allowed: the ".ca" in the wordmark and in the Brand component (logotypes are exempt from text contrast minimums), keyboard focus outlines, link hover underlines, check marks in "What I can help with" lists, text selection background (with ink text), arrows on hover.
- Never: body or small text in accent, buttons, headlines, backgrounds, large areas, decoration.
- On mist panels, focus outlines use ink instead of accent.
- Green means "done, working, sorted". Use it only where that meaning fits.

General
- hero-gray is for large text on paper only.
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
| display-sub | clamp(2rem, 4.5vw + 0.5rem, 4.25rem) | 800 | 1.0 | -0.025em |
| h1 | clamp(2.5rem, 5vw + 1rem, 5rem) | 800 | 1.0 | -0.025em |
| statement | clamp(1.75rem, 3vw + 1rem, 3.5rem) | 700 | 1.1 | -0.02em |
| h2 | clamp(2rem, 3vw + 1rem, 3.25rem) | 700 | 1.05 | -0.02em |
| h3 | 1.5rem | 700 | 1.2 | -0.01em |
| wordmark | clamp(1.875rem, 1.5rem + 1vw, 2.25rem) | 800 | 1.0 | -0.02em |
| lead | 1.25rem | 400 | 1.5 | 0 |
| body | 1.0625rem | 400 | 1.6 | 0 |
| small | 0.875rem | 400 | 1.5 | 0 |

- Display tracking never tighter than -0.03em. Check every hero on a 375px wide phone.
- Headings use text-wrap: balance. Paragraphs use text-wrap: pretty.
- Body text never below 16px. small is for footer and meta text only, never below 14px.
- Prose max width 68ch.
- Sentence case everywhere. No all-caps body text, no italic display type.

## Spacing

- Scale (rem): 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6, 8, 10
- Section vertical padding: clamp(4rem, 8vw, 7rem), via the section-y utility. Two adjacent sections stack their padding, so keep the maximum modest.
- Container: max width 75rem, side padding clamp(1.25rem, 5vw, 3rem), via the container-site utility
- A heading sits closer to its own content than to the section above it.
- Related items close together, separate groups far apart. Never equal spacing everywhere.

## Shape

- Radii: 0 for bands, 0.5rem for inputs, 0.75rem for panels, full (pill) for buttons
- Borders: 1px line only
- Shadows: none. A surface is defined by its background or its 1px border, never both plus a shadow.

## Components

Wordmark and Brand
- Header and footer wordmark: "teli" in ink (paper on black bands) followed by ".ca" in accent, weight 800. Wordmark size in the header (30px on phones up to 36px), lead size in the footer. Links home.
- Brand component (src/components/Brand.astro): the same name inside body text and headings, semi-bold, ".ca" in accent.

Header
- Wordmark left. Right side from 768px up: Services, About, and a black "Get in touch" button.
- Below 768px: wordmark, a "Menu" disclosure (HTML details element, no JavaScript) holding Services and About, and the "Get in touch" button.
- Not sticky.

Hero
- One h1 with two lines: line one at display size in ink, line two at display-sub size in hero-gray.
- Then a lead paragraph in muted, then primary and secondary buttons.

Buttons
- Primary: ink background, paper text. Secondary: paper background, ink text, 1px ink border.
- On black bands the two invert.
- Minimum height 44px, weight 600, pill radius.
- Every contact button goes to /contact/ with no parameters. There is one form for everyone.

Links
- Internal links always end in a trailing slash.
- Underlined in body text, underline offset 0.2em, 1px. On hover: 2px and accent colored.
- Color alone never marks a link.

Focus
- :focus-visible gets a 2px solid outline with 2px offset: accent on paper and on black bands, ink inside mist panels (on-mist class).

Rows (service rows and the home page area rows)
- Replace card grids. Each row: name on the left, one-line description on the right, a right arrow after the name, 1px line between rows. The whole row is the link.
- Two columns from 768px up, stacked below. Service data comes from src/data/services.ts.

Help lists
- Service pages list "What I can help with" with a small accent check mark beside each item.

How it works
- The four steps (src/components/HowItWorks.astro) appear on the home page and the contact page only, on mist. Service pages and About don't repeat them.

Statement band
- Ink background, one plain positioning line in the statement size, max about 24ch per line.

CTA band
- Ink background, one h2, one primary button (inverted). The single closing ask on a page. Never stack it directly after another black block.

Testimonials
- Home page only, between How it works and the CTA band. Hidden while the list is empty.

Footer
- Minimal: wordmark, nav links, Privacy, copyright line. small text.

Forms
- One contact form for everyone, business and personal alike.
- Labels above inputs, 1px line border, 0.5rem radius, 48px height.
- Errors in ink with a text message and icon, never color alone.

Images and icons
- Real photos only, no stock, no illustrations. None are required.
- Icons, if any: simple inline SVG line icons at 20px beside text. No icon tiles, no icons above headings.

## Page rhythm

Home: hero (paper), What I do area rows (paper), statement (ink), How it works (mist), testimonials (paper, when present), CTA (ink), footer.

Services: h1, lead and "who I work with" (paper), business rows (paper), home rows (mist), CTA (ink), footer.

Service pages: h1 and lead (paper), What I can help with plus one line pointing to contact (paper), FAQ (mist), CTA (ink), footer.

About: h1 and lead (paper), background and tools (paper), what you can expect (mist), how I work (paper), CTA (ink), footer.

Contact: h1 and lead (paper), form and side notes (paper), How it works (mist), footer.

## Motion

- Hover and focus transitions only: 150ms ease-out on color, background and opacity.
- No entrance animations. All content is visible without JavaScript, except the Turnstile check on the contact form.
- Respect prefers-reduced-motion.

## Responsive

- Tailwind default breakpoints. Test at 375px, 768px and 1280px.
- No horizontal scrolling at any width. Text never touches the screen edge.

## Never

Visual: purple or blue gradients, neon or glow effects, gradient text, glassmorphism, halos and spotlights, reflexive cream or beige, colored stripe borders on cards, hairline border plus wide shadow, oversized card radii, decorative grid backgrounds, nested cards, accent color on large areas.

Layout and type: identical icon-card grids, icon tiles above headings, pill badges or small labels above headlines, numbered labels with no real sequence, big-number hero metrics, carousels, flat heading hierarchy, Inter or Geist.

Motion: pulsing dots, blinking cursors, marquees, bounce or elastic easing, hover zoom on images.

## Quality floor (check before any page ships)

- WCAG AA contrast: 4.5:1 body, 3:1 large text and UI marks
- One h1 per page, no skipped heading levels
- Body 16px or larger, line height about 1.5 to 1.6, 65 to 75 characters per line
- No justified text, no gray text on dark gray, no placeholder images
- Works with keyboard only, visible focus everywhere
- Pre-launch pass per page: critique (hierarchy, clarity), audit (accessibility, performance), polish
