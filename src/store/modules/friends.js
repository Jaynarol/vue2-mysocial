import { FRIENDS } from '../types'

const mockFriends = [
  {username: 'jefer', name: 'Jefer Smitch', image: '/static/imgs/friends/guy-2.jpg'},
  {username: 'kodia', name: 'Kodia Nonoma', image: '/static/imgs/friends/guy-9.jpg'},
  {username: 'aliss', name: 'Aliss Avenue', image: '/static/imgs/friends/woman-1.jpg'},
]

export default {
  state: [],
  mutations: {
    FriendFetchSuccess(state, friendList) {
      state.splice(0, state.length)
      state.push(...friendList)
    }
  },
  actions: {
    [FRIENDS.FETCH]({commit}){
      commit('FriendFetchSuccess', mockFriends)
    }
  }
}