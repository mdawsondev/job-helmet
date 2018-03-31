import parseXML from './ParseXML';

export default function toJson(res, type) {
  try {
    if (type === 'xml') return parseXML(res);
    if (type === 'json') return res.json();
  }
  catch(err) {
    console.log("Unable to process XML or JSON, retuning .text()!");
    return res.text();
  }
}