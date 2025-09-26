import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { Icon } from '@iconify/vue'

createApp(App)
.use(plugin, defaultConfig({
    theme: 'genesis'
}))
.component('Icon', Icon)
.mount('#app')
