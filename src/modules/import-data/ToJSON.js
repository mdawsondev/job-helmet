import parseXML from './ParseXML';

export default function toJson(res, type) {
  let outRes = null;
  if (type === 'json') outRes = res.json();
  if (type === 'xml') outRes = res.text().then(str => parseXML(str));
  return outRes;
}