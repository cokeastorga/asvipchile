import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false
    }),
    paths: {
      base: process.env.BASE_PATH ?? ''
    },
    prerender: {
      entries: ['*', '/', '/es', '/en'] // Asegura que todas las rutas se generen
    }
  }
};

export default config;