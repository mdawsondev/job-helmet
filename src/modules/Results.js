import React, { Component } from 'react';
import ScrapeSite from './ScrapeSite';

class Results extends Component {
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
      <div className="Results">
        {this.state.results}
        {this.state.firstRun && this.init()}
      </div>
    )
  }
}

export default Results;