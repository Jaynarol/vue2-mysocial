import {apiFetchFriend} from '../../api/friend'
import { FRIENDS } from '../types'

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
      commit('FriendFetchSuccess', apiFetchFriend())
    }
  }
}