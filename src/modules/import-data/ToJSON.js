import parseXML from './ParseXML';

export default function toJson(res: object, type: string) {
  let outRes: any = null;
  try {
    if (type === 'xml') outRes = parseXML(res);
    if (type === 'json') outRes = res.json();
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return outRes;    
  }
}