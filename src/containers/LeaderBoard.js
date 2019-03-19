import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper, Table, TableCell, TableHead, TableRow } from '@material-ui/core';

import Player from '../components/Player';
import { fetchPlayers } from '../store/actions/players';

import './LeaderBoard.scss';

export class LeaderBoard extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPlayers());
  }

  renderPlayers() {
    return this.props.players.map((player, index) => (
      <Player
      country={player.country}
      earnings={player.earnings}
      firstName={player.firstName}
      index={index}
      key={player.id}
      lastName={player.lastName}
      />
    ))
  }

  render() {
    const { players } = this.props;

    return (
      <Paper className="LeaderBoard__container">
        <Table className="player__table">
          <TableHead>
            <TableRow className="player__table--columns">
              <TableCell>Player</TableCell>
              <TableCell align="right">Winnings</TableCell>
              <TableCell align="right">Native Of</TableCell>
            </TableRow>
          </TableHead>
          {players && players.length >= 0 ? this.renderPlayers() : null}
        </Table>
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.players.users,
  };
};

export default connect(mapStateToProps)(LeaderBoard);
