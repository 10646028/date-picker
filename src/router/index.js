import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/member',
    name: 'member',
    component: () => import('../views/MemberView.vue')
  },
  {
    path:'/*',
    redirect: '/'
  },
]

function getAbsolutePath () {
  let path = location.pathname
  return path.substring(0, path.lastIndexOf('/') + 1)
}

const router = createRouter({
  history: createWebHistory('/date-picker/'),
  base: getAbsolutePath(),
  routes,
})

export default router
