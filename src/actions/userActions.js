import * as types from './actionTypes'

export function changeUsername (username) {
  return {
    type: types.CHANGE_USERNAME,
    username,
  }
}
