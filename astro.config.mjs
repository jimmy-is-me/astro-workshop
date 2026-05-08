import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://astro-workshop-5ah.pages.dev',
  integrations: [mdx(), sitemap()],
  output: 'static',
  trailingSlash: 'ignore',
});
