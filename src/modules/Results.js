import React, { Component } from 'react';

import FetchClean from './import-data/FetchClean';
import ScrapeSite from './ScrapeSite';
import CreateCard from './CreateCard';

class Results extends Component {
  state = { results: "Loading Data",
            sites: ['github', 'indeed'],
            firstRun: true,
            nodes: [],
            seen: [] };

  componentDidMount() {
    const scrape = () => this.scrapeSites(this.state.sites);
    scrape();
    setInterval(() => scrape(), 60000)
  }

  addData = (inData, cb) => {
    const data = ('rss' in inData) ? inData.rss.channel.item : inData;
    for (let key in data) {
      const entry = data[key],
        seen = this.state.seen,
        nodes = this.state.nodes,
        rawCard = FetchClean(entry, cb),
        card = CreateCard(rawCard);
      
      if (!seen.includes(rawCard.id)) {
        this.setState({
          nodes: [...nodes, card],
          seen: [...seen, rawCard.id],
          results: nodes
        })
      }
    }
  }

  scrapeSites = (sites) => {
    sites.forEach(site => {
      ScrapeSite(site).then(res => this.addData(res.data, res.cb));
    });
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