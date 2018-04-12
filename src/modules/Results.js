import React, { Component } from 'react';

import Prepare from './import-data/Prepare';
import Search from './Search';
import TypeFilters from './search-features/TypeFilters';
import Sort from './search-features/Sort';
import './Results.css';

class Results extends Component {
  state = { display: '',
    sites: ['indeed', 'stackoverflow', 'github'],
    nodes: [],
    nodeless: [],
    seen: [],
    query: ''
  };

  componentDidMount() {
    const mins = 5;
    this.scrapeSites();
    setInterval(() => this.scrapeSites(), (60 * 1000) * mins);
  }

  updateResults = (query) => {
    Search.filterData(query, this.state)
      .then(res => this.setState(res));
  }

  applyFilter = (adjustedDisplay) => {
    this.setState({display: adjustedDisplay})
  }

  scrapeSites = () => {
    this.state.sites.forEach(site => {
      Prepare(site, this.state)
        .then(res => {
          this.setState({
            nodes: [...this.state.nodes, ...res.nodes],
            nodeless: [...this.state.nodeless, ...res.nodeless],
            seen: [...this.state.seen, ...res.seen]
          });

          if (!this.state.query) {
            this.setState({display: this.state.nodes});
          }
        });
    })
  }
  
  render() {
    return (
      <div className="Results">
        <Search className="SearchWrapper" update={this.updateResults}></Search>
        <div className="Found">
          <b>{this.state.display.length.toLocaleString('en-US')}</b> Positions Found
        </div>
        <TypeFilters craft={this.applyFilter} existing={this.state.nodes} />
        <Sort craft={this.applyFilter} existing={this.state} />
        <div className="CardWrapper">{this.state.display.slice(0, 100)}</div>
      </div>
    )
  }
}

export default Results;