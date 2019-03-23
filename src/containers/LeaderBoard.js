import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Paper, Table, TableCell, TableBody, TableHead, TableRow } from '@material-ui/core';

import Player from '../components/Player';
import AddPlayerForm from '../components/AddPlayerForm';
import { addPlayer, fetchPlayers, editPlayer } from '../store/actions/players';

import './LeaderBoard.scss';

export class LeaderBoard extends Component {
  state = {
    country: '',
    earnings: '',
    firstName: '',
    lastName: '',
    id: '',
    open: false,
  };

  componentDidMount() {
    this.props.fetchPlayers();
  }

  toggleAddPlayerForm = () => {
    this.setState({open: !this.state.open, firstName: '', lastName: '', earnings: '', country: '', id: ''})
  };

  handleChange = (name, e) => {
    this.setState({ [name]: e.target.value });
  }

  handleClick = (e, id, firstName, lastName, earnings, country) => {
    e.preventDefault();

    this.toggleAddPlayerForm()
    this.setState({ country, earnings, firstName, id, lastName });
    this.renderForm()
  }

  onEdit = (e) => {
    e.preventDefault();
    const { firstName, lastName, earnings, country, id } = this.state;

    this.props.editPlayer(
      id,
      firstName,
      lastName,
      parseInt(earnings),
      country
    );

    return this.toggleAddPlayerForm();
  }

  renderPlayers() {
    return this.props.players.map((player, index) => (
      <Player
        country={player.country}
        earnings={parseInt(player.earnings)}
        firstName={player.firstName}
        index={index}
        key={player.id}
        id={player.id}
        lastName={player.lastName}
        handleClick={this.handleClick}
      />
    ));
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, earnings, country } = this.state;

    this.props.addPlayer(
      firstName,
      lastName,
      parseInt(earnings),
      country
    );

    return this.toggleAddPlayerForm();
  }

  renderForm() {
    return (
      <AddPlayerForm
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        earnings={this.state.earnings}
        country={this.state.country}
        open={this.state.open}
        toggleAddPlayerForm={this.toggleAddPlayerForm}
        onChange={this.handleChange}
        onSubmit={this.onSubmit}
        onEdit={this.onEdit}
        playerID={this.state.id}
      />
    )
  }

  render() {
    const { players } = this.props;

    return (
      <div className="LeaderBoard__container">
        <Button variant="contained" color="primary" className="btn--add-player" onClick={this.toggleAddPlayerForm}>
          Add Player
        </Button>
        {this.renderForm()}
        <Paper>
          <Table className="player__table">
            <TableHead>
              <TableRow className="player__table--columns">
                <TableCell>Player</TableCell>
                <TableCell align="right">Winnings</TableCell>
                <TableCell align="right">Native Of</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {players && players.length >= 0 ? this.renderPlayers() : null}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.players.users,
  };
};

const mapDispatchToProps = {
  addPlayer,
  editPlayer,
  fetchPlayers,
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);
