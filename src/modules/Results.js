import React, { Component } from 'react';

import MakePayload from './import-data/MakePayload';
import ScrapeSite from './import-data/ScrapeSite';
import Search from './Search';

class Results extends Component {
  state = { results: "Performing first scrape, please wait.",
    sites: ['indeed', 'stackoverflow'],
    nodes: [],
    nodeless: [],
    query: '',
    seen: []
  };

  componentDidMount() {
    const scrape = () => this.processSites(this.state.sites);
    scrape();
    setInterval(() => scrape(), 60000)
  }

  componentWillReceiveProps(nextProps) {
    const query = nextProps.query;
    if (this.state.query !== query) {
      this.runSearch(query);
      this.setState({query: query});
    }
  }

  runSearch = (query) => {
    Search.filterData(query, this.state)
      .then(res => this.setState(res));
  }

  processSites = (sites) => {
    sites.forEach(site => {
      ScrapeSite(site)
        .then(res => MakePayload(res, this.state))
        .then(res => this.setState(res))
    });
  }

  render() {
    return (
      <div className="Results">{this.state.results.slice(0, 100)}</div>
    )
  }
}

export default Results;