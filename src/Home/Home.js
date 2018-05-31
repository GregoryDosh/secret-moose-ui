import PropTypes from 'prop-types'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Games from '../Games/Games.js'
import UserInfo from '../UserInfo/UserInfo.js'

const styles = (theme) => ({
  root: {
  },
  paper: {
    width: 'auto',
    maxWidth: '500px',
    margin: '0 auto',
  },
})

class Home extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.paper}>
          <Typography variant="display3" component="h1" align="center">
            Welcome
          </Typography>
          <Typography variant="subheading" align="center">
            Click to join (or create) a room below.
          </Typography>
          <UserInfo />
          <Games />
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

Home.defaultProps = {
  classes: {},
}

export default withStyles(styles)(Home)
