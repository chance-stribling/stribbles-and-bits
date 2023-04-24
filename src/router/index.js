import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PartOneView from '../views/PartOneView.vue'
import PartTwoView from '../views/PartTwoView.vue'
import AnimationView from '../views/AnimationView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/css',
      name: 'part-one',
      component: PartOneView
    },
    {
      path: '/js',
      name: 'part-two',
      component: PartTwoView
    },
    {
      path: '/animation',
      name: 'animation',
      component: AnimationView
    }
  ]
})

export default router
