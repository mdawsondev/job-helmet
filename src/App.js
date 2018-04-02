import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Results from './modules/Results';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Job Helmet</h1>
        </header>
        <Results></Results>
      </div>
    );
  }
}

export default App;
