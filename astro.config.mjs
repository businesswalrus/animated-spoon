import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://aarbaa.com',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/7deadlysins') && !page.includes('/raph-champion'),
    }),
  ],
});
