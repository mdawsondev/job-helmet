import toJSON from './ToJSON'

export default function getData(url, type) {
  const corsProxy = 'https://cors-anywhere.herokuapp.com/';
  const output = fetch(corsProxy + url)
    .then(res => toJSON(res, type))
    .then(data => data)
    .catch(err => console.log(err));
  return output;
}

// .then(blob => type === 'xml' ? xmlToJSON(stringToXML(blob)) : blob)