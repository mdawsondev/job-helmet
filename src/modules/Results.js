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
  state = { results: "Performing first scrape, please wait.",
  sites: ['github', 'indeed', 'stackoverflow'],
  nodes: [],
  seen: [],
  nodeless: [],
  query: '',
  isFirst: true,
};

componentDidMount() {
  const scrape = () => this.scrapeSites(this.state.sites);
  scrape();
  setInterval(() => scrape(), 10000)
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
        if (count === 3 && this.state.isFirst) {
          this.setState({results: this.state.nodes, isFirst: false});
        }
      });
    });
  }

  filterData = () => { // Does .find really make this faster?
    const output = [];
    const query = this.props.query.toLowerCase();
    const match = this.state.nodeless.map(el => {
      if (el.title.includes(query)) return el.id;
    })
    match.forEach(q => output.push(
      this.state.nodes.find(el => {
        return q === el.key;
      })
    ));
    this.setState({ results: output })
  }

  render() {
    return (
      <div className="Results">{this.state.results}</div>
    )
  }
}

export default Results;