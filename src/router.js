import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import shk from './views/shk.vue'
import profile from './views/profile.vue'
import appartaments from './views/appartaments.vue'
import dashboard from './views/dashboard.vue'
import login from './views/login.vue'
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
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
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
