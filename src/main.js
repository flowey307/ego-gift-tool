import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from './router'
import { lazyImg } from './directives/lazyImg'
import './styles/main.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.directive('lazy-img', lazyImg)
app.mount('#app')
