import React from 'react';

export default class Search extends React.Component {
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