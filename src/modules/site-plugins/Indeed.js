import { Component } from 'react';
import getData from '../import-data/GetData';

export default class Indeed extends Component {
  static harvestData = async () => {
    const url = 'http://rss.indeed.com/rss?q=developer&l=NC',
      resultsPerPage = 20,
      pgCount = 10,
      totalScrape = resultsPerPage * pgCount;

    const fetchLoop = async (count) => {
      let dataCollection = [],
        uniqueKeys = [];
      for (let i = 0; i < count; i = i + 20) {
        await getData(`${url}&start=${i}`, 'xml')
        // eslint-disable-next-line
        .then(data => {
          const rssArray = data.rss.channel.item,
            rssUnique = rssArray.filter(e => {
              const id = e.guid['#text'];
              return !uniqueKeys.includes(id) && uniqueKeys.push(id)
            });
          dataCollection = [...dataCollection, ...rssUnique];
        });
      }
      return dataCollection;
    }

    return await fetchLoop(totalScrape).then(data => {
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
