import { FRIENDS } from '../types'
import { apiFetchFriends, apiFetchHomePost } from '../mock'

export default {
  state: [],
  mutations: {
    FriendFetchSuccess(state, friendList) {
      state.splice(0, state.length)
      state.push(...friendList)
    },
    FriendFollow(state, profile) {
      state.find(({username}) => username === profile).mefollow = true
    },
    FriendUnfollow(state, profile) {
      state.find(({username}) => username === profile).mefollow = false
    }
  },
  actions: {
    [FRIENDS.FETCH_DETAIL]({commit, rootState}){
      commit('FriendFetchSuccess', apiFetchFriends(rootState.auth.username))
    },
    [FRIENDS.FETCH_HOMEPOST]({rootState}){
      return new Promise((resolve, reject)=> {
        setTimeout(()=> {
          const homeposts = apiFetchHomePost()
          resolve(homeposts)
        }, 200 /* simulate delay connect api server */)
      })
    }
  }
}