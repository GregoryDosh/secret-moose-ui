import { WEBSOCKET_SEND, WEBSOCKET_MESSAGE, WEBSOCKET_CLOSED, WEBSOCKET_CONNECT } from '@samuelcastro/redux-websocket'
import * as types from '../actions/actionTypes'
import { throttle, put, takeLatest, takeEvery } from 'redux-saga/effects'
import apiConfig from '../config/apiConfig'

function * joinGame (action) {
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

function * sagaHandler () {
  yield takeEvery(WEBSOCKET_MESSAGE, websocketMessageHandler)
  yield throttle(5000, WEBSOCKET_CLOSED, websocketReconnect)
  yield takeLatest(types.JOIN_GAME, joinGame)
}

export default sagaHandler
