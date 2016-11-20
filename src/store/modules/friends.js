import { FRIENDS } from '../types'

const mock = [
  {username: 'jefer', name: 'Jefer Smitch', image: '/static/imgs/friends/guy-2.jpg', mefollow: true, followme: false},
  {username: 'kodia', name: 'Kodia Nonoma', image: '/static/imgs/friends/guy-9.jpg', mefollow: true, followme: true},
  {username: 'aliss', name: 'Aliss Avenue', image: '/static/imgs/friends/woman-1.jpg', mefollow: false, followme: true},
  {username: 'dokey', name: 'Dokey Surface', image: '/static/imgs/friends/child-1.jpg', mefollow: false, followme: true},
  {username: 'ashe', name: 'Ashe Romanop', image: '/static/imgs/friends/woman-2.jpg', mefollow: true, followme: true},
  {username: 'jonh', name: 'Jonh Umblura', image: '/static/imgs/friends/guy-8.jpg', mefollow: true, followme: true},
]

export default {
  state: [],
  mutations: {
    FriendFetchSuccess(state, friendList) {
      state.splice(0, state.length)
      state.push(...friendList)
    },
    FriendFollow(state, profile) {
      state.find(({username}) => username===profile).mefollow = true
    },
    FriendUnfollow(state, profile) {
      state.find(({username}) => username===profile).mefollow = false
    }
  },
  actions: {
    [FRIENDS.FETCH]({commit}){
      commit('FriendFetchSuccess', mock)
    }
  }
}