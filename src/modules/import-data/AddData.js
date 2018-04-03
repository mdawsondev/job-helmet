import CreateCard from '../cards/CreateCard';
import FetchClean from './FetchClean';

const AddData = (inData, cb, payload) => {
  const data = ('rss' in inData) ? inData.rss.channel.item : inData;
  let newData = [],
    newSeen = [],
    newNodeless = [];
  
  for (let key in data) {
    const entry = data[key],
      rawCard = FetchClean(entry, cb);
    if (!payload.seen.includes(rawCard.id)) {
      const card = CreateCard(rawCard);     
      newData.push(card);
      newSeen.push(rawCard.id);
      newNodeless.push({
        title: rawCard.title.toLowerCase(),
        id: rawCard.id
      })
    }
  }

  return {
    seen: payload.seen.concat(newSeen),
    nodes: payload.nodes.concat(newData),
    nodeless: payload.nodeless.concat(newNodeless)
  }
}

export default AddData;