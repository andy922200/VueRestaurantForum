import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'
import Restaurants from './views/Restaurants.vue'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'roots',
      redirect: '/restaurants'
    },
    {
      path: '/signin',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: Restaurants
    },
    {
      path: '/restaurants/feeds',
      name: 'restaurants-feeds',
      component: () => import('./views/RestaurantsFeeds.vue')
    },
    {
      path: '/restaurants/top',
      name: 'restaurants-tops',
      component: () => import('./views/RestaurantsTop.vue')
    },
    {
      path: '/restaurants/:id',
      name: 'restaurant',
      component: () => import('./views/Restaurant.vue')
    },
    {
      path: '/restaurants/:id/dashboard',
      name: 'restaurant-dashboard',
      component: () => import('./views/RestaurantDashboard.vue')
    },
    {
      path: '/users/top',
      name: 'users-top',
      component: () => import('./views/UsersTop.vue')
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
