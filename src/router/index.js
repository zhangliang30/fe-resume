import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FullPageHome from '../views/FullPageHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/fullpage',
    component: FullPageHome
  }
]

const router = new VueRouter({
  routes
})

export default router
