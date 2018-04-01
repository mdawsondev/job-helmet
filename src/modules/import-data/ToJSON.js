import parseXML from './ParseXML';

export default function toJson(res: object, type: string) {
  let outRes: any = null;
  if (type === 'json') outRes = res.json();
  if (type === 'xml') outRes = res.text().then(str => parseXML(str));
  return outRes;
}