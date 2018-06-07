import Button from '@material-ui/core/Button'

import TextField from '@material-ui/core/TextField'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import PropTypes from 'prop-types'
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as gameActions from '../actions/gameActions'

const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: 0,
    marginRight: 0,
    width: 200,
  },
})

const GameList = ({classes, username, newGameName, gameList, gameActions}) => {
  return (
    <React.Fragment>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Game Name</TableCell>
            <TableCell numeric>Player Count</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Time Created</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { gameList.map(n => {
            return (
              <TableRow key={n.id} hover>
                <TableCell>{n.name}</TableCell>
                <TableCell numeric>{n.players.length}</TableCell>
                <TableCell>{n.status}</TableCell>
                <TableCell>{n.created}</TableCell>
                <TableCell>
                  <Button variant="raised" color="primary" className={classes.button} onClick={() => gameActions.joinGame(username, n.id)}>
                    Join
                  </Button>
                </TableCell>
              </TableRow>
            )
          })}
          <TableRow hover>
            <TableCell>New Game</TableCell>
            <TableCell>
              <TextField
                id="game_name"
                value={newGameName}
                className={classes.textField}
                onChange={(event) => gameActions.newGameNameChange(event.target.value)}
              />
            </TableCell>
            <TableCell />
            <TableCell />
            <TableCell>
              <Button variant="outlined" color="primary" className={classes.button} onClick={() => gameActions.createGame(newGameName)}>
                Create
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  )
}

GameList.propTypes = {
  classes: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
  gameList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    players: PropTypes.arrayOf(PropTypes.string).isRequired,
    status: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
  })),
  gameActions: PropTypes.shape({
    joinGame: PropTypes.func.isRequired,
    createGame: PropTypes.func.isRequired,
    newGameNameChange: PropTypes.func.isRequired,
  }).isRequired,
  newGameName: PropTypes.string.isRequired,
}

GameList.defaultProps = {
  username: '',
  classes: {},
  gameList: [],
  gameActions: {
    joinGame: () => {},
    createGame: () => {},
    newGameNameChange: () => {},
  },
  newGameName: '',
}

function mapStateToProps (state) {
  return {
    username: state.user.username,
    gameList: state.game.gameList,
    newGameName: state.user.newGameName,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    gameActions: bindActionCreators(gameActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(GameList))
