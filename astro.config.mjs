// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://salekurpolas.github.io",
  vite: {
    plugins: [tailwind()],
  },
});
