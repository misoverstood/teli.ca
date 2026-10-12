// Single source of truth for services. PRODUCT.md holds the reasoning behind this list.
// The home page, the /services index and every service page read from here.

export type ServiceGroup = 'business' | 'personal';

export interface Service {
  slug: string;
  name: string;
  summary: string;
  group: ServiceGroup;
  searchTarget: string;
}

export const services: Service[] = [
  {
    slug: 'email-and-workspace',
    name: 'Email and workspace',
    summary: 'Microsoft 365 or Google Workspace, set up properly and kept tidy.',
    group: 'business',
    searchTarget: 'Microsoft 365 setup Toronto',
  },
  {
    slug: 'domains-and-dns',
    name: 'Domains and DNS',
    summary: 'Your domain under your control, and email that actually lands.',
    group: 'business',
    searchTarget: 'DMARC setup small business',
  },
  {
    slug: 'security-and-devices',
    name: 'Security and devices',
    summary: 'Sign-ins, laptops and phones locked down, and staff changes handled.',
    group: 'business',
    searchTarget: 'small business cybersecurity Toronto',
  },
  {
    slug: 'migrations',
    name: 'Migrations',
    summary: 'Move email, files and websites to a new platform without losing anything.',
    group: 'business',
    searchTarget: 'email migration Toronto',
  },
  {
    slug: 'websites-and-hosting',
    name: 'Websites and hosting',
    summary: 'A simple site, reliable hosting and a domain you actually own.',
    group: 'business',
    searchTarget: 'website hosting help small business',
  },
  {
    slug: 'automation-and-ai',
    name: 'Automation and AI',
    summary: 'Connect your apps, cut repetitive work and put AI tools to use safely.',
    group: 'business',
    searchTarget: 'small business automation',
  },
  {
    slug: 'office-setup',
    name: 'Office setup',
    summary: 'Network, Wi-Fi, backups and printers for a small or home office.',
    group: 'business',
    searchTarget: 'small office IT setup Toronto',
  },
  {
    slug: 'home-network',
    name: 'Home network',
    summary: 'Wi-Fi that reaches every room, on a router that is locked down.',
    group: 'personal',
    searchTarget: 'home Wi-Fi setup Toronto',
  },
  {
    slug: 'personal-security',
    name: 'Personal security',
    summary: 'Stronger passwords and sign-ins, and help after a hack or scam.',
    group: 'personal',
    searchTarget: 'personal cybersecurity help',
  },
  {
    slug: 'online-cleanup',
    name: 'Online clean-up',
    summary: 'Your personal information off data broker sites and forgotten accounts.',
    group: 'personal',
    searchTarget: 'remove personal information online Canada',
  },
];

export const businessServices = services.filter((s) => s.group === 'business');
export const personalServices = services.filter((s) => s.group === 'personal');
export const serviceUrl = (s: Service) => `/services/${s.slug}`;
