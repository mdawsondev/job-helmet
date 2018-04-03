import React, { Component } from 'react';

import MakePayload from './import-data/MakePayload';
import ScrapeSite from './import-data/ScrapeSite';

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

  scrapeSites = (sites) => {
    const existingData = {
      nodes: this.state.nodes, 
      nodeless: this.state.nodeless, 
      seen: this.state.seen
    }

    let count = 0;

    sites.forEach(site => {
      ScrapeSite(site)
      .then(res => MakePayload(res, existingData))
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