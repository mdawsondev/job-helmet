import React from 'react';
import './Blacklist.css';

export default class Blacklist extends React.Component {

  handleEvent = () => {
    const blockType = document.querySelector(".BlacklistSelect").value;
    let inputEl = document.querySelector(".BlacklistInput"),
      input = inputEl.value;
      inputEl.value = '';
    this.props.addBlacklist([blockType, input]);
  }

  render() {
    return (
      <div className="Blacklist">
        <div className="BlacklistFunc">
          <p>Prevent <input className="BlacklistInput" type="text" placeholder="keyword" size="5" /> from appearing in&nbsp;
            <select className="BlacklistSelect">
              <option value="title">Titles</option>
              <option value="location" disabled>Locations</option>
              <option value="company" disabled>Companies</option>
              <option value="description" disabled>Descriptions</option>
            </select>
            &nbsp;<button className="Blacklist__btn" type="button" onClick={this.handleEvent}>Add</button>
          </p>
        </div>
        <div className="BlacklistWords">
          {this.props.blacklist.title}
        </div>
      </div>
    )
  }
}