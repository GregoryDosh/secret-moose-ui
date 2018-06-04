import * as types from '../actions/actionTypes'

const initialState = {
  gameList: [],
  // gameList: [
  //   {'id': '1', name: 'Lunchtime Brawl', players: 8, status: 'Started', created: '2 Minutes Ago'},
  //   {'id': '2', name: 'HH Checkin', players: 2, status: 'Created', created: '22 Minutes Ago'},
  // ],
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
