import * as types from './actionTypes'

export function joinGame (name, id) {
  return {
    type: types.JOIN_GAME,
    payload: {
      name,
      id,
    },
  }
}

export function updateGameList () {
  return {
    type: types.UPDATE_GAME_LIST,
  }
}
