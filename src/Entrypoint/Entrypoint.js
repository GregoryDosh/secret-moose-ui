import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { renderRoutes } from 'react-router-config'
import { withStyles } from '@material-ui/core/styles'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { WEBSOCKET_CONNECT, WEBSOCKET_DISCONNECT } from '@samuelcastro/redux-websocket'

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  header: {
    height: '64px',
  },
  body: {
    marginTop: '64px',
  },
})

class Layout extends React.Component {
  componentWillMount () {
    this.props.websocketActions.connectToServer()
  }

  componentWillUnmount () {
    this.props.websocketActions.disconnectToServer()
  }

  render () {
    const { classes, route, server } = this.props
    return (
      <div className={classes.root}>
        <Helmet>
          <title>Secret Moose</title>
        </Helmet>
        <div className={classes.header}>
          <AppBar>
            <Toolbar>
              <IconButton color="secondary" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" style={{flex: '1'}}>
                Secret Moose - { server.status }
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div className={classes.body}>
          {renderRoutes(route.routes)}
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  websocketActions: PropTypes.shape({
    connectToServer: PropTypes.func.isRequired,
    disconnectToServer: PropTypes.func.isRequired,
  }).isRequired,
  server: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
}

Layout.defaultProps = {
  classes: {},
  route: {
    routes: [],
  },
  server: {
    status: 'Disconnected',
  },
  websocketActions: {
    connectToServer: () => {},
    disconnectToServer: () => {},
  },
}

function mapStateToProps (state) {
  return {
    server: state.server,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    websocketActions: {
      connectToServer: () => {
        dispatch({
          type: WEBSOCKET_CONNECT,
          payload: {
            url: 'ws://localhost:9999',
          },
        })
      },
      disconnectToServer: () => {
        dispatch({
          type: WEBSOCKET_DISCONNECT,
        })
      },
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Layout))
