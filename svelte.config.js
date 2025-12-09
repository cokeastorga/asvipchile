import adapter from '@sveltejs/adapter-vercel'; // Cambiado de adapter-static
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess(),
  kit: {
    // adapter-vercel es "zero-config" en Vercel.
    // No necesitas definir 'pages' o 'assets', él lo maneja solo.
    adapter: adapter() 
  }
};

export default config;