import React from 'react';

export default class Search extends React.Component {
  static filterData = async (val, existing) => { 
    const query = val.toLowerCase(),
      simple = existing.nodeless,
      nodes = existing.nodes;

    const valid = simple.filter(el => el.title.includes(query)).map(e => e.id);
    const output = nodes.filter(el => valid.includes(el.key));

    return await { results: output }
  }

  handleChange = (e) => {
    this.props.update(e.target.value);
  }

  render() {
    return (
      <div>
        <input className="Search" type="text" value={this.props.query} placeholder="Search" onChange={this.handleChange} />
      </div>
    )
  }
}