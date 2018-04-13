export default async function FilterData(val, existing) {
    const query = val.toLowerCase(),
      simple = existing.nodeless,
      nodes = existing.nodes,
      blacklist = existing.blacklist;
      
    const valid = simple.filter(el => el.title.includes(query)).map(e => e.id);
    const output = nodes.filter(el => valid.includes(el.key)).filter(el => {
      let words = el.props.rawCard.title.toLowerCase().replace(/-\(\)\.,/g, ' ').split(' ')
      const checker = words.every(e => {
        return !blacklist.title.includes(e);
      })
      return checker ? el : '';
    });

  return await {
    display: output,
    query: query
  }
}