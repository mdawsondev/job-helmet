import React from 'react';
import './Sort.css';

export default class TypeFilter extends React.Component {
  
  sortBy = (e) => {
    const newDisplay = this.props.existing.query.length > 0 ? this.props.existing.display.map(el => el) : this.props.existing.nodes.map(el => el)
    const type = document.querySelector(".SortOption");
    newDisplay.sort((a, b) => {
      let x, y;
      if (type.value === 'name') {
        x = a.props.rawCard.title;
        y = b.props.rawCard.title;
      }
      if (type.value === 'time') {
        x = b.props.rawCard.postedMS;
        y = a.props.rawCard.postedMS;
      }
      
      return (x > y) ? 1 : ((y > x) ? -1 : 0)
    });
    this.props.craft(newDisplay)
  }

  render() {
    return (
      <div className="Sort">
        <select className="SortOption">
          <option value="name">Name</option>
          <option value="time">Newest</option>
        </select>
        <button type="button" value="name" onClick={this.sortBy}><i className="fas fa-arrow-alt-circle-left fa-sm"></i> Sort</button>
      </div>
    )
  }
}