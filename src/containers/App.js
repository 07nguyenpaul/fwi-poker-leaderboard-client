import React, { Component } from 'react';

import LeaderBoard from './LeaderBoard';
import Header from './Header';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LeaderBoard />
      </div>
    );
  }
}

export default App;
