import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.query.a) {
      return false;
    }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: ''
    },
  ]
})

export default router
