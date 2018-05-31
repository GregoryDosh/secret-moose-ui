import createSagaMiddleware from 'redux-saga'
import persistState from 'redux-localstorage'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import websocket from '@samuelcastro/redux-websocket'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware(sagas)

const middleware = process.env.NODE_ENV !== 'production'
  ? [ reduxImmutableStateInvariant(), websocket, sagaMiddleware, thunk ]
  : [ sagaMiddleware, thunk ]

const persistStatePaths = ['user']

export default function configureStore () {
  let store
  if (process.env.NODE_ENV === 'production') {
    store = createStore(
      rootReducer,
      applyMiddleware(...middleware),
      persistState(persistStatePaths)
    )
  } else if (process.env.NODE_ENV === 'test') {
    store = createStore(
      rootReducer,
      applyMiddleware(...middleware)
    )
  } else {
    store = createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(...middleware)),
      persistState(persistStatePaths)
    )
  }
  sagaMiddleware.run(sagas)
  return store
}
