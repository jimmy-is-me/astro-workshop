import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://astro-workshop-5ah.pages.dev',
  integrations: [mdx()],
  output: 'static',
  trailingSlash: 'ignore',
});
