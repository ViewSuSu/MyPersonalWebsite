import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: '小窗同学 · ViewSuSu' },
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
    meta: { title: '项目经历 · 小窗同学' },
  },
  {
    path: '/opensource',
    name: 'opensource',
    component: () => import('../views/OpenSourceView.vue'),
    meta: { title: '开源 · 小窗同学' },
  },
  {
    path: '/experience',
    name: 'experience',
    component: () => import('../views/ExperienceView.vue'),
    meta: { title: '工作经历 · 小窗同学' },
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

router.afterEach((to) => {
  const title = (to.meta?.title as string | undefined) ?? '小窗同学'
  document.title = title
})

export default router
