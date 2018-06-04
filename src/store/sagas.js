import { WEBSOCKET_SEND, WEBSOCKET_MESSAGE, WEBSOCKET_CLOSED, WEBSOCKET_CONNECT, WEBSOCKET_OPEN } from '@samuelcastro/redux-websocket'
import * as types from '../actions/actionTypes'
import { throttle, put, takeLatest, takeEvery, select } from 'redux-saga/effects'
import apiConfig from '../config/apiConfig'

function * serverSend (action) {
  yield put({type: WEBSOCKET_SEND, payload: action})
}

function * websocketReconnect (action) {
  yield put({
    type: WEBSOCKET_CONNECT,
    payload: {
      url: apiConfig.websocket.host,
    },
  })
}

function * websocketMessageHandler (action) {
  /* eslint-disable no-console */
  let serverMessage = JSON.parse(action.payload.data)
  switch (serverMessage.type) {
    case types.GAME_LIST_UPDATED:
      yield put({
        type: types.GAME_LIST_UPDATED,
        games: serverMessage.payload,
      })
      break
    case types.USERNAME_CHANGED:
      yield put({
        type: types.USERNAME_CHANGED,
        username: serverMessage.payload,
      })
      break
    case types.GAME_JOINED:
      console.error(serverMessage.payload)
      break
    case types.GAME_LEFT:
      console.error(serverMessage.payload)
      break
    case 'ERROR':
      console.error(serverMessage.payload)
      break
    default:
      console.error(`Unknown type ${serverMessage.type} with value ${serverMessage.payload}`)
      break
  }
}

const getUsername = (state) => state.user.username

function * sendName () {
  const username = yield select(getUsername)
  yield put({
    type: WEBSOCKET_SEND,
    payload: {
      type: types.CHANGE_USERNAME,
      payload: {
        username,
      },
    },
  })
}

function * sagaHandler () {
  yield takeEvery(WEBSOCKET_MESSAGE, websocketMessageHandler)
  yield throttle(5000, WEBSOCKET_CLOSED, websocketReconnect)
  yield takeLatest(types.JOIN_GAME, serverSend)
  yield takeLatest(types.CREATE_GAME, serverSend)
  // This really should be debounce actually.  Throttle will still send
  // the first name change to the server which the server will then correct
  // and send back.  So this isn't as ideal I don't think.
  yield throttle(5000, types.CHANGE_USERNAME, sendName)
  yield takeLatest(WEBSOCKET_OPEN, sendName)
}

export default sagaHandler
