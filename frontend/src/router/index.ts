import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import { nextTick } from 'vue';
import LegalityPlayerView from '@/views/LegalityPlayerView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // 1) Return saved position if available
    if (savedPosition) return savedPosition

    // 2) If query 'a' exists, prevent scrolling
    if (to.query.a) {
      return false;
    }

    // 3) Anchor present (#faq, etc.)
    if (to.hash) {
      // If the element is not yet in the DOM (async content), wait for the next tick
      return new Promise((resolve) => {
        const tryScroll = () => {
          const el = document.querySelector(to.hash)
          if (el) {
            resolve({ el: to.hash, behavior: 'smooth' }) // smooth scroll to anchor
          } else {
            // retry on next tick (useful if section arrives after render)
            nextTick().then(tryScroll)
          }
        }
        tryScroll()
      })
    }

    // 4) Default scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/legality-player-rights',
      name: 'legality-player-rights',
      component: LegalityPlayerView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

export default router
