 import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

// export default {
//   // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
//   // for more information about preprocessors
//   preprocess: vitePreprocess()
// }

import adapter from '@sveltejs/adapter-static'

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: 'index.html'
    })
  }
}