import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ScrapeSite from './modules/ScrapeSite';

class App extends Component {
  state = { results: "Loading Data",
            firstRun: true }

  monitor = () => {
    setInterval(() => this.checkResults(), 30000);
  }
  
  init = () => {
    this.setState({firstRun: false});
    this.checkResults();
    this.monitor();    
  }
  checkResults = () => {
    ScrapeSite("indeed")
    .then(res => this.setState({results: res}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Job Helmet</h1>
        </header>

        <div className="Results">
          {this.state.results}
          {this.state.firstRun && this.init()}
        </div>
      </div>
    );
  }
}

export default App;
