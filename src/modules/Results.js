import React, { Component } from 'react';

import Prepare from './import-data/Prepare';
import Search from './Search';
import './Results.css';

class Results extends Component {
  state = { display: '',
    sites: ['indeed', 'stackoverflow', 'github'],
    nodes: [],
    nodeless: [],
    seen: [],
  };

  componentDidMount() {
    this.scrapeSites();
    setInterval(() => this.scrapeSites(), 60 * 1000);
  }

  runSearch = (query) => {
    Search.filterData(query, this.state)
      .then(res => this.setState(res));
  }

  scrapeSites = () => {
    this.state.sites.forEach(site => {
      Prepare(site, this.state)
        .then(res => this.setState({
          display: [...this.state.nodes, ...res.nodes],
          nodes: [...this.state.nodes, ...res.nodes],
          nodeless: [...this.state.nodeless, ...res.nodeless],
          seen: [...this.state.seen, ...res.seen]
        }));
    })
  }
  
  render() {
    return (
      <div className="Results">
        <Search className="SearchWrapper" update={this.runSearch}></Search>
        <div className="Found"><b>{this.state.display.length.toLocaleString('en-US')}</b> Positions Found</div>
        <div className="CardWrapper">{this.state.display.slice(0, 100)}</div>
      </div>
    )
  }
}

export default Results;