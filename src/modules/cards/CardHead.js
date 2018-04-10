import React from 'react';

export default class CardHead extends React.Component {
  render() {
    return (
    <div className="Card-Head">
      <p className="Card-Head-Title">{this.props.cardProps.rawCard.title}</p>
    </div>
    )
  }
}