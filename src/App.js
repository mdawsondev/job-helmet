import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ScrapeSite from './modules/CollectImports';

ScrapeSite("github").then(data => console.log(data));
ScrapeSite("stackoverflow").then(data => console.log(data));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Job Helmet</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <div className="Results">
        </div>    
      
      </div>
    );
  }
}

export default App;
