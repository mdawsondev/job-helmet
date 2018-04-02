import React, { Component } from 'react';
import ScrapeSite from './ScrapeSite';
import GitHub from './site-plugins/GitHub'

class Results extends Component {
  state = { results: "Loading Data",
            firstRun: true }
  
  // monitor = () => {
  //   setInterval(() => this.checkResults(), 30000);
  // }
  
  // init = () => {
  //   this.setState({firstRun: false});
  //   this.checkResults();
  //   this.monitor();    
  // }

  // checkResults = () => {
  //   ScrapeSite("github")
  //   .then(res => this.setState({results: res}));
  // }

  render() {
    return (
      <div className="Results">
        {this.state.results}
        <GitHub></GitHub>
      </div>
    )
  }
}

export default Results;