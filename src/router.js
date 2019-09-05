import Vue from 'vue'
import Router from 'vue-router'
import people from './views/people.vue'
import starships from './views/starships'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: people
    },
    {
      path: '/starships',
      name: 'starships',
      component: starships
    },
    
  ]
})
