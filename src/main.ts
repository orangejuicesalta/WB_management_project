import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.css'
import './assets/styles/main.css'
import { createPinia} from 'pinia'
import router from "./router";

createApp(App).use(createPinia()).use(router).mount('#app')
