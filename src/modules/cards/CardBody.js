import React from 'react';

export default class CardFuncs extends React.Component {
  render() {
    return (
      <div className="Card-Body">
      <p className="Card-Body-Company"><span className="Card-Detail">Company:</span> <a href={this.props.cardProps.rawCard.glassdoor} target="_blank">{this.props.cardProps.rawCard.company}</a></p>
      <p className="Card-Body-Posted"><span className="Card-Detail">Posted at:</span> {this.props.cardProps.rawCard.posted}</p>
      <p className="Card-Body-Location"><span className="Card-Detail">Location:</span> <a href={this.props.cardProps.rawCard.citydataLoc} target="_blank">{this.props.cardProps.rawCard.location}</a></p>
      <details className="Card-Body-Description">
        <summary>Read Description</summary>
        <span dangerouslySetInnerHTML={{__html: this.props.cardProps.rawCard.description}}></span>
      </details>
      </div>
    )
  }
}