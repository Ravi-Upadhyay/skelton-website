import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import lit from '@astrojs/lit';

export default defineConfig({
  integrations: [
    tailwind(),
    lit(),
  ],});