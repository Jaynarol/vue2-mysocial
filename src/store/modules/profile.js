import { PROFILE } from '../types'
import { apiFetchProfile, apiUpdateFollow, apiFetchPost, apiPostStatus } from '../mock'

export default {
  state: [],
  actions: {
    [PROFILE.FETCH_DETAIL]({}, profile){
      return new Promise((resolve, reject) => {
        setTimeout(()=> {
          const found_profile = apiFetchProfile(profile)
          found_profile ? resolve(found_profile) : reject()
        }, 200 /* simulate delay connect api server */)
      })
    },
    [PROFILE.FOLLOW]({commit, rootState}, profile){
      return new Promise((resolve, reject) => {
        apiUpdateFollow(rootState.auth.username, profile, true)

        commit('FriendFollow', profile)
        resolve(true)
      })
    },
    [PROFILE.UNFOLLOW]({commit, rootState}, profile){
      return new Promise((resolve, reject) => {
        apiUpdateFollow(rootState.auth.username, profile, false)

        commit('FriendUnfollow', profile)
        resolve(false)
      })
    },
    [PROFILE.FETCH_POSTS]({}, profile){
      return new Promise((resolve, reject) => {
        setTimeout(()=> {
          const postList = apiFetchPost(profile)
          resolve(postList)
        }, 300 /* simulate delay connect api server */)
      })
    },
    [PROFILE.POST_MYSTATUS]({rootState}, mystatus){
      return new Promise((resolve, reject) => {
        setTimeout(()=> {
          const newpost = apiPostStatus(rootState.auth.username, mystatus)
          resolve(newpost)
        }, 100 /* simulate delay connect api server */)
      })
    }
  }
}