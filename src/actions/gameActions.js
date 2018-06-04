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

export function newGameNameChange (name) {
  return {
    type: types.NEW_GAME_NAME_CHANGE,
    name,
  }
}

export function createGame (name) {
  return {
    type: types.CREATE_GAME,
    payload: {
      name,
    },
  }
}

export function updateGameList () {
  return {
    type: types.UPDATE_GAME_LIST,
  }
}
