// This module will take an input of data and ensure all the standard
// keys have a value; if they aren't provided, it will provide one
// and return the object ready to be handled by React at this point
// as a react object.

import React from 'react';

const adjustData = (data) => {
  let outData = [];
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

  for (let key in data) {
    const entry = data[key];
    let elList = [];
    
    for (let stdKey of stdKeys) {
      if (!entry.hasOwnProperty(stdKey)) entry[stdKey] = "unavailable";
      elList.push(<li class={stdKey}>{entry[stdKey]}</li>)
    }

    outData.push(<ul>{elList}</ul>);
  }

  return outData;
}

export default adjustData;