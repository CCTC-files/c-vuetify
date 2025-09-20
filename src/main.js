import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createApp } from 'vue'
import 'unfonts.css'

import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000'

const app = createApp(App)

registerPlugins(app)
app.mount('#app')
