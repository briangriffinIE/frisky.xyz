// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://friskyy.xyz',
  base: '/',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: '_assets'
  },
  vite: {
    publicDir: 'public'
  }
});
