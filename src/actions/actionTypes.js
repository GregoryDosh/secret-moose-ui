// These are actions not leaving the frontned
export const NEW_GAME_NAME_CHANGE = 'NEW_GAME_NAME_CHANGE'

// These are the types sent through the websocket
export const CHANGE_USERNAME = 'CHANGE_USERNAME'
export const CREATE_GAME = 'CREATE_GAME'
export const JOIN_GAME = 'JOIN_GAME'
export const LEAVE_GAME = 'LEAVE_GAME'
export const UPDATE_GAME_LIST = 'UPDATE_GAME_LIST'
export const UPDATE_GAME_INFO = 'UPDATE_GAME_INFO'

// These are the types received from the websocket
export const USERNAME_CHANGED = 'USERNAME_CHANGED'
export const GAME_CREATED = 'GAME_CREATED'
export const GAME_JOINED = 'GAME_JOINED'
export const GAME_LEFT = 'GAME_LEFT'
export const GAME_LIST_UPDATED = 'GAME_LIST_UPDATED'
export const GAME_INFO_UPDATED = 'GAME_INFO_UPDATED'
