import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import friends from './modules/friends'
import profile from './modules/profile'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth, friends, profile
  },
  strict: process.env.NODE_ENV !== 'production'
})