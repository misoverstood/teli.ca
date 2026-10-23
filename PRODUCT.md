# teli.ca: product context

Read this before building or changing any page. The visual system lives in DESIGN.md.

## Brand

- Name: teli.ca. Wordmark is "teli" in ink with ".ca" in the green accent.
- In body text and headings, write the name with the Brand component (src/components/Brand.astro) so ".ca" is green. Page titles, meta descriptions and structured data use plain text.
- Hero, two lines: "Tech, sorted." large in black, then "The IT person you don't have." smaller in gray
- The owner's name and photo do not appear anywhere on the site. The About page describes the day job without naming the employer.
- Legal or registered business name: not decided yet

## What it is

An independent, one-person IT practice based in Toronto with over 25 years of experience, offering IT consulting and hands-on support.

- Process, stated on the site: every change is agreed with the client first and documented when it's done.
- Work is mostly one-off: a project, a fix or a setup. Ongoing help is available on request, with no published plan.
- Remote, or on-site anywhere in the GTA.
- Scheduled around a full-time role, often evenings and weekends. The site says so plainly.

## Who it's for

- Broad line, used consistently: "For businesses, organizations and households across the GTA."
- "Who I work with" line, on About and /services: small and home-based businesses, nonprofits, places of worship and community organizations, professionals working from home, and individuals and families.
- Clients are never named or linked on the site without their permission.
- Copy speaks to "you" and never assumes the reader has an office.

## The one goal

Every page leads to the single contact form at /contact. No phone number, no street address and no email address on the site.

## Pricing

Pricing is never mentioned on the site: no prices, no rates, no description of how billing works.

## Services

Each service has its own page aimed at one primary search. Big platforms are named as examples, never as limits. Service content lives in src/data/services.ts. Consultations are not a separate page: they are how people start, and are described on /about and /contact.

For businesses and organizations

| Page | URL | Primary search target |
| --- | --- | --- |
| Email and collaboration | /services/email-and-collaboration/ | Microsoft 365 setup Toronto |
| Domains and DNS | /services/domains-and-dns/ | DMARC setup small business |
| Security and devices | /services/security-and-devices/ | small business cybersecurity Toronto |
| Migrations | /services/migrations/ | email migration Toronto |
| Websites and hosting | /services/websites-and-hosting/ | website hosting help small business |
| SEO setup | /services/seo-setup/ | SEO setup small business Toronto |
| Automation and AI | /services/automation-and-ai/ | small business automation |
| Workplace IT | /services/workplace-it/ | small office IT setup Toronto |

For homes and families

| Page | URL | Primary search target |
| --- | --- | --- |
| Home network | /services/home-network/ | home Wi-Fi setup Toronto |
| Personal security | /services/personal-security/ | personal cybersecurity help |
| Device care | /services/device-care/ | computer virus removal Toronto |
| Online privacy | /services/online-privacy/ | remove personal information online Canada |

Parked for later: an "Ongoing IT support" page for a monthly arrangement.

## Testimonials

- Live in src/data/testimonials.ts. The home page section stays hidden while the list is empty.
- Only genuine quotes, used with the client's permission. Light typo fixes only, never change the meaning.
- Attribution describes the client without identifying them unless they agreed, for example "Owner, accounting practice, North York".

## Site map

- / (home: hero, What I do in four areas, statement, How it works, testimonials, CTA)
- /services (full lists, business and home)
- /services/[slug]/ (twelve service pages, one template)
- /about (background, what to expect, how I work)
- /contact (form and How it works), /contact/thanks/ and /contact/error/ (not indexed)
- /privacy (privacy policy)

## Voice and copy rules

- Plain, direct, confident and warm. Say what the reader ends up with.
- First person ("I"), not "teli.ca does".
- Canadian spelling. No em dashes.
- No casual filler that reads as amateurish: "kept tidy", "actually", "sort out", jokey asides.
- No hype words: supercharge, world-class, enterprise-grade, seamless, cutting-edge.
- No "Not X. Y." slogans, no calling things "theater".
- No scale signals that don't fit a one-person practice: logo walls, "trusted by 1000+", rankings.
- Not every enquiry is a problem: copy covers new projects and questions too.
- Vendor-neutral: name big platforms as examples, never as the only option.
- Sentence case. One label per block, never repeated.
- No commitments on pricing, response times or availability.

## SEO requirements

- Unique title and meta description on every page, titles end with "| teli.ca"
- One primary search target per service page, as listed above
- One h1 per page, no skipped heading levels
- sitemap.xml (generated by @astrojs/sitemap), robots.txt, canonical URLs, Open Graph tags and a sharing image
- Structured data built in src/data/schema.ts: the business on the home page; service, FAQ and breadcrumbs on service pages; service area Greater Toronto Area
- No city-by-city landing pages unless each has genuinely different content
- Google Business Profile and Bing Places as a service-area business, address hidden
- Measurement: Google Search Console, Bing Webmaster Tools, Cloudflare Web Analytics
- After launch: consider a small blog or notes section of real projects (no employer material, clients anonymized with permission)

## AI assistants

- Decision: all crawlers are allowed, including AI training crawlers. This is a sales site; being known to AI assistants is the goal.
- Pages are plain static HTML, readable without JavaScript.
- /llms.txt is generated from src/data/services.ts by src/pages/llms.txt.ts.

## Contact form

- One form for everyone: name, email, message. Nothing else.
- Spam protection: a hidden honeypot field, plus Cloudflare Turnstile (hostname-checked by the Worker)
- The form posts to a Cloudflare Worker on a workers.dev address (worker/ folder), which sends through Resend from notify.teli.ca, with the visitor's address as Reply-To.
- The destination mailbox and the Resend API key are Worker secrets. Never commit them.
- The sending address is on the destination mailbox's Safe senders list.

## DNS and email rules

- DNS for teli.ca must stay at GoDaddy. The domain's email depends on it.
- Never change or remove: MX, the root SPF TXT record, the _outlook TXT record, the autodiscover CNAME, the _domainconnect CNAME.
- Resend's records live on the notify subdomain only.
- DMARC is at p=none (monitor only). Tighten only after reports confirm all legitimate mail aligns.
- The four A records on the root point to GitHub Pages. www should be a CNAME to misoverstood.github.io.

## Privacy and security

- The form never asks for passwords, account details or ID, and says so.
- No cookies, no advertising trackers, no consent banner needed. Cloudflare Web Analytics is cookie-free.
- The privacy policy at /privacy names Cloudflare, Resend, Microsoft and GitHub. Update it whenever a processor or analytics changes.
- Content Security Policy in every production page (BaseLayout.astro).
- This repo is public: never commit secrets, private email addresses or client information. GitHub push protection is on.

## Open decisions

- Legal or registered business name
- Whether to add the "Ongoing IT support" page later

## Stack

- Astro 7 and Tailwind 4 on the main branch
- Hosting: GitHub Pages, built by GitHub Actions. The gh-pages branch serves the old site until cutover.
- Contact form: Cloudflare Worker on workers.dev, sending through Resend
