// Single source of truth for services. PRODUCT.md holds the reasoning behind this list.
// The home page, the /services index and every service page read from here.

export type ServiceGroup = "business" | "personal";

export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  summary: string;
  group: ServiceGroup;
  searchTarget: string;
  title: string;
  description: string;
  lead: string;
  included: string[];
  faqs: Faq[];
}

export interface Step {
  title: string;
  body: string;
}

export const howItWorks: Step[] = [
  {
    title: "Tell me what's going on",
    body: "Use the contact form to describe what you need in your own words. No technical detail required.",
  },
  {
    title: "We talk it through",
    body: "A short conversation to understand your setup and agree on what will be done.",
  },
  {
    title: "I sort it",
    body: "The work gets done, and you're kept in the loop on anything that affects you.",
  },
  {
    title: "You get it in writing",
    body: "Plain-language notes on what changed and where everything lives, so you're never stuck.",
  },
];

export const services: Service[] = [
  {
    slug: "email-and-workspace",
    name: "Email and workspace",
    summary: "Microsoft 365 or Google Workspace, set up properly and kept tidy.",
    group: "business",
    searchTarget: "Microsoft 365 setup Toronto",
    title: "Microsoft 365 and Google Workspace setup in Toronto",
    description: "Set up, clean up or untangle Microsoft 365 or Google Workspace for your small business or nonprofit: accounts, licences, shared mailboxes and security.",
    lead: "Whether you're starting fresh or inheriting a setup nobody understands, I'll get your email, calendars and files working the way they should, with the right people having the right access.",
    included: [
      "New Microsoft 365 or Google Workspace setup, start to finish",
      "A licence review so you're not paying for accounts nobody uses",
      "Shared mailboxes, aliases and distribution lists",
      "Multi-factor authentication on every account",
      "Clean-up of old users, forwarding rules and permissions",
    ],
    faqs: [
      {
        q: "Microsoft 365 or Google Workspace: which should I pick?",
        a: "It depends on how your team works and what you already use. If you live in Word and Excel, Microsoft 365 usually fits better. If your team works mostly in a browser, Google Workspace is often simpler. I'll walk you through the trade-offs before you commit.",
      },
      {
        q: "Can you fix a setup someone else did?",
        a: "Yes. A lot of this work is untangling an existing setup: old accounts, odd forwarding rules, missing admin access. I document what's there before changing anything.",
      },
      {
        q: "Will my email go down during the work?",
        a: "For most changes, no. Where a short interruption can't be avoided, it's planned ahead and done at a time that suits you.",
      },
    ],
  },
  {
    slug: "domains-and-dns",
    name: "Domains and DNS",
    summary: "Your domain under your control, and email that actually lands.",
    group: "business",
    searchTarget: "DMARC setup small business",
    title: "Domain and DNS management, SPF, DKIM and DMARC setup",
    description: "Get control of your domain and DNS, and set up SPF, DKIM and DMARC so your email reaches inboxes instead of spam folders.",
    lead: "Your domain is the foundation of your email and website. I'll make sure you own it, that its DNS records are correct, and that your email passes the checks inbox providers now expect.",
    included: [
      "Domain registration, renewals and transfers into your own name",
      "A DNS review and clean-up of old or broken records",
      "SPF, DKIM and DMARC set up and tested",
      "Moving DNS to a reliable provider if needed",
      "A plain-language record of what every setting does",
    ],
    faqs: [
      {
        q: "What are SPF, DKIM and DMARC?",
        a: "They're DNS records that prove email from your domain really comes from you. Without them, your messages are more likely to land in spam, and it's easier for someone to send fake email that looks like yours.",
      },
      {
        q: "My web designer registered our domain. Is that a problem?",
        a: "It can be. If the domain sits in someone else's account, you depend on them for renewals and changes. I can help you move it into an account you control.",
      },
      {
        q: "Will changing DNS break my website or email?",
        a: "Not if it's done carefully. I record the existing settings first and make changes in a planned order, so there's always a way back.",
      },
    ],
  },
  {
    slug: "security-and-devices",
    name: "Security and devices",
    summary: "Sign-ins, laptops and phones locked down, and staff changes handled.",
    group: "business",
    searchTarget: "small business cybersecurity Toronto",
    title: "Small business cybersecurity and device management in Toronto",
    description: "Practical security for small businesses and nonprofits in Toronto: multi-factor authentication, managed laptops and phones, password managers, and clean onboarding and offboarding.",
    lead: "Most security problems in small organizations come down to weak sign-ins, unmanaged devices and accounts left open after someone leaves. I'll fix those first, in a way your team can live with.",
    included: [
      "Multi-factor authentication across email and key apps",
      "Laptops and phones enrolled and managed, with remote wipe if one is lost",
      "A password manager rolled out to the team",
      "Onboarding and offboarding checklists so access starts and ends cleanly",
      "Identity setup in Microsoft Entra or Google, including Azure where it applies",
    ],
    faqs: [
      {
        q: "We're only a few people. Do we really need this?",
        a: "Small teams are often targeted because they're less likely to have protections in place. The basics here take little time to set up and block the most common attacks.",
      },
      {
        q: "What happens when someone leaves?",
        a: "Their access is removed on their last day, their files and email go to the right person, and company devices are wiped or reassigned. A written checklist makes it the same every time.",
      },
      {
        q: "Will this slow my team down?",
        a: "A little at first, while everyone sets up multi-factor sign-in. After that, a password manager usually makes signing in faster, not slower.",
      },
    ],
  },
  {
    slug: "migrations",
    name: "Migrations",
    summary: "Move email, files and websites to a new platform without losing anything.",
    group: "business",
    searchTarget: "email migration Toronto",
    title: "Email, file and platform migrations in Toronto",
    description: "Move email, files, domains or websites between platforms, including Google Workspace to Microsoft 365 and back, without losing data.",
    lead: "Switching platforms is mostly about planning. I'll map what you have, move it in the right order and check everything arrived before the old system is switched off.",
    included: [
      "Email migrations, including Google Workspace to Microsoft 365 and back",
      "Files and shared drives moved with their permissions",
      "Tenant to tenant moves after a merger or rebrand",
      "Domain and website moves between providers",
      "A cut-over plan with a clear rollback point",
    ],
    faqs: [
      {
        q: "How long does a migration take?",
        a: "It depends on how much data you have and how many people are moving. Small moves can be quick and larger ones are done in stages. You'll get a timeline before anything starts.",
      },
      {
        q: "Will we lose any email?",
        a: "The goal is nothing lost. Mail is copied rather than moved, and the old system stays available until you've confirmed everything is there.",
      },
      {
        q: "Can we keep working during the move?",
        a: "Yes. Most migrations run in the background, with one planned switch-over at a time that suits you.",
      },
    ],
  },
  {
    slug: "websites-and-hosting",
    name: "Websites and hosting",
    summary: "A simple site, reliable hosting and a domain you actually own.",
    group: "business",
    searchTarget: "website hosting help small business",
    title: "Website and hosting help for small businesses",
    description: "Simple websites, hosting moves, SSL certificates and getting control of your domain back, for small businesses and nonprofits.",
    lead: "Your website should load fast, stay secure and be under your control. I build simple sites and sort out the hosting, certificates and accounts behind them.",
    included: [
      "Simple, fast websites for small businesses and nonprofits",
      "Moving your site to reliable, low-maintenance hosting",
      "SSL certificates so your site shows as secure",
      "Recovering access to hosting and domain accounts",
      "A record of where every account lives and when each renewal is due",
    ],
    faqs: [
      {
        q: "Do you build large or complex websites?",
        a: "No. I focus on simple sites that are easy to maintain. If you need something bigger, I can help you scope it and find the right people.",
      },
      {
        q: "Our old web person disappeared. Can you help?",
        a: "Often, yes. I'll work out where the site, domain and hosting live, recover access through the providers, and move everything into accounts you own.",
      },
      {
        q: "Do I need expensive hosting?",
        a: "Usually not. Many small sites run well on low-cost or free hosting. I'll recommend what fits your site rather than the most expensive option.",
      },
    ],
  },
  {
    slug: "automation-and-ai",
    name: "Automation and AI",
    summary: "Connect your apps, cut repetitive work and put AI tools to use safely.",
    group: "business",
    searchTarget: "small business automation",
    title: "Small business automation and AI tools",
    description: "Connect your apps, automate repetitive work and set up AI tools like Microsoft Copilot safely for your small business or nonprofit.",
    lead: "If someone on your team copies the same information between apps every week, that's work a computer can do. I'll find those tasks, automate them and set up AI tools with sensible guardrails.",
    included: [
      "Finding the repetitive tasks worth automating",
      "Connecting apps with tools like Zapier and Power Automate",
      "Setting up Microsoft Copilot, ChatGPT or Gemini for your team",
      "Clear guidelines on what data can and can't go into AI tools",
      "Documentation so your automations never become a mystery",
    ],
    faqs: [
      {
        q: "Is it safe to use AI tools with company data?",
        a: "It can be, with the right plan and settings. Business versions of these tools generally offer stronger data protections than free personal accounts. I'll help you choose one and set clear rules for your team.",
      },
      {
        q: "What kind of tasks can be automated?",
        a: "Things like sending form submissions to a spreadsheet, creating invoices from new orders, or alerting someone when a certain email arrives. If it follows the same steps every time, it's a good candidate.",
      },
      {
        q: "What happens if an automation breaks?",
        a: "Each one is documented and set up to alert someone when it fails, so problems are caught quickly instead of silently.",
      },
    ],
  },
  {
    slug: "office-setup",
    name: "Office setup",
    summary: "Network, Wi-Fi, backups and printers for a small or home office.",
    group: "business",
    searchTarget: "small office IT setup Toronto",
    title: "Small office and home office IT setup in Toronto",
    description: "Network, Wi-Fi, backups, printers and hardware for small offices and home offices in Toronto, set up properly and documented.",
    lead: "Moving into a new space, adding staff or just tired of things not working? I'll set up the network, Wi-Fi, backups and equipment so your office runs without daily workarounds.",
    included: [
      "Business-grade Wi-Fi and network setup",
      "Automatic backups, tested so they actually restore",
      "Printers and shared devices that work for everyone",
      "Help choosing and buying the right laptops and equipment",
      "A simple diagram and notes showing how it all fits together",
    ],
    faqs: [
      {
        q: "Can you help us choose equipment?",
        a: "Yes. I'll recommend hardware that fits your needs and budget, without paying for features you won't use.",
      },
      {
        q: "How do I know my backups work?",
        a: "By testing a restore, not just checking that backups ran. I test one during setup and show you how to check it later.",
      },
      {
        q: "Is a home office treated differently?",
        a: "The basics are the same: reliable Wi-Fi, backups and secure devices. A home office just needs it sized for one or two people, and kept separate from the household where it matters.",
      },
    ],
  },
  {
    slug: "home-network",
    name: "Home network",
    summary: "Wi-Fi that reaches every room, on a router that is locked down.",
    group: "personal",
    searchTarget: "home Wi-Fi setup Toronto",
    title: "Home Wi-Fi and network setup in Toronto",
    description: "Wi-Fi that reaches every room, a secure router and parental controls that work. Home network setup and troubleshooting in Toronto.",
    lead: "Dead zones, slow evenings and a router nobody has logged into since it was installed. I'll set up your home network so it covers every room and stays secure.",
    included: [
      "Wi-Fi coverage for every room, including mesh systems where needed",
      "Router setup with strong passwords and current firmware",
      "A separate guest network, and one for smart home devices",
      "Parental controls and screen-time settings",
      "Working with your internet provider's equipment",
    ],
    faqs: [
      {
        q: "Do I need a mesh system?",
        a: "Not always. Sometimes moving or replacing one router is enough. I'll check your space first and only recommend extra equipment if it will actually help.",
      },
      {
        q: "Why separate smart home devices?",
        a: "Smart TVs, cameras and plugs often get fewer security updates. Keeping them on their own network means a weak device can't easily reach your computers and phones.",
      },
      {
        q: "Can you work with my internet provider's modem?",
        a: "Yes. Depending on your provider, I can use the equipment you have or set it up alongside your own router for better coverage and control.",
      },
    ],
  },
  {
    slug: "personal-security",
    name: "Personal security",
    summary: "Stronger passwords and sign-ins, and help after a hack or scam.",
    group: "personal",
    searchTarget: "personal cybersecurity help",
    title: "Personal cybersecurity help in Toronto",
    description: "Stronger passwords, two-factor sign-in, secured devices and help after a hack or scam. Personal cybersecurity for individuals and families in Toronto.",
    lead: "A password manager and two-factor sign-in prevent a large share of account takeovers. I'll set them up with you, secure your devices, and help you recover if something has already gone wrong.",
    included: [
      "A password manager set up and filled with your accounts",
      "Two-factor sign-in on email, banking and social accounts",
      "Phones, tablets and computers updated and locked down",
      "Recovering hacked email or social media accounts",
      "A plain-language checklist for spotting scams",
    ],
    faqs: [
      {
        q: "I think I've been hacked or scammed. What should I do first?",
        a: "If money is involved, call your bank or card provider right away. Then change your email password from a device you trust. After that, I can help secure your accounts and check what else was affected. You can also report scams to the Canadian Anti-Fraud Centre.",
      },
      {
        q: "Do you need my passwords?",
        a: "No. You stay in control of your passwords. I work alongside you while you sign in, and I'll never ask you to send a password by email or text.",
      },
      {
        q: "Can you help my parents?",
        a: "Yes. Setting up older family members with simple, secure sign-ins is common, and I leave written steps they can follow.",
      },
    ],
  },
  {
    slug: "online-cleanup",
    name: "Online clean-up",
    summary: "Your personal information off data broker sites and forgotten accounts.",
    group: "personal",
    searchTarget: "remove personal information online Canada",
    title: "Remove your personal information online in Canada",
    description: "Get your personal information off data broker sites, close forgotten accounts and tighten privacy settings. Online clean-up for individuals in Canada.",
    lead: "Your address, phone number and relatives' names may be listed on data broker sites you've never heard of. I'll find what's out there, request removals and close the accounts you no longer use.",
    included: [
      "A search for what's publicly listed about you",
      "Removal requests to data broker and people-search sites",
      "Closing old and forgotten accounts",
      "Tighter privacy settings on social media and Google",
      "A record of every request, so you can follow up later",
    ],
    faqs: [
      {
        q: "Can you remove everything about me online?",
        a: "No one can honestly promise that. Many sites remove listings on request, but news articles, public records and some sites won't. I'll tell you what's realistic before we start.",
      },
      {
        q: "Will removed information come back?",
        a: "Sometimes. Data brokers can relist information they collect again. It's worth checking periodically, and the record of past requests makes repeat removals quicker.",
      },
      {
        q: "Is my information safe with you?",
        a: "I only collect what's needed to find and remove your listings, and I delete my working notes when we're done unless you ask me to keep them.",
      },
    ],
  },
];

export const businessServices = services.filter((s) => s.group === "business");
export const personalServices = services.filter((s) => s.group === "personal");
export const serviceUrl = (s: Service) => `/services/${s.slug}`;
