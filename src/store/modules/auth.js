import {AUTH} from '../types'

const initial = {
  token: null,
  name: null,
  username: null,
  login: false
}

export default {
  state: JSON.parse(localStorage.getItem('auth') || JSON.stringify(initial)),
  mutations: {
    AuthLoginSuccess (state, {username, name, token}) {
      Object.assign(state, {login: true, username, name, token})
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
        const apiResponse = {username, name: username, token:'faketoken'}
        commit('AuthLoginSuccess', apiResponse)
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