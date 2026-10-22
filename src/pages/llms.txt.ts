// Generates /llms.txt from the services data, so it never drifts from the site.
import type { APIRoute } from 'astro';
import { businessServices, personalServices, serviceUrl, type Service } from '../data/services';
import { site } from '../data/site';

const line = (s: Service) => `- [${s.name}](${site.url}${serviceUrl(s)}): ${s.summary}`;

export const GET: APIRoute = () => {
  const body = [
    '# teli.ca',
    '',
    '> Independent IT consulting and hands-on technical help in Toronto, Ontario, for small businesses, nonprofits, home offices and households. One experienced person to deal with, start to finish.',
    '',
    `To get in touch, use the contact form at ${site.url}/contact/. No pricing is published; every job starts with a conversation.`,
    '',
    '## Business services',
    '',
    ...businessServices.map(line),
    '',
    '## Personal and home services',
    '',
    ...personalServices.map(line),
    '',
    '## Other pages',
    '',
    `- [All services](${site.url}/services/)`,
    `- [Contact](${site.url}/contact/)`,
    `- [Privacy policy](${site.url}/privacy/)`,
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
