import React, { Component } from 'react';
import getData from '../import-data/GetData';

export default class StackOverflow extends Component {
  state = { url: 'https://stackoverflow.com/jobs/feed?'}
  
  harvestData = (props) => {
      getData(this.state.url, 'xml')
      .then(data => this.props.pushData(data, this.processData))
  };
  
  processData = data => {
    const txt = '#text';
    return {
      'id': data.guid[txt],
      'posted': data.pubDate[txt],
      'title': data.title[txt],
      // 'location': data.location[txt],
      'description': data.description[txt],
      'category': data.category,
      'company': data['a10:author']['a10:name'][txt],
      'site': 'so'
    }
  }

  render() {
    return (
      <div>{this.harvestData()}</div>
    )
  }
}
