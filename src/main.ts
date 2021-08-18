import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './mock/index'

import Carousel from '@/components/Carousel/index.vue'


import './styles/reset.css'

createApp(App).component("Carousel",Carousel).use(store).use(router).mount('#app')
