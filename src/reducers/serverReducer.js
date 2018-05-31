import { WEBSOCKET_CLOSED, WEBSOCKET_OPEN } from '@samuelcastro/redux-websocket'

const initialState = {
  status: 'Disconnected',
}

export default function gameReducer (state = initialState, action) {
  switch (action.type) {
    case WEBSOCKET_OPEN:
      return {
        ...state,
        status: 'Connected',
      }
    case WEBSOCKET_CLOSED:
      return {
        ...state,
        status: 'Disconnected',
      }
    default:
      return state
  }
}
