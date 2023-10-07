import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import City from '../views/City/City.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'City',
    component: City
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
