import Vue from 'vue'
import Router from 'vue-router'
import VueTodo from '@/components/VueTodo'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VueTodo',
      component: VueTodo
    },

    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
