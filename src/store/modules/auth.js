import {AUTH} from '../types'

export default {
  state: {
    token: null,
    name: null,
    username: null,
    login: false
  },
  mutations: {
    LoginSuccess (state, {username, password}) {
      state.login = true
      state.username = username
    },
    LogOutSuccess (state) {
      state.login = false
      state.username = ''
    }
  },
  actions: {
    [AUTH.LOGIN] ({commit}, {username, password}) {
      return new Promise((resolve, reject) => {
        commit('LoginSuccess', {username, password})
        resolve()
      })
    },
    [AUTH.LOGOUT] ({commit}) {
      return new Promise((resolve, reject) => {
        commit('LogOutSuccess')
        resolve()
      })
    }
  }
}