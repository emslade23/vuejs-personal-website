import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/iotProjects',
    name: 'projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/softwareProjects',
    name: 'softwareProjects',
    component: () => import('../views/SoftwareProjects.vue')
  },
  {
    path: '/cooking',
    name: 'cooking',
    component: () => import('../views/Cooking.vue')
  },
  {
    path: '/photography',
    name: 'photography',
    component: () => import('../views/Photography.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
