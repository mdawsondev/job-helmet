import React from 'react';
import CardBody from './CardBody.js';
import CardHead from './CardHead.js';
import CardFuncs from './CardFuncs.js';
import './Card.css';

export default class Card extends React.Component {
  state = { isHidden: this.props.rawCard.isHidden,
    isFavorite: this.props.rawCard.isFavorite
  }

  toggleHidden = (e) => {
    const newStatus = !this.state.isHidden;
    this.props.rawCard.isHidden = newStatus;
    this.setState({isHidden: newStatus});
    console.log(e)
  }
  
  toggleFav = () => {
    const newStatus = !this.state.isFavorite;
    this.props.rawCard.isFavorite = newStatus;    
    this.setState({isFavorite: newStatus});
  }

  render() {
    return (
      <div className={"Card " + (this.state.isFavorite ? "Card-Fav" : "")} style={this.state.isHidden ? {opacity: ".2"} : {opacity:"1"} }>
        <div className="Card-Logo">
          <img className="Card-Company-Logo" src={this.props.rawCard.company_logo} style={this.props.rawCard.company_logo ? {display: 'initial'} : {display: 'none'}}/>
          <i className="fas fa-building" style={this.props.rawCard.company_logo ? {display: 'none'} : {display: 'initial'}}></i>
        </div>
        <div className="Card-Info">
          <CardHead cardProps={this.props} />
          <div className="Card-Detail-Container">
            <CardBody cardProps={this.props} />
            <CardFuncs cardState={this.state} cardProps={this.props} cardFuncs={{hide: this.toggleHidden, fav: this.toggleFav}} />
          </div>
        </div>
      </div>
    )
  }
}