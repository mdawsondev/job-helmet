import React from 'react';

export default class CardFuncs extends React.Component {
  hide = () => this.props.cardFuncs.hide();
  save = (e) => {
    this.props.cardFuncs.fav();
    let color = e.target.style.color;
    color === '' ?  e.target.style.color = 'goldenrod' : e.target.style.color = '';
  }

  render() {
    return (
      <div className="Card-Functions">
        <p className="Card-Hide" onClick={this.hide}>
          <i className="fas fa-eye-slash" style={{opacity: .3}} aria-hidden="true"></i>&nbsp;
          {this.props.cardState.isHidden ? 'Unhide' : 'Hide'}
        </p>
        <p className="Card-Star" onClick={this.save}>
          <i className="fas fa-star" style={{opacity: .3}} aria-hidden="true"></i>&nbsp;
          {this.props.cardState.isFavorite ? 'Unsave' : 'Save'}
          </p>
        <p className="Card-Apply">
          <i className="fas fa-thumbs-up" style={{opacity: .3}}aria-hidden="true"></i>&nbsp;
          <a href={this.props.cardProps.rawCard.app_url} target="_blank">Apply to Job</a>
        </p>
      </div>
    )
  }
}