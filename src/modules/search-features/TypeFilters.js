import React from 'react';

export default class TypeFilter extends React.Component {
  
  typeFilter = (e) => {
    const newDisplay = this.props.existing.filter(el => {
      const req = e.target.value;
      let out;
      if (req === 'hidden') out = el.props.rawCard.isHidden;
      if (req === 'saved') out = el.props.rawCard.isFavorite;
      if (req === 'all') out = el;
      return out;
    })
    this.props.craft(newDisplay)
  }

  render() {
    return (
      <div className="TypeFilter">
        <button type="button" value="hidden" onClick={this.typeFilter}>Hidden Only</button>
        <button type="button" value="saved" onClick={this.typeFilter}>Saved Only</button>
        <button type="button" value="all" onClick={this.typeFilter}>Show All</button>
      </div>
    )
  }
}