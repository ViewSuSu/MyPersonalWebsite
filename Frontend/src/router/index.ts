import { createRouter, createWebHashHistory } from 'vue-router'
import { getRouteTitle, type Locale } from '../i18n/messages'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/projects',
    redirect: '/experience',
  },
  {
    path: '/opensource',
    name: 'opensource',
    component: () => import('../views/OpenSourceView.vue'),
  },
  {
    path: '/experience',
    name: 'experience',
    component: () => import('../views/ExperienceView.vue'),
  },
  {
    path: '/nuget',
    name: 'nuget',
    component: () => import('../views/NuGetView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return new Promise((resolve) => {
        const target = to.hash
        const tryScroll = (attempt = 0) => {
          const el = document.querySelector(target)
          if (el) {
            resolve({ el: target, behavior: 'smooth', top: 72 })
          } else if (attempt >= 30) {
            resolve({ top: 0 })
          } else {
            setTimeout(() => tryScroll(attempt + 1), 50)
          }
        }
        tryScroll()
      })
    }
    return { top: 0, behavior: 'smooth' }
  },
})

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'zh'
  const stored = window.localStorage.getItem('site.locale') as Locale | null
  if (stored === 'zh' || stored === 'en') return stored
  const navLang = window.navigator.language?.toLowerCase() ?? ''
  return navLang.startsWith('en') ? 'en' : 'zh'
}

router.afterEach((to) => {
  const name = typeof to.name === 'string' ? to.name : 'home'
  document.title = getRouteTitle(name, readStoredLocale())
})

export default router
