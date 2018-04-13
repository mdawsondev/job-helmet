import React from 'react';
import FilterData from './search-features/FilterData';
import './Search.css';

export default class Search extends React.Component {
  
  static filterData = (val, existing) => FilterData(val, existing);
  handleChange = (e) => this.props.update(e.target.value);

  render() {
    return (
      <div className="SearchWrapper">
        <div className="Search">
          <div className="Search__label"><i class="fas fa-search"></i>&nbsp;Search Positions</div>
          <input id="Search" className="Search__input" type="text"
            placeholder="Front-end Developer" onChange={this.handleChange} />
        </div>
      </div>
    )
  }
}