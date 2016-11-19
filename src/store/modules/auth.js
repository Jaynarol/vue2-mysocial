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
    LoginSuccess (state, {username, name, token}) {
      state.login = true
      state.username = username
      state.token = token
      state.name = name
      localStorage.setItem('auth', JSON.stringify(state))
    },
    LogOutSuccess (state) {
      state.login = false
      state.username = null
      state.token = null
      state.name = null
      localStorage.removeItem('auth')
    }
  },
  actions: {
    [AUTH.LOGIN] ({commit}, {username, password}) {
      return new Promise((resolve, reject) => {
        const apiResponse = {username, name: username, token:'faketoken'}
        commit('LoginSuccess', apiResponse)
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