import { PROFILE } from '../types'

const mock = [
  {username: 'jaynarol', name: 'Jaynarol Nova', image: '/static/imgs/friends/guy-3.jpg', following: 312, followers: 599, mefollow: false, posts: 16},
  {username: 'jefer', name: 'Jefer Smitch', image: '/static/imgs/friends/guy-2.jpg', following: 12, followers: 9, mefollow: true, posts: 453},
  {username: 'kodia', name: 'Kodia Nonoma', image: '/static/imgs/friends/guy-9.jpg', following: 125, followers: 9, mefollow: true, posts: 29},
  {username: 'aliss', name: 'Aliss Avenue', image: '/static/imgs/friends/woman-1.jpg', following: 4, followers: 9956, mefollow: false, posts: 536},
  {username: 'dokey', name: 'Dokey Surface', image: '/static/imgs/friends/child-1.jpg', following: 2, followers: 4, mefollow: false, posts: 1},
  {username: 'ashe', name: 'Ashe Romanop', image: '/static/imgs/friends/woman-2.jpg', following: 546, followers: 456456, mefollow: true, isme: false, posts: 45},
  {username: 'jonh', name: 'Jonh Umblura', image: '/static/imgs/friends/guy-8.jpg', following: 355, followers: 4, mefollow: true, posts: 54}
]

export default {
  state:[],
  actions: {
    [PROFILE.FETCH]({}, profile){
      return new Promise((resolve, reject) => {
        setTimeout(()=> {
          const found_profile = mock.find(({username}) => username === profile)
          found_profile ? resolve(found_profile) : reject()
        }, 300 /* simulate delay connect api server */)
      })
    },
    [PROFILE.FOLLOW]({commit}, profile){
      return new Promise((resolve, reject) => {
        mock.find(({username}) => username===profile).mefollow = true // simulate api change in server

        commit('FriendFollow', profile)
        resolve(true)
      })
    },
    [PROFILE.UNFOLLOW]({commit}, profile){
      return new Promise((resolve, reject) => {
        mock.find(({username}) => username===profile).mefollow = false // simulate api change in server

        commit('FriendUnfollow', profile)
        resolve(false)
      })
    }
  }
}