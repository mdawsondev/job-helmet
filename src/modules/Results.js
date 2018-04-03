import React, { Component } from 'react';

import FetchClean from './import-data/FetchClean';
import ScrapeSite from './import-data/ScrapeSite';
import CreateCard from './cards/CreateCard';

class Results extends Component {
  state = { results: "Performing first scrape, please wait.",
  sites: ['indeed', 'stackoverflow'],
  nodes: [],
  seen: [],
  nodeless: [],
  query: '',
  isFirst: true,
};

componentDidMount() {
  const scrape = () => this.scrapeSites(this.state.sites);
  scrape();
  setInterval(() => scrape(), 60000)
}

componentWillReceiveProps(nextProps) {
  const query = nextProps.query;
  if (this.state.query !== query) {
    this.filterData(query);
    this.setState({query: query});
  }
}

  addData = (inData, cb) => {
    const data = ('rss' in inData) ? inData.rss.channel.item : inData;
    let newData = [],
      newSeen = [],
      newNodeless = [];
    
    for (let key in data) {
      const entry = data[key],
        rawCard = FetchClean(entry, cb);
      if (!this.state.seen.includes(rawCard.id)) {
        const card = CreateCard(rawCard);     
        newData.push(card);
        newSeen.push(rawCard.id);
        newNodeless.push({
          title: rawCard.title.toLowerCase(),
          id: rawCard.id
        })
      }
    }
    let output = {
      seen: this.state.seen.concat(newSeen),
      nodes: this.state.nodes.concat(newData),
      nodeless: this.state.nodeless.concat(newNodeless)
    }

    return output;
  }

  scrapeSites = (sites) => {
    let count = 0;
    sites.forEach(site => {
      ScrapeSite(site)
      .then(res => this.addData(res.data, res.cb))
      .then(res => {
        count++
        this.setState(res)
        if (count === this.state.sites.length && this.state.isFirst) {
          this.setState({results: this.state.nodes, isFirst: false});
        }
      });
    });
  }

  filterData = (val) => { 
    const query = val.toLowerCase(),
      simple = this.state.nodeless,
      nodes = this.state.nodes;

    const valid = simple.filter(el => el.title.includes(query)).map(e => e.id);
    const output = nodes.filter(el => valid.includes(el.key));

    this.setState({ results: output })
  }

  render() {
    return (
      <div className="Results">{this.state.results.slice(0, 100)}</div>
    )
  }
}

export default Results;