import { createWebHistory, createRouter } from 'vue-router'


const routes = [
  {
    path: '/daily',
    component: () => import('@/views/daily/index.vue'),
  },
  {
    path: '/photo',
    component: () => import('@/views/photo/index.vue'),
  },
  {
    path: '/yu',
    // redirect: '/yu',
    component: () => import('@/views/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
