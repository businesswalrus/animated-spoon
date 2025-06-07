import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    functionPerRoute: false,
    nodeVersion: '20.x'
  }),
  output: 'server',
  site: 'https://aarbaa.com',
  server: {
    host: '0.0.0.0',
    port: 5001
  },
  vite: {
    server: {
      cors: true,
      strictPort: true,
      hmr: {
        clientPort: 443
      },
      watch: {
        usePolling: true
      },
      allowedHosts: [
        'c60dd613-ceed-47e8-86b4-f18b84138f5b-00-lfo5g3iko6gr.picard.replit.dev',
        'localhost',
        'all'
      ]
    }
  },
  integrations: []
});