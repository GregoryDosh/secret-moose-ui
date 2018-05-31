import * as types from '../actions/actionTypes'

const initialState = {
  username: 'Me',
}

export default function gameReducer (state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_USERNAME:
      return {
        ...state,
        username: action.username,
      }
    default:
      return state
  }
}
