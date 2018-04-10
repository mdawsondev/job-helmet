import { Component } from 'react';
import getData from '../import-data/GetData';

export default class Indeed extends Component {
  static harvestData = async () => {
    const url = 'http://rss.indeed.com/rss?q=developer&l=NC',
          pgCount = 400;

    const fetchLoop = async (count) => {
      let dataCollection = [];
      for (let i = 0; i < count; i = i + 20) {
        await getData(`${url}&start=${i}`, 'xml')
        // eslint-disable-next-line
        .then(data => dataCollection = [...dataCollection, ...data.rss.channel.item]);
      }
      return dataCollection;
    }

    return await fetchLoop(pgCount).then(data => {
        return {'data': data, 'cb': this.a.processData}
      }
    );

  };
  
  static processData = data => {
    const txt = '#text';
    return {
      'id': data.guid[txt],
      'posted': data.pubDate[txt],
      'title': data.title[txt],
      'location': data.title[txt].substring(data.title[txt].lastIndexOf("-") + 1),
      'description': data.description[txt],
      'app_url': data.link[txt],
      'company': data.source[txt],
      'site': 'Indeed'
    }
  }
}
