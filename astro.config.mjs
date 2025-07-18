import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Site URL - update this to your production domain
  site: process.env.SITE_URL || 'https://your-domain.netlify.app',
  integrations: [
    tailwind({
      applyBaseStyles: false,
      configFile: './tailwind.config.mjs',
    }),
    react()
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  },
  // Path aliases for cleaner imports
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@styles': '/src/styles',
        '@lib': '/src/lib',
        '@assets': '/src/assets'
      }
    }
  }
});
