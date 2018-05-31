import * as types from '../actions/actionTypes'

const initialState = {
  gameList: [
    {'id': 1, name: 'Lunchtime Brawl', players: 8, status: 'Started', created: '2 Minutes Ago'},
    {'id': 2, name: 'HH Checkin', players: 2, status: 'Created', created: '22 Minutes Ago'},
  ],
}

export default function gameReducer (state = initialState, action) {
  switch (action.type) {
    case types.JOIN_GAME:
      return {
        ...state,
      }
    default:
      return state
  }
}
