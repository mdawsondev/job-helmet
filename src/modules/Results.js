// Known Issues:
// - Very slow time-complexity for loading large volumes of data,
//  consider using flyweight for large volumes.
// - Filter function is very slow; should index titles and keys
//  to avoid having to pull so much data.
// - Search is ignoring latest change and processing old change.

import React, { Component } from 'react';

import FetchClean from './import-data/FetchClean';
import ScrapeSite from './import-data/ScrapeSite';
import CreateCard from './cards/CreateCard';

class Results extends Component {
  state = { results: "Loading Data",
  sites: ['github', 'indeed'] ,
  nodes: [],
  seen: [],
  query: this.props.query
};

componentDidMount() {
  const scrape = () => this.scrapeSites(this.state.sites);
  scrape();
  setInterval(() => scrape(), 60000)
}

componentWillReceiveProps(nextProps) {
  const query = nextProps.query;
  if (this.state.query !== query) {
    this.filterData();
    this.setState({query: query});
  }
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

  filterData = () => {
    const match = this.state.nodes.filter(node => {
      const head = node.props.children[0];
      const title = head.props.children.props.children.toLowerCase();
      return title.includes(this.props.query.toLowerCase());
    })
    this.setState({ results: match })
  }

  render() {
    return (
      <div className="Results">{this.state.results}</div>
    )
  }
}

export default Results;