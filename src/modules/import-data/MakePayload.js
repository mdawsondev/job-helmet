import FetchClean from './FetchClean';
import React from 'react'
import Card from '../cards/Card';


const MakePayload = (res, existing) => {
  const inData = res.data,
    cb = res.cb,
    data = ('rss' in inData) ? inData.rss.channel.item : inData;

  let newData = [],
    newSeen = [],
    newNodeless = [];

  for (let key in data) {
    const entry = data[key],
      rawCard = FetchClean(entry, cb);
    if (!existing.seen.includes(rawCard.id)) {

      const card = <Card rawCard={rawCard} key={rawCard.id}></Card>;

      newData.push(card);
      newSeen.push(rawCard.id);
      newNodeless.push({
        title: rawCard.title.toLowerCase(),
        id: rawCard.id
      })
    }
  }

  return {
    seen: [...existing.seen, ...newSeen],
    nodes: [...existing.nodes, ...newData],
    nodeless: [...existing.nodeless, ...newNodeless]
  }
}

export default MakePayload;