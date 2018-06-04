import * as types from '../actions/actionTypes'

const initialState = {
  username: 'Me',
  newGameName: 'New Game',
}

export default function gameReducer (state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_USERNAME:
    case types.USERNAME_CHANGED:
      return {
        ...state,
        username: action.username,
      }
    case types.NEW_GAME_NAME_CHANGE:
      return {
        ...state,
        newGameName: action.name,
      }
    default:
      return state
  }
}
