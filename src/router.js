import Vue from 'vue'
import Router from 'vue-router'
import people from './views/people.vue'
import starships from './views/starships'
import starshipdetails from './views/starshipdetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: starships
    },
    {
      path: '/characters',
      name: 'starships',
      component: people
    },
    {
      path: '/starship/details/:id/:imgId',
      name: 'starshipdetails',
      component: starshipdetails
    },
    
  ]
})
