import React, { Component } from 'react';
import getData from '../import-data/GetData';

export default class Indeed extends Component {
  state = { url: 'http://rss.indeed.com/rss?q=developer&l=NC'}
  
  harvestData = async () => {
    return await getData(this.state.url, 'xml')
      .then(data => {
        return {'data': data, 'cb': this.processData}
      });
  };
  
  processData = data => {
    const txt = '#text';
    return {
      'id': data.guid[txt],
      'posted': data.pubDate[txt],
      'title': data.title[txt],
      'location': data.title[txt].substring(data.title[txt].lastIndexOf("-") + 1),
      'description': data.description[txt],
      'app_url': data.link[txt],
      'company': data.source[txt],
      'site': 'indeed'
    }
  }

  render() {
    return (
      <div>{this.harvestData()}</div>
    )
  }
}
