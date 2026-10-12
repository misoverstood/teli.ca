# teli.ca: product context

Read this before building or changing any page. The visual system lives in DESIGN.md.

## Brand

- Name: teli.ca. Wordmark is "teli" in ink with ".ca" in the green accent.
- Use teli.ca everywhere: page titles, footer, copyright line, Open Graph site name
- Hero, two lines: "Tech, sorted." large in black, then "The IT person you don't have." smaller in gray
- The owner's full name does not appear anywhere on the site
- Legal or registered business name: not decided yet

## What it is

An independent, one-person IT consulting and hands-on technical services practice based in Toronto. Senior, practical help without hiring an IT department.

## Who it's for

- Small businesses, roughly 5 to 50 staff
- Nonprofits and associations
- Solo professionals and home offices
- Individuals and households

Copy speaks to "you" and never assumes the reader has an office.

## The one goal

Every page leads to the contact form. No pricing is published. No phone number and no street address on the site.

## Services (provisional, full list to be revisited)

Business:
- Domains and DNS
- Microsoft 365 and Google Workspace
- Azure
- Identity, devices and security
- Migrations: domain, platform and tenant
- Websites and hosting
- Automation and integrations
- AI tools
- Small office and home office setup
- Technical consultations

Personal and home:
- Home network setup
- Personal cybersecurity
- Online clean-up and scrubbing

## Voice and copy rules

- Plain, direct and warm. Say what the reader can do and what improves for them.
- No em dashes.
- No hype words: supercharge, world-class, enterprise-grade, seamless, cutting-edge.
- No "Not X. Y." slogans, no calling things "theater".
- Sentence case. One label per block, never repeated.

## SEO requirements

- Unique title and meta description on every page, titles end with "| teli.ca"
- One primary search target per service page, Toronto-qualified where it fits
- One h1 per page, no skipped heading levels
- sitemap.xml, robots.txt, canonical URLs, Open Graph tags
- Structured data for a local professional service with a service area and no street address
- Short FAQ section on each service page
- Google Business Profile and Bing Places as a service-area business, address hidden
- Measurement: Google Search Console, Bing Webmaster Tools, Cloudflare Web Analytics

## Privacy and security

- Contact form asks only for name, email, what they need help with, and a short message. Never passwords, account details or ID.
- Spam protection on the form with Cloudflare Turnstile
- No third-party trackers, no cookies, no consent banner needed
- A privacy policy page is required before launch
- This repo is public: never commit secrets, keys or client information

## Open decisions

- Legal or registered business name
- Contact form mail sender: Resend or a hosted form endpoint
- Final service list and site map

## Stack

Astro 7 and Tailwind 4 on the main branch, deploying to Cloudflare Workers. The gh-pages branch serves the old site until cutover.
