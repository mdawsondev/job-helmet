// description:{#text: "DEVELOPER of People:. The Kitchen Manager serves i….com/jobs?l=Sheridan%2C+WY">Sheridan, WY jobs</a>"}
// georss:point:{#text: "44.786537 -106.96808"}
// guid:{@attributes: {…}, #text: "2448e33f9b4c80730768aba0fa196f44"}
// link:{#text: "http://www.indeed.com/viewjob?t=Kitchen+Manager&c=…jk=bd9ec1f871a658ea&rtk=1ca3lgmcbaeomea7&from=rss"}
// pubDate:{#text: "Tue, 20 Mar 2018 03:59:09 GMT"}
// source:{#text: "Rib & Chop House"}
// title:{#text: "Kitchen Manager - Rib & Chop House | Finally Restaurant Group - Sheridan, WY"}

import getData from '../import-data/GetData';
import adjustData from '../import-data/AdjustData';

const url = 'http://rss.indeed.com/rss?q=developer&l=NC';

const processData = function (data) {
  const realData = data.rss.channel.item;
  let output = {};

  for (let key in realData) {
    const entry = realData[key],
      txt = '#text';
      console.log(entry)

    output[key] = {
      'posted': entry.pubDate[txt],
      'title': entry.title[txt],
      'location': entry.title[txt].substring(entry.title[txt].lastIndexOf("-") + 1),
      'description': entry.description[txt],
      'app_url': entry.link[txt],
      'site': 'indeed'
    }
  }
  return output;
}

const Indeed = () =>
  getData(url, 'xml')
  .then(data => processData(data))
  .then(data => adjustData(data));

export default Indeed;