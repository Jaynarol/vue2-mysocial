import Vue from 'vue'
import VueRouter from 'vue-router'
import {AUTH} from '../store/types'

import Home from '../components/Main/Home'
import Member from '../components/Main/Member'
import Profile from '../components/Main/Profile'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/', name: 'home', component: Home,
      meta: {
        requiresAuth: true
      }
    },{
      path: '/login', name: 'login', component: Member,
      meta: {
        requiresGuest: true
      }
    },{
      path: '/:profile([a-zA-Z0-9]{1,15})', name: 'profile', component: Profile
    },{
      path: '*', redirect: {name: 'home'}
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLogin = router.app.$store.state.auth.login
  if ( to.matched.some(record => record.meta.requiresAuth) && !isLogin ) {
    next({name: 'login'})
  } else if ( to.matched.some(record => record.meta.requiresGuest) && isLogin ) {
    next({name: 'home'})
  } else {
    next()
  }
})

export default router