import getData from '../import-data/GetData';
import adjustData from '../import-data/AdjustData';

const url = 'https://stackoverflow.com/jobs/feed?';

// a10:author:{a10:name: {#text: "SYBO Games"}}
// a10:updated:{#text: "2018-03-31T10:48:14Z"}
// category:(6) [{#text: "linux"}, {…}, {…}, {…}, {…}, {…}]
// description:{#text: "<p>Would you like to be part of one of the most su…when working</li><br /></ul><br /><p><br><br></p>"}
// guid:{@attributes: {isPermaLink: "false"}, #text: "166621"}
// link:{#text: "https://stackoverflow.com/jobs/166621/lead-backend-engineer-sybo-games?a=TSwRdxKmArm"}
// location:{@attributes: {xmlns: "https://stackoverflow.com/jobs/"}, #text: "Copenhagen, Denmark"}
// pubDate:{#text: "Sat, 31 Mar 2018 10:48:14 Z"}
// title:{#text: "Lead Backend Engineer at SYBO Games (Copenhagen, Denmark)"}

const processData = function(data) {
  const realData = data.rss.channel.item;
  let output = {};

  for (let key in realData) {
    const entry = realData[key],
      txt = '#text';
    output[key] = {
      'posted': entry.pubDate[txt],
      'title': entry.title[txt],
      'location': entry.location[txt],
      'description': entry.description[txt],
      'company': entry['a10:author']['a10:name'][txt]
    }
  }
  return output;
}

const exec = () =>
  getData(url, 'xml')
  .then(data => processData(data))
  .then(data => adjustData(data));

export default exec;