import { Component } from 'react';
import getData from '../import-data/GetData';

export default class Indeed extends Component {
  static harvestData = async () => {
    const url = 'http://rss.indeed.com/rss?q=developer&l=NC',
          pgCount = 300;

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
  
  // 'company': data.source[txt],
  static processData = data => {
    const txt = '#text',
      title = data.title[txt].split(' - ');
    return {
      'id': data.guid[txt],
      'posted': data.pubDate[txt],
      'title': title[0],
      'location': title[title.length - 1],
      'description': data.description[txt],
      'app_url': data.link[txt],
      'company': title[title.length - 2],
      'site': 'Indeed'
    }
  }
}
