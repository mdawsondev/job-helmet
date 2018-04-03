import { Component } from 'react';
import getData from '../import-data/GetData';

export default class GitHub extends Component {
  static harvestData = async () => {
    const url = "https://jobs.github.com/positions.json?description=&location="
    return await getData(url, 'json')
      .then(data => {
        return {'data': data, 'cb': this.a.processData}
      });
  };
  
  static processData = data => {
    return {
      'id': data.id,
      'posted': data.created_at,
      'title': data.title,
      'location': data.location,
      'position': data.type,
      'description': data.description,
      'app_url': data.how_to_apply,
      'company': data.company,
      'company_url': data.company_url,
      'company_logo': data.company_logo,
      'site_url': data.url,
      'site': 'gh'
    }
  }
}
