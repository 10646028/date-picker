import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/date-picker/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/date-picker/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/date-picker/member',
    name: 'member',
    component: () => import('../views/MemberView.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/date-picker/'),
  routes
})

export default router
