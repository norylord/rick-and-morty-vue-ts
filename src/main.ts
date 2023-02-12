import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/variables/_colors.sass'
import {createPinia} from "pinia";
import axios from "axios";
import {useCharacterStore} from "@/store";

const pinia = createPinia()



const app = createApp(App)

app
    .use(router)
    .use(pinia)
    .mount('#app')


const store = useCharacterStore()
axios.interceptors.response.use(
    (res) => res,
    (error) => {
        if (error.response.status === 404) {
            store.setErrorMessage('По заданным параметрам ничего не найдено')
        } else {
            throw error
        }
    }
);
