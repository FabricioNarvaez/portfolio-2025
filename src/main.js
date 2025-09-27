import { createApp } from 'vue'
import '@formkit/themes/genesis' 
import './assets/main.css'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { Icon } from '@iconify/vue'
import { createPinia } from 'pinia'
import VScrollReveal from '@directives/v-scroll-reveal.js'

createApp(App)
.use(plugin, defaultConfig({
    theme: 'genesis'
}))
.use(createPinia())
.component('Icon', Icon)
.directive('scroll-reveal', VScrollReveal)
.mount('#app')
