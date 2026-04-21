import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vmmanutencaoindustrial-create.github.io',
  base: '/vm-estruturas-fluido',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets'
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false
  },
  vite: {
    build: {
      cssMinify: 'esbuild',
      target: 'es2020',
      rollupOptions: {
        // three e addons são resolvidos via importmap no runtime (CDN jsdelivr)
        external: ['three', /^three\/addons\//]
      }
    }
  }
});
