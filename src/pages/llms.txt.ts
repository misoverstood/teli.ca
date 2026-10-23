// Generates /llms.txt from the services data, so it never drifts from the site.
import type { APIRoute } from 'astro';
import { businessServices, personalServices, serviceUrl, type Service } from '../data/services';
import { site } from '../data/site';

const line = (s: Service) => `- [${s.name}](${site.url}${serviceUrl(s)}): ${s.summary}`;

export const GET: APIRoute = () => {
  const body = [
    '# teli.ca',
    '',
    '> IT consulting and hands-on support for businesses, organizations and households across the Greater Toronto Area. One experienced person, from first conversation to finished work.',
    '',
    `To get in touch, use the contact form at ${site.url}/contact/. No pricing is published; every job starts with a conversation.`,
    '',
    '## For businesses and organizations',
    '',
    ...businessServices.map(line),
    '',
    '## For homes and families',
    '',
    ...personalServices.map(line),
    '',
    '## Other pages',
    '',
    `- [All services](${site.url}/services/)`,
    `- [About](${site.url}/about/)`,
    `- [Contact](${site.url}/contact/)`,
    `- [Privacy policy](${site.url}/privacy/)`,
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
