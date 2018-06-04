import * as types from '../actions/actionTypes'

const initialState = {
  gameList: [],
}

export default function gameReducer (state = initialState, action) {
  switch (action.type) {
    case types.GAME_LIST_UPDATED:
      let gameList = []
      for (let g in action.games) {
        gameList.push({
          id: g,
          ...action.games[g],
        })
      }
      return {
        ...state,
        gameList,
      }
    case types.JOIN_GAME:
      return {
        ...state,
      }
    default:
      return state
  }
}
