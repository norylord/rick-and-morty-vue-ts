import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/colors.sass'
import UI from './components/ui'
import {createPinia} from "pinia";

const pinia = createPinia()

const app = createApp(App)

UI.forEach((component) => {
    app.component(component.name, component.component)
})


app
    .use(router)
    .use(pinia)
    .mount('#app')
