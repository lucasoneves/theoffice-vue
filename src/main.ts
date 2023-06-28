/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdFavoriteborder, MdFavoriteSharp, BiPlusCircle, HiPencilAlt, CoTelegramPlane } from "oh-vue-icons/icons";
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore';
import { config } from './config';

import App from './App.vue'
import router from './router'

import './assets/main.css'

const firebaseApp = initializeApp(config.firebaseConfig);
const firestore = getFirestore(firebaseApp);
export const employeesColection = collection(firestore, 'employees');

addIcons(MdFavoriteborder, MdFavoriteSharp, BiPlusCircle, HiPencilAlt, CoTelegramPlane);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component("v-icon", OhVueIcon);

app.mount('#app')
