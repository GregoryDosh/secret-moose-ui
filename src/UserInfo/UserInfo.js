import PropTypes from 'prop-types'
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import * as userActions from '../actions/userActions'

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  wrapper: {
    borderColor: theme.palette.primary.light,
    borderStyle: 'outset',
    margin: theme.spacing.unit,
  },
})

const UserInfo = ({classes, username, userActions}) => {
  return (
    <div className={classes.wrapper}>
      <Typography variant="title" component="h3" align="center">
        User Information
      </Typography>
      <TextField
        id="name"
        label="Name"
        value={username}
        className={classes.textField}
        onChange={(event) => userActions.changeUsername(event.target.value)}
        margin="normal"
      />
    </div>
  )
}

UserInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
  userActions: PropTypes.shape({
    changeUsername: PropTypes.func.isRequired,
  }).isRequired,
}

UserInfo.defaultProps = {
  username: '',
  classes: {},
  gameList: [],
  userActions: {
    changeUsername: () => {},
  },
}

function mapStateToProps (state) {
  return {
    username: state.user.username,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserInfo))
