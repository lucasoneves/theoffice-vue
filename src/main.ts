import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdFavoriteborder, MdFavoriteSharp, BiPlusCircle, HiPencilAlt } from "oh-vue-icons/icons";

import App from './App.vue'
import router from './router'

import './assets/main.css'

addIcons(MdFavoriteborder, MdFavoriteSharp, BiPlusCircle, HiPencilAlt);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component("v-icon", OhVueIcon);

app.mount('#app')
