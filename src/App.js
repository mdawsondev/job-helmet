import React, { Component } from 'react';
import Header from './modules/Header';
import Results from './modules/Results';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <hr className="Page-break" />
        <Results />
      </div>
    );
  }
}

export default App;
