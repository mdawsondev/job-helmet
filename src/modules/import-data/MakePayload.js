import CreateCard from '../cards/CreateCard';
import FetchClean from './FetchClean';

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
    seen: existing.seen.concat(newSeen),
    nodes: existing.nodes.concat(newData),
    nodeless: existing.nodeless.concat(newNodeless)
  }
}

export default MakePayload;