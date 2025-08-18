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
      // Safe selector even if hash contains special characters
      const selector =
        typeof window.CSS?.escape === 'function' && to.hash.length > 1
          ? `#${window.CSS.escape(to.hash.slice(1))}`
          : to.hash

      const findEl = () => document.querySelector(selector)

      return new Promise(async (resolve) => {
        // 1) Immediate attempt
        if (findEl()) return resolve({ el: selector, behavior: 'smooth' })

        // 2) Wait for next tick (async content)
        await nextTick()
        if (findEl()) return resolve({ el: selector, behavior: 'smooth' })

        // 3) Failure → fallback without crashing
        resolve({ top: 0 })
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

router.afterEach((to) => {
  if (!to.hash) return
  // Let scrollBehavior start the scroll, then remove the hash
  requestAnimationFrame(() => {
    setTimeout(() => {
      const clean = to.fullPath.split('#')[0] // remove everything after #
      window.history.replaceState({}, '', clean)
    }, 300) // small delay to not break the smooth scroll
  })
})

export default router
