import React from 'react';
import FilterData from './search-features/FilterData';

export default class Search extends React.Component {
  
  static filterData = (val, existing) => FilterData(val, existing);
  handleChange = (e) => this.props.update(e.target.value);

  render() {
    return (
      <div>
        <input className="Search" type="text" placeholder="Search" onChange={this.handleChange} />
      </div>
    )
  }
}