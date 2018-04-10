import React from 'react';

export default class CardFuncs extends React.Component {
  hide = () => this.props.cardFuncs.hide();
  save = () => this.props.cardFuncs.fav();

  render() {
    return (
      <div className="Card-Functions">
        <p className="Card-Hide" onClick={this.hide}>{this.props.cardState.isHidden ? 'Unhide' : 'Hide'}</p>
        <p className="Card-Star" onClick={this.save}>{this.props.cardState.isFavorite ? 'Unsave' : 'Save'}</p>
        <p className="Card-Apply"><a href={this.props.cardProps.rawCard.app_url} target="_blank">Apply to Job</a></p>
      </div>
    )
  }
}