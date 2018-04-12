import React from 'react';
import FilterData from './search-features/FilterData';
import SiteToggle from './search-features/SiteToggle';
import './Search.css';

export default class Search extends React.Component {
  
  static filterData = (val, existing) => FilterData(val, existing);
  handleChange = (e) => this.props.update(e.target.value);

  render() {
    return (
      <div className="SearchWrapper">
        <div className="Search">
          <div className="Search__label">Search available positions</div>
          <input id="Search" className="Search__input" type="text"
            placeholder="Front-end Developer" onChange={this.handleChange} />
        </div>
      </div>
    )
  }
}