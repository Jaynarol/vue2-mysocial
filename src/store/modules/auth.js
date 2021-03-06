import { AUTH } from '../types'
import { apiLogin } from '../mock'

const initial = {
  token: null,
  username: null,
  login: false
}

export default {
  state: JSON.parse(localStorage.getItem('auth') || JSON.stringify(initial)),
  mutations: {
    AuthLoginSuccess (state, {username, token}) {
      Object.assign(state, {login: true, username, token})
      localStorage.setItem('auth', JSON.stringify(state))
    },
    AuthLogOutSuccess (state) {
      Object.assign(state, initial)
      localStorage.removeItem('auth')
    }
  },
  actions: {
    [AUTH.LOGIN] ({commit}, {username, password}) {
      return new Promise((resolve, reject) => {
        commit('AuthLoginSuccess', apiLogin(username, password))
        resolve()
      })
    },
    [AUTH.LOGOUT] ({commit}) {
      return new Promise((resolve, reject) => {
        commit('AuthLogOutSuccess')
        resolve()
      })
    }
  }
}