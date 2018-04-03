import React, { Component } from 'react';

import Prepare from './import-data/Prepare';
import Search from './Search';

class Results extends Component {
  state = { results: "Performing first scrape, please wait.",
    sites: ['indeed', 'stackoverflow'],
    nodes: [],
    nodeless: [],
    seen: []
  };

  componentDidMount() {
    this.scrapeSites();
    setInterval(() => this.scrapeSites(), 60000);
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

  scrapeSites = () => {
    this.state.sites.forEach(site => {
      Prepare(site, this.state)
        .then(res => this.setState(res));
    })
  }

  render() {
    return (
      <div className="Results">
        <Search update={this.runSearch}></Search>      
        <div className="List">{this.state.results.slice(0, 100)}</div>
      </div>
    )
  }
}

export default Results;