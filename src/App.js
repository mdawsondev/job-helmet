import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import Results from './modules/Results';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Job Helmet</h1>
          <p className="App-intro">Blast off into job land! <i className="fas fa-rocket fa-xs"></i></p>
        </header>
        <Results></Results>
      </div>
    );
  }
}

export default App;
