import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Main/Home'
import Member from '../components/Main/Member'
import Profile from '../components/Main/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Member
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '*',
      redirect: { name: 'home' }
    }
  ]
})