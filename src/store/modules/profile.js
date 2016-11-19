import { PROFILE } from '../types'

const mockProfiles = [
  {
    username: 'jaynarol',
    name: 'Jaynarol Nova',
    image: '/static/imgs/friends/guy-3.jpg',
    following: 312,
    followers: 599,
    posts: 16,
  },{
    username: 'jefer',
    name: 'Jefer Smitch',
    image: '/static/imgs/friends/guy-2.jpg',
    following: 12,
    followers: 9,
    posts: 453,
  },{
    username: 'kodia',
    name: 'Kodia Nonoma',
    image: '/static/imgs/friends/guy-9.jpg',
    following: 125,
    followers: 9,
    posts: 29,
  },{
    username: 'aliss',
    name: 'Aliss Avenue',
    image: '/static/imgs/friends/woman-1.jpg',
    following: 12,
    followers: 9956,
    posts: 536,
  }
]

const initial = {
  username: '',
  name: 'Loading...',
  image: '/static/imgs/friends/likes-1.png',
  following: 0,
  followers: 0,
  posts: 0,
}

export default {
  state: Object.assign({}, initial),
  mutations: {
    ProfileFetchSuccess(state, {username, name, image, following, followers, posts}){
      Object.assign(state, {username, name, image, following, followers, posts})
    },
    ProfileFetchFailed(state){
      Object.assign(state, initial)
    }
  },
  actions: {
    [PROFILE.FETCH]({commit}, fetch_username){
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          const found_profile = mockProfiles.find(({username})=>username === fetch_username)
          if ( found_profile ) {
            commit('ProfileFetchSuccess', found_profile)
            resolve()
          } else {
            commit('ProfileFetchFailed')
            reject()
          }
        }, 300 /* simulate delay connect api server */)
      })
    }
  }
}