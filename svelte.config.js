import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

// export default {
//   // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
//   // for more information about preprocessors
//   preprocess: [vitePreprocess()]
// }

// export default {
//   // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
//   // for more information about preprocessors
//   preprocess: vitePreprocess(),
//   // publicPath: process.env.NODE_ENV === 'production'
//   //   ? '/production-sub-path/'
//   //   : '/'
//   publicPath: '/public/'
// }

import adapter from '@sveltejs/adapter-static'
 
export default {
  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true
    })
  },
  preprocess: [vitePreprocess()]
}