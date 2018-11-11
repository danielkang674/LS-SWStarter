import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import PersonDetails from './views/PersonDetails.vue'
import MovieDetails from './views/MovieDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/person',
      name: 'PersonDetails',
      component: PersonDetails,
      props: true
    },
    {
      path: '/movie',
      name: 'MovieDetails',
      component: MovieDetails,
      props: true
    }
  ]
})
