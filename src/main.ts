/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {collection} from 'firebase/firestore'
import { MdFavoriteborder, MdFavoriteSharp, BiPlusCircle, HiPencilAlt, CoTelegramPlane } from "oh-vue-icons/icons";
import initialize from './firebase';
import { config } from './config';

import App from './App.vue'
import router from './router'

import './assets/main.css'

// const { firebase, firestore, auth } = initialize();
// export const employeesColection = collection(firestore, 'employees');

addIcons(MdFavoriteborder, MdFavoriteSharp, BiPlusCircle, HiPencilAlt, CoTelegramPlane);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component("v-icon", OhVueIcon);

app.mount('#app')
