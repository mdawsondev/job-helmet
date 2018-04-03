import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Results from './modules/Results';
import Search from './modules/Search';

class App extends Component {
  state = { query: '' };

  update = (input) => {
    this.setState({ query: input })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Job Helmet</h1>
        </header>
        <Search query={this.state.query} update={this.update}></Search>
        <Results query={this.state.query}></Results>
      </div>
    );
  }
}

export default App;
