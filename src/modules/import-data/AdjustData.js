// This module will take an input of data and ensure all the standard
// keys have a value; if they aren't provided, it will provide one
// and return the object ready to be handled by React at this point.

const adjustData = (data) => {
  let outData = data;
  const stdKeys = [
    'posted',
    'title',
    'location',
    'position',
    'description',
    'company',
    'company_url',
    'app_url'
  ]

  for (let key in outData) {
    const entry = outData[key];
    for (let stdKey of stdKeys) {
      if (!entry.hasOwnProperty(stdKey)) {
        entry[stdKey] = "unavailable";
      }
    }
  }

  return outData;
}

export default adjustData;