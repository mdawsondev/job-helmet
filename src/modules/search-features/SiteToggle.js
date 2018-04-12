// MAY BE REMOVED

import React from 'react';

export default class SiteToggle extends React.Component {
  toggleSite = (e) => {
    this.props.handleToggle([e.target.value, e.target.checked])
  }

  render() {
    return (
      <div className="Site-Buttons">
        <input type="checkbox" value="github" onChange={this.toggleSite}  />GH
        <input type="checkbox" value="indeed" onChange={this.toggleSite}  />IN
        <input type="checkbox" value="stackoverflow" onChange={this.toggleSite}  />SO
      </div>
    )
  }
}