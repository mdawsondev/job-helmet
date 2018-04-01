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
    'app_url',
    'site'
  ]

  for (let key in data) {
    const entry = data[key];
    let elList = [];
    for (let stdKey of stdKeys) {
      if (!entry.hasOwnProperty(stdKey)) entry[stdKey] = "unavailable";
      
      let temp = null;
      if (stdKey === 'description') { // Render description HTML properly.
        temp = (
          <details>
            <summary>Expand Job Description</summary>
            <span dangerouslySetInnerHTML={{__html: entry[stdKey]}}></span>
          </details>
        )
      }

      elList.push(
        <li className={stdKey} key={entry.site + stdKey + key}>
          <b>{stdKey}</b>: {temp || entry[stdKey]}
        </li>
      )
    }

    outData.push(<ul key={entry.site + key}>{elList}</ul>);
  }

  return outData;
}

export default adjustData;