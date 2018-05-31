import { combineReducers } from 'redux'
import game from './gameReducer'
import user from './userReducer'
import server from './serverReducer'

const rootReducer = combineReducers({
  user,
  game,
  server,
})

export default rootReducer
