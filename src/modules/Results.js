import React, { Component } from 'react';

import FetchClean from './import-data/FetchClean';
import ScrapeSite from './ScrapeSite';

class Results extends Component {
  state = { results: "Loading Data",
            firstRun: true,
            nodes: [],
            seen: [] };

  componentDidMount() {
    ScrapeSite("github").then(res => this.addData(res.data, res.cb));
    ScrapeSite("indeed").then(res => this.addData(res.data, res.cb));
    // ScrapeSite("stackoverflow").then(res => this.addData(res.data, res.cb));
  }

  addData = (inData, cb) => {
    const data = ('rss' in inData) ? inData.rss.channel.item : inData;
    for (let key in data) {
      const entry = data[key],
        seen = this.state.seen,
        nodes = this.state.nodes;
      
        const rawCard = FetchClean(entry, cb);
        if (!seen.includes(rawCard.id)) {
        console.log(nodes)
        this.setState({
          nodes: [...nodes, rawCard],
          seen: [...seen, rawCard.id]
        })
      }
    }
  }

  render() {
    return (
      <div className="Results">
        {this.state.results}
      </div>
    )
  }
}

export default Results;