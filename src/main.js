import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import '@formkit/themes/genesis'

createApp(App)
.use(plugin, defaultConfig({
    theme: 'genesis'
  }))
.mount('#app')
