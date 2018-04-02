import React, { Component } from 'react';

import FetchClean from './import-data/FetchClean';
import ScrapeSite from './ScrapeSite';
import GitHub from './site-plugins/GitHub'
import Indeed from './site-plugins/Indeed'
import StackOverflow from './site-plugins/StackOverflow'

class Results extends Component {
  state = { results: "Loading Data",
            firstRun: true,
            nodes: [],
            seen: [] };

  addData = (inData, cb) => {
    const data = ('rss' in inData) ? inData.rss.channel.item : inData;
    for (let key in data) {
      const entry = data[key],
        seen = this.state.seen,
        nodes = this.state.nodes;
      
        const rawCard = FetchClean(entry, cb);
        if (!seen.includes(rawCard.id)) {
        this.setState({
          nodes: [...nodes, rawCard],
          seen: [...seen, rawCard.id]
        })
      }
    }
  console.log(this.state.nodes);
  }

  render() {
    return (
      <div className="Results">
        {this.state.results}
        <GitHub pushData={this.addData}></GitHub>
        <Indeed pushData={this.addData}></Indeed>
        {/* <StackOverflow pushData={this.addData}></StackOverflow> */}
      </div>
    )
  }
}

export default Results;