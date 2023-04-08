import './init'
// This can be false if you're using a fallback (i.e. SPA mode)
import './app.scss'
import App from './App.svelte'

import { Amplify} from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)


const app = new App({
  target: document.getElementById('app') as HTMLElement
})

export default app
