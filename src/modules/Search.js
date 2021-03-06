import React from 'react';
import FilterData from './search-features/FilterData';
import TypeFilters from './search-features/TypeFilters';
import Sort from './search-features/Sort';
import Blacklist from './search-features/Blacklist';

import './Search.css';

export default class Search extends React.Component {
  
  static filterData = (val, existing) => FilterData(val, existing);
  handleChange = (e) => this.props.update(e.target.value);

  render() {
    return (
      <div className="Search-wrapper">
        <div className="Search">
          <div className="Search-label"><i className="fas fa-search"></i><span className="Search-label-words">Filter</span></div>
          <input id="Search" className="Search-input" type="text"
            placeholder="Full Stack Developer" onChange={this.handleChange} />
        </div>
        <div className="Search-filters">
          <TypeFilters craft={this.props.craft} existing={this.props.existing.nodes} />
          <Sort craft={this.props.craft} existing={this.props.existing} />
        </div>
        <Blacklist blacklist={this.props.existing.blacklist} addBlacklist={this.props.addBlacklist}/>        
      </div>
    )
  }
}