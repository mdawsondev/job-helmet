import React from 'react';
import CardBody from './CardBody.js';
import CardHead from './CardHead.js';
import CardFuncs from './CardFuncs.js';
import './Card.css';

export default class Card extends React.Component {
  state = { isHidden: this.props.rawCard.isHidden,
    isFavorite: this.props.rawCard.isFavorite
  }

  toggleHidden = () => {
    const newStatus = !this.state.isHidden;
    this.props.rawCard.isHidden = newStatus;
    this.setState({isHidden: newStatus});
  }
  
  toggleFav = () => {
    const newStatus = !this.state.isFavorite;
    this.props.rawCard.isFavorite = newStatus;    
    this.setState({isFavorite: newStatus});
  }

  render() {
    return (
      <div className={"Card " + (this.state.isFavorite ? "Card-Fav" : "")} style={this.state.isHidden ? {opacity: ".2"} : {display:"block"} }>
        <CardHead cardProps={this.props} />
        <CardBody cardProps={this.props} />
        <CardFuncs cardState={this.state} cardProps={this.props} cardFuncs={{hide: this.toggleHidden, fav: this.toggleFav}} />
      </div>
    )
  }
}