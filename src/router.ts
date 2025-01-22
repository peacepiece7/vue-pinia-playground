import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import Home from '@/pages/Home.vue'
import NotFound from '@/pages/NotFound.vue'
import About from '@/pages/About.vue'
import MainLayout from '@/layouts/MainLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: 'about',
        name: 'About',
        component: About,
      },
      {
        path: 'coffeeDetail/:id',
        name: 'CoffeeDetail',
        component: () => import('@/pages/CoffeeDetail.vue'),
      },
    ],
  },
  // redirect to not found page
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

// create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// navigation guard
router.beforeEach((to, from, next) => {
  next()
})

export default router
