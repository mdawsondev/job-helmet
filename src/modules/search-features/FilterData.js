export default async function FilterData(val, existing) {
    const query = val.toLowerCase(),
      lastQuery = existing.query,
      display = existing.display,
      nodes = existing.nodes,
      blacklist = existing.blacklist;

    const results = query.length > lastQuery.length ? display : nodes;
    
    const output = results.filter(el => {
      const title = el.props.rawCard.title.toLowerCase(),
        words = title.replace(/-\(\)\.,/g, ' ').split(' ');

      if (title.indexOf(query) !== -1) {
        return words.every(word => !blacklist.title.includes(word))
      }
    });

  return await {
    display: output,
    query: query
  }
}