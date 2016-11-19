import { profileMock } from './mocks'
import store from 'vuex'

export const apiFetchProfile = function(profile) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      const found_profile = profileMock.find(({username}) => username === profile)
      if ( found_profile ) {
        resolve(found_profile)
      } else {
        reject()
      }
    }, 300 /* simulate delay connect api server */)
  })
}

