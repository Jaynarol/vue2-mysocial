import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import friends from './modules/friends'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth, friends
  },
  strict: process.env.NODE_ENV !== 'production'
})