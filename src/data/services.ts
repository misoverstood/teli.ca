// Single source of truth for services. PRODUCT.md holds the reasoning behind this list.
// The home page, the /services index, every service page, llms.txt and structured data read from here.

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
    title: "I get it done",
    body: "Every change is agreed with you first, and you're kept in the loop on anything that affects you.",
  },
  {
    title: "You get it in writing",
    body: "Plain-language documentation of what changed and where everything lives.",
  },
];

export const services: Service[] = [
  {
    slug: "email-and-collaboration",
    name: "Email and collaboration",
    summary: "Microsoft 365, Google Workspace or another provider, set up and secured for the way you work.",
    group: "business",
    searchTarget: "Microsoft 365 setup Toronto",
    title: "Microsoft 365, Google Workspace and email setup in Toronto",
    description: "Set up, secure or move your business email and collaboration tools: Microsoft 365 (formerly Office 365), Google Workspace or another provider, for businesses and organizations across the GTA.",
    lead: "Whether you're starting fresh, inheriting a setup nobody understands or moving to a new provider, I'll get your email, calendars and files working the way they should, with the right people having the right access.",
    included: [
      "Setup of Microsoft 365 (formerly Office 365), Google Workspace or another provider",
      "Moving from one email or collaboration platform to another",
      "A licence review so you only pay for what you use",
      "Shared mailboxes, aliases and distribution lists",
      "Multi-factor authentication on every account",
    ],
    faqs: [
      {
        q: "Microsoft 365 or Google Workspace: which should I pick?",
        a: "It depends on how your team works and what you already use. If you live in Word and Excel, Microsoft 365 usually fits better. If your team works mostly in a browser, Google Workspace is often simpler, and sometimes another provider suits you best. I'll walk you through the trade-offs before you commit.",
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
    summary: "Domains under your control, and email that's authenticated and delivered reliably.",
    group: "business",
    searchTarget: "DMARC setup small business",
    title: "Domain and DNS management, SPF, DKIM and DMARC setup",
    description: "Get control of your domain and DNS, and set up SPF, DKIM and DMARC so your email is authenticated and reaches inboxes instead of spam folders.",
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
    summary: "Strong authentication, managed devices and controlled access for everyone on your team.",
    group: "business",
    searchTarget: "small business cybersecurity Toronto",
    title: "Small business cybersecurity and device management in Toronto",
    description: "Practical security for businesses and organizations across the GTA: strong authentication including passkeys, managed devices, password managers, and access granted and removed at the right time.",
    lead: "Good security starts with the basics: strong authentication, managed devices, and access that's granted and removed at the right time. I put those in place in a way that protects your business without slowing your team down.",
    included: [
      "Strong authentication, including passkeys and multi-factor sign-in",
      "Computers and mobile devices managed, with remote wipe if one is lost",
      "A password manager rolled out to the team",
      "Access granted and removed at the right time when people join or leave",
      "Identity setup in Microsoft Entra, Google or your identity provider",
    ],
    faqs: [
      {
        q: "We're only a few people. Do we really need this?",
        a: "Small teams are often targeted because they're less likely to have protections in place. The basics take little time to set up and block the most common attacks.",
      },
      {
        q: "What happens when someone leaves?",
        a: "Their access is removed on their last day, their files and email go to the right person, and company devices are wiped or reassigned. A written checklist makes it the same every time.",
      },
      {
        q: "Will this slow my team down?",
        a: "A little at first, while everyone sets up stronger sign-in. After that, passkeys and a password manager usually make signing in faster, not slower.",
      },
    ],
  },
  {
    slug: "migrations",
    name: "Migrations",
    summary: "Move email, files and websites between platforms without losing anything.",
    group: "business",
    searchTarget: "email migration Toronto",
    title: "Email, file and platform migrations in Toronto",
    description: "Move email, files, domains or websites between platforms and providers without losing data, for businesses and organizations across the GTA.",
    lead: "Switching platforms is mostly about planning. I'll map what you have, move it in the right order and check everything arrived before the old system is switched off.",
    included: [
      "Email moves between providers, such as Google Workspace and Microsoft 365",
      "Files and shared drives moved with their permissions",
      "Tenant to tenant moves after a merger or rebrand",
      "Domain and website moves between hosts",
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
    summary: "A fast, simple website with reliable hosting, on a domain you own.",
    group: "business",
    searchTarget: "website hosting help small business",
    title: "Website and hosting help for small businesses",
    description: "Simple, fast websites, hosting moves, SSL certificates and getting control of your domain back, for businesses and organizations across the GTA.",
    lead: "Your website should load fast, stay secure and be under your control. I build simple sites and take care of the hosting, certificates and accounts behind them.",
    included: [
      "Simple, fast websites for businesses and organizations",
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
    slug: "seo-setup",
    name: "SEO setup",
    summary: "Get found on Google and Bing, with the essentials set up correctly from day one.",
    group: "business",
    searchTarget: "SEO setup small business Toronto",
    title: "SEO setup for small businesses in Toronto",
    description: "Get your website found on Google and Bing: Google Business Profile, Search Console, sitemaps, structured data and on-page basics, set up correctly for businesses and organizations across the GTA.",
    lead: "A good website only helps if people can find it. I'll set up the foundations search engines look for, so your business shows up when people search for what you do.",
    included: [
      "Google Business Profile and Bing Places set up or cleaned up",
      "Google Search Console and Bing Webmaster Tools connected and verified",
      "Sitemaps, page titles and descriptions done properly",
      "Structured data so search engines understand your business",
      "A check of speed, mobile friendliness and broken links",
    ],
    faqs: [
      {
        q: "How long until I show up in search results?",
        a: "It varies. Search engines usually pick up changes within days to weeks, but rankings build over time. Getting the foundations right is what makes everything after it work.",
      },
      {
        q: "Do you guarantee first-page rankings?",
        a: "No, and be wary of anyone who does. Nobody controls Google's results. What I can do is make sure nothing technical is holding your site back.",
      },
      {
        q: "Do you work on sites you didn't build?",
        a: "Yes. Most of this work happens on existing sites, whatever platform they're built on.",
      },
    ],
  },
  {
    slug: "automation-and-ai",
    name: "Automation and AI",
    summary: "Hand repetitive work to automation and AI, and get time back for your business.",
    group: "business",
    searchTarget: "small business automation",
    title: "Small business automation and AI tools",
    description: "Automate repetitive work by connecting your apps with tools like Zapier, Make or Power Automate, and set up AI tools like Microsoft Copilot safely for your team.",
    lead: "Copying data between apps, chasing approvals and re-entering the same information is slow, tedious work. Automation and AI can take it off your plate, freeing your time for the work that grows your business.",
    included: [
      "Finding the repetitive tasks worth automating",
      "Connecting your apps with tools like Zapier, Make or Power Automate",
      "Setting up Microsoft Copilot, ChatGPT or other AI tools for your team",
      "Clear guidelines on what data can and can't go into AI tools",
      "Documentation so every automation is easy to understand and maintain",
    ],
    faqs: [
      {
        q: "Is it safe to use AI tools with company data?",
        a: "It can be, with the right plan and settings. Business versions of these tools generally offer stronger data protections than free personal accounts. I'll help you choose one and set clear rules for your team.",
      },
      {
        q: "What kind of work can be automated?",
        a: "Things like turning new orders into invoices, routing enquiries to the right person, or keeping customer details in sync between your website, mailing list and accounting. If it follows the same steps every time, it's a good candidate.",
      },
      {
        q: "What happens if an automation breaks?",
        a: "Each one is documented and set up to alert someone when it fails, so problems are caught quickly instead of silently.",
      },
    ],
  },
  {
    slug: "workplace-it",
    name: "Workplace IT",
    summary: "Secure networks, Wi-Fi, backups and devices for your workplace, wherever that is.",
    group: "business",
    searchTarget: "small office IT setup Toronto",
    title: "Office and home office IT setup in Toronto and the GTA",
    description: "Secure networks, Wi-Fi, cloud backups and devices for offices and home offices across the GTA, set up properly and documented.",
    lead: "Moving into a new space, adding staff or setting up a home office? I'll set up your network correctly and securely, along with Wi-Fi, backups and devices, so your workplace runs without daily workarounds.",
    included: [
      "A secure, business-grade network and Wi-Fi",
      "Automatic cloud backups with OneDrive, Dropbox or similar, tested so they restore when you need them",
      "Printers, screens and shared devices that work for everyone",
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
        a: "The basics are the same: a secure network, backups and protected devices. A home office just needs it sized for one or two people, and kept separate from the household where it matters.",
      },
    ],
  },
  {
    slug: "home-network",
    name: "Home network",
    summary: "Fast, secure Wi-Fi and wired connections throughout your home.",
    group: "personal",
    searchTarget: "home Wi-Fi setup Toronto",
    title: "Home Wi-Fi and network setup in Toronto",
    description: "Fast, secure Wi-Fi and wired connections throughout your home, with parental controls and a properly secured router. Home network setup across the GTA.",
    lead: "Dead zones, dropped connections and slow evenings are fixable. I'll set up your home network so it reaches every corner of your home, wired or wireless, and stays secure.",
    included: [
      "Wi-Fi coverage for every room, including mesh systems where needed",
      "Wired connections for desks, TVs and consoles where Wi-Fi isn't enough",
      "Router setup with strong passwords and current firmware",
      "A separate guest network, and one for smart home devices",
      "Parental controls and screen-time settings",
      "Working with your internet provider's equipment",
    ],
    faqs: [
      {
        q: "Do I need a mesh system?",
        a: "Not always. Sometimes moving or replacing one router, or running a cable, is enough. I'll check your space first and only recommend extra equipment if it will actually help.",
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
    summary: "Stronger authentication, from passkeys to two-factor, and help after a hack or scam.",
    group: "personal",
    searchTarget: "personal cybersecurity help",
    title: "Personal cybersecurity help in Toronto",
    description: "Passkeys, two-factor sign-in, password managers, secured devices and help after a hack or scam, for individuals and families across the GTA.",
    lead: "Strong authentication, like passkeys and two-factor sign-in, prevents a large share of account takeovers. I'll set it up with you, secure your devices, and help you recover if something has already gone wrong.",
    included: [
      "Passkeys and two-factor sign-in on your important accounts",
      "A password manager set up and filled with your accounts",
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
    slug: "device-care",
    name: "Device care",
    summary: "Virus removal, tune-ups, resets and new device setup for computers, tablets and phones.",
    group: "personal",
    searchTarget: "computer virus removal Toronto",
    title: "Computer virus removal, tune-ups and device setup in Toronto",
    description: "Virus and malware removal, slow computer tune-ups, factory resets and new device setup for computers, tablets and phones across the GTA.",
    lead: "A slow computer, strange pop-ups or a new device to set up? I'll get your computers, tablets and phones running cleanly and securely, with your files and settings where they should be.",
    included: [
      "Virus and malware removal",
      "Tune-ups for slow computers",
      "Factory resets before you sell, donate or recycle a device",
      "New device setup, with your files, photos and settings moved across",
      "Updates, backups and security settings checked",
    ],
    faqs: [
      {
        q: "Will I lose my files?",
        a: "Not if it can be avoided. Before any reset or major fix, your important files are backed up first, and you'll know the plan before anything is erased.",
      },
      {
        q: "Is it worth fixing an old computer?",
        a: "Sometimes. I'll tell you honestly whether a tune-up will help or whether replacing it makes more sense.",
      },
      {
        q: "Why reset a device before selling it?",
        a: "Deleting files isn't enough. A proper reset removes your accounts and data so the next owner can't get to them.",
      },
    ],
  },
  {
    slug: "online-privacy",
    name: "Online privacy",
    summary: "Find out what's out there about you, and get it removed.",
    group: "personal",
    searchTarget: "remove personal information online Canada",
    title: "Remove your personal information online in Canada",
    description: "Find out what's publicly listed about you, get your personal information off data broker sites, close forgotten accounts and tighten privacy settings.",
    lead: "Your home address, phone number and email may be listed on data broker and people-search sites you've never heard of. I'll find what's out there about you, request removals and close the accounts you no longer use.",
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
        a: "I only ask for what's needed to find your listings. Once the work is finished, I can delete my notes or keep them for follow-up removals, whichever you prefer.",
      },
    ],
  },
];

export const businessServices = services.filter((s) => s.group === "business");
export const personalServices = services.filter((s) => s.group === "personal");
export const serviceUrl = (s: Service) => `/services/${s.slug}/`;
