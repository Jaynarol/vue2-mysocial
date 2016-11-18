import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'

Vue.use(Vuex)

const state = {
}

const mutations = {
}

const actions = {
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    auth: Auth
  },
  strict: process.env.NODE_ENV !== 'production'
})