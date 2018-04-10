export default async function FilterData(val, existing) {
    const query = val.toLowerCase(),
      simple = existing.nodeless,
      nodes = existing.nodes;
    const valid = simple.filter(el => el.title.includes(query)).map(e => e.id);
    const output = nodes.filter(el => valid.includes(el.key));

  return await { display: output,
                query: query }
}