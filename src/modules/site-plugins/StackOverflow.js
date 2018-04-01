import getData from '../import-data/GetData';
import adjustData from '../import-data/AdjustData';

const url = 'https://stackoverflow.com/jobs/feed?';

const processData = function(data) {
  let output = data;
  // for (let key in data) {
  //   const entry = data[key];
  //   output[key] = {
  //     'posted': entry.created_at,
  //     'title': entry.title,
  //     'location': entry.location,
  //     'position': entry.type,
  //     'description': entry.description,
  //     'company': entry.company,
  //     'company_url': entry.company_url
  //   }
  // }
  return output;
}

const exec = () =>
  getData(url, 'xml')
  // .then(data => processData(data))
  // .then(data => adjustData(data));

export default exec;