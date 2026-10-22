// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://teli.ca',
  build: {
    // Always load CSS as files, never inline <style>, so the CSP can keep style-src 'self'.
    inlineStylesheets: 'never',
  },
  integrations: [
    sitemap({
      // Confirmation and error pages are noindex and stay out of the sitemap.
      filter: (page) => !page.includes('/contact/thanks') && !page.includes('/contact/error'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
