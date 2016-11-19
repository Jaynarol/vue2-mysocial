import { authMock } from './mocks'

export const apiLoginRequest = function(username, password) {
   return authMock(username)
}
