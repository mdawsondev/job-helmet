import toJSON from './ToJSON'

export default async function getData(url, type) {
  const corsProxy = 'https://cors-anywhere.herokuapp.com/';
  const output = fetch(corsProxy + url)
    .then(res => res.ok ? toJSON(res, type) : []) // Return blank array to stop 503 errors.
    .then(data => data)
    .catch(err => console.log(err));
  return await output;
}
