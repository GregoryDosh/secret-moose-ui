import merge from 'lodash/merge'

const baseConfig = {
  websocket: {
    host: '',
  },
}

const environmentConfigs = {
  development: {
    websocket: {
      host: 'ws://localhost:9999',
    },
  },
  production: {
    websocket: {
      host: 'wss://',
    },
  },
}

const currentConfig = environmentConfigs[process.env.NODE_ENV]

export default merge(baseConfig, currentConfig)
