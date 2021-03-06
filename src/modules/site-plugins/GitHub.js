import { Component } from 'react';
import getData from '../import-data/GetData';

export default class GitHub extends Component {
  static harvestData = async () => {
    const url = 'https://jobs.github.com/positions.json?description=&location=',
          pgCount = 3;

    const fetchLoop = async (count) => {
      let dataCollection = [];
      for (let i = 0; i < count; i++) {
        await getData(`${url}&page=${i}`, 'json')
        // eslint-disable-next-line        
        .then(data => dataCollection = [...dataCollection, ...data])
      }
      return dataCollection;
    }

    return await fetchLoop(pgCount).then(data => {
        return {'data': data, 'cb': this.a.processData}
      }
    );

  };
  
  //data.how_to_apply.match(/(?<=").+(?=")/),
  static processData = data => {
    return {
      'id': data.id,
      'posted': data.created_at,
      'title': data.title,
      'location': data.location,
      'position': data.type,
      'description': data.description,
      'app_url': `http://jobs.github.com/positions/${data.id}`,
      'company': data.company,
      'company_url': data.company_url,
      'company_logo': data.company_logo,
      'site_url': data.url,
      'site': 'GitHub'
    }
  }
}
