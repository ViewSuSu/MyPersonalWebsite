import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: '小窗同学 · ViewSuSu' },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { title: '关于 · 小窗同学' },
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
    meta: { title: '项目 · 小窗同学' },
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
    meta: { title: '经历 · 小窗同学' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: { title: '联系 · 小窗同学' },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  const title = (to.meta?.title as string | undefined) ?? '小窗同学'
  document.title = title
})

export default router
