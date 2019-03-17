import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPlayers } from '../store/actions/players';

import './LeaderBoard.scss';

export class LeaderBoard extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPlayers());
  }

  render() {
    return (
      <div className="App-header">
        Start here
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    players: state.players.players,
  };
};

export default connect(mapStateToProps)(LeaderBoard);
