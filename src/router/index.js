import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/NotFoundView.vue')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/gifs',
      name: 'gifs',
      component: () => import('../views/GifsView.vue')
    },
    {
      path: '/stickers',
      name: 'stickers',
      component: () => import('../views/StickersView.vue')
    }
  ],
})

export default router
