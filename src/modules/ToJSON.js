import parseXML from './ParseXML';

export default function toJson(res: object, type: string) {
  let outRes: any = null;
  try {
    if (!res || res === {} || typeof res !== 'object') throw 'res is broken!';
    if (!type || typeof type !== 'string') throw 'type is broken!';
    if (type === 'xml') outRes = parseXML(res);
    if (type === 'json') outRes = res.json();
    if (!outRes) throw 'Failed to process outRes!'
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return outRes;    
  }
}