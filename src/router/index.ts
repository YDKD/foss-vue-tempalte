import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/Home/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
