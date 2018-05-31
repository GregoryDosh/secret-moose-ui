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
  console.log(`Got Message`, action)
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
  yield throttle(500, types.CHANGE_USERNAME, sendName)
  yield takeLatest(WEBSOCKET_OPEN, sendName)
}

export default sagaHandler
