import 'typeface-roboto'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import { grey } from '@material-ui/core/colors'
import { renderRoutes } from 'react-router-config'

import configureStore from './store/configureStore'
import { routerConfig } from './config/routerConfig'
import './index.scss'

const store = configureStore()
const rootElement = document.getElementById('root')

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#FF987E',
      main: '#f0654b',
      dark: '#BD3218',
      contrastText: '#fff',
    },
    secondary: grey,
  },
})

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={muiTheme}>
      <BrowserRouter>
        {renderRoutes(routerConfig)}
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>, rootElement
)
