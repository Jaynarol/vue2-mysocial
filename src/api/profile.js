import { profileMock } from './mocks'

export const fetchProfileApi = function(fetch_username) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      const found_profile = profileMock.find(({username}) => username === fetch_username)
      if ( found_profile ) {
        resolve(found_profile)
      } else {
        reject()
      }
    }, 300 /* simulate delay connect api server */)
  })
}

