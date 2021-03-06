import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import shk from './views/shk.vue'
import profile from './views/profile.vue'
import appartaments from './views/appartaments.vue'
import dashboard from './views/dashboard.vue'
import signup from './views/signup.vue'
import signin from './views/signin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/shk',
      name: 'shk',
      component: shk
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/appartaments',
      name: 'appartaments',
      component: appartaments
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
  ]
})
