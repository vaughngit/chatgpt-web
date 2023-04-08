 import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

// export default {
//   // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
//   // for more information about preprocessors
//   preprocess: vitePreprocess()
// }

import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    prerender: {
      default: true
    }
  }
}

export default config
