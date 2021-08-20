import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home/index.vue'
import Login from '../views/Login/index.vue'
import Register from '../views/Register/index.vue'
import Search from '../views/Search/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      isHideFooter:true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{
      isHideFooter:true
    }
  },
  {
    path: '/search/:keyword?',
    name: 'Search',
    component: Search
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
