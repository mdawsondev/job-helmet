import { Component } from 'react';
import getData from '../import-data/GetData';

export default class StackOverflow extends Component {
  static harvestData = async () => {
    const url = 'https://stackoverflow.com/jobs/feed?'
    return await getData(url, 'xml')
      .then(data => {
        return {'data': data, 'cb': this.a.processData}
      });
  };
  
  static processData = data => {
    const txt = '#text';
    return {
      'id': data.guid[txt],
      'posted': data.pubDate[txt],
      'title': data.title[txt],
      'location': data.location ? data.location[txt] : 'Unknown',
      'description': data.description[txt],
      'category': data.category,
      'company': data['a10:author']['a10:name'][txt],
      'site': 'StackOverflow',
      'app_url': `https://stackoverflow.com/jobs/${data.guid[txt]}`
    }
  }
}
