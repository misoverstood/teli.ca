// Structured data (schema.org JSON-LD) built from the site and services data.
import { site } from './site';
import { services, serviceUrl, type Service } from './services';

const businessId = `${site.url}/#business`;
const serviceArea = { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' };

export const businessRef = {
  '@type': 'ProfessionalService',
  '@id': businessId,
  name: 'teli.ca',
  url: `${site.url}/`,
};

export function businessSchema() {
  return {
    '@context': 'https://schema.org',
    ...businessRef,
    description:
      'IT consulting and hands-on support for businesses, organizations and households across the Greater Toronto Area.',
    slogan: 'Tech, sorted.',
    areaServed: serviceArea,
    knowsAbout: services.map((s) => s.name),
  };
}

export function serviceSchemas(s: Service) {
  const url = `${site.url}${serviceUrl(s)}`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: s.title,
      serviceType: s.name,
      description: s.description,
      url,
      provider: businessRef,
      areaServed: serviceArea,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: s.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services/` },
        { '@type': 'ListItem', position: 3, name: s.name, item: url },
      ],
    },
  ];
}

// Safe for embedding inside a script tag: a "<" can never close the tag early.
export function toJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
