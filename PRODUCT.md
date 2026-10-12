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

## Services

Each service has its own page aimed at one primary search. Consultations are not a separate page: they are how people start, and are offered on /about and /contact.

Business

| Page | URL | Covers | Primary search target |
| --- | --- | --- | --- |
| Email and workspace | /services/email-and-workspace | Microsoft 365 or Google Workspace setup, licensing, shared mailboxes, clean-up | Microsoft 365 setup Toronto |
| Domains and DNS | /services/domains-and-dns | Registration, transfers, DNS clean-up, SPF, DKIM and DMARC so email lands | DMARC setup small business |
| Security and devices | /services/security-and-devices | MFA, managed laptops and phones, staff onboarding and offboarding, password manager rollout. Covers Azure and Entra identity work. | small business cybersecurity Toronto |
| Migrations | /services/migrations | Moving email, files, domains, tenants and websites between platforms | email migration Toronto |
| Websites and hosting | /services/websites-and-hosting | Simple site builds, hosting moves, SSL, getting control of your domain back | website hosting help small business |
| Automation and AI | /services/automation-and-ai | Connecting apps and automating repetitive work, setting up Copilot and other AI tools safely | small business automation |
| Office setup | /services/office-setup | Network, Wi-Fi, backups, printers, buying the right hardware for a small or home office | small office IT setup Toronto |

Personal and home

| Page | URL | Covers | Primary search target |
| --- | --- | --- | --- |
| Home network | /services/home-network | Wi-Fi that reaches every room, router hardening, parental controls | home Wi-Fi setup Toronto |
| Personal security | /services/personal-security | Passwords, 2FA, device hardening, help after a hack or scam | personal cybersecurity help |
| Online clean-up | /services/online-cleanup | Data broker removal, old accounts, privacy settings, search results | remove personal information online Canada |

Parked for later: an "Ongoing IT support" page for a monthly arrangement. Not offered on the site for now.

## Site map

- / (home)
- /services (index of all services, business and personal groups)
- /services/email-and-workspace
- /services/domains-and-dns
- /services/security-and-devices
- /services/migrations
- /services/websites-and-hosting
- /services/automation-and-ai
- /services/office-setup
- /services/home-network
- /services/personal-security
- /services/online-cleanup
- /about (how engagements work, including consultations)
- /contact (form)
- /privacy (privacy policy)

## Voice and copy rules

- Plain, direct and warm. Say what the reader can do and what improves for them.
- No em dashes.
- No hype words: supercharge, world-class, enterprise-grade, seamless, cutting-edge.
- No "Not X. Y." slogans, no calling things "theater".
- Sentence case. One label per block, never repeated.

## SEO requirements

- Unique title and meta description on every page, titles end with "| teli.ca"
- One primary search target per service page, as listed above, Toronto-qualified where it fits
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
- Whether to add the "Ongoing IT support" page later

## Stack

Astro 7 and Tailwind 4 on the main branch, deploying to Cloudflare Workers. The gh-pages branch serves the old site until cutover.
