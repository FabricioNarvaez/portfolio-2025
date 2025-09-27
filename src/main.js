import { createApp } from 'vue'
import '@formkit/themes/genesis' 
import './assets/main.css'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { Icon } from '@iconify/vue'
import { createPinia } from 'pinia'

createApp(App)
.use(plugin, defaultConfig({
    theme: 'genesis'
}))
.use(createPinia())
.component('Icon', Icon)
.mount('#app')
