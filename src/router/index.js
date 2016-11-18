import Vue from 'vue'
import Router from 'vue-router'

import HomeLayout from '../components/Main/Home/HomeLayout'
import MemberLayout from '../components/Main/Member/MemberLayout'
import ProfileLayout from '../components/Main/Profile/ProfileLayout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeLayout
    },
    {
      path: '/login',
      name: 'login',
      component: MemberLayout
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileLayout
    },
    {
      path: '*',
      redirect: { name: 'home' }
    }
  ]
})