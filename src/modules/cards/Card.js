import React from 'react';
import './CreateCard.css';

// app_url:"<p><a href="http://www.vanguardjobs.com/job/8106497/senior-front-end-engineer-malvern-pa/">http://www.vanguardjobs.com/job/8106497/senior-front-end-engineer-malvern-pa/</a></p>"
// company:"Vanguard"
// company_logo:"http://github-jobs.s3.amazonaws.com/b9211a3a-2dff-11e8-909a-cefbd04204c2.png"
// company_url:"http://www.vanguard.com "
// description:"<p>Want to work in a highly collaborative, co-located product team, dedicated to delivering world class client experiences?  Are you passionate about innovation and leveraging the latest technologies to develop engaging user experiences?  </p>"
// id:"c9de3826-2dff-11e8-8314-6b08014825b4"
// location:"Malvern, PA "
// position:"Full Time"
// posted:"Thu Mar 22 18:39:01 UTC 2018"
// site:"gh"
// site_url:"http://jobs.github.com/positions/c9de3826-2dff-11e8-8314-6b08014825b4"
// title:"Senior Front End Engineer - CX Journey Lab"

export default class Card extends React.Component {
  state = { isHidden: this.props.rawCard.isHidden }

  toggleHidden = () => {
    this.props.rawCard.isHidden = true;
    this.setState({isHidden: true});
  }

  render() {
    return (
      <div className="Card" style={this.state.isHidden ? {display: "none"} : {display:"block"} }>
        <div className="Card-Head">
          <p className="Card-Head-Title">{this.props.rawCard.title}</p>
        </div>{console.log(this.props.rawCard.isHidden)}
        <div className="Card-Body">
          <p className="Card-Head-Company"><span className="Card-Detail">Company:</span> {this.props.rawCard.company}</p>
          <p className="Card-Body-Posted"><span className="Card-Detail">Posted at:</span> {this.props.rawCard.posted}</p>
          <p className="Card-Body-Location"><span className="Card-Detail">Location:</span> {this.props.rawCard.location}</p>
          <details className="Card-Body-Description">
            <summary>Read Description</summary>
            <span dangerouslySetInnerHTML={{__html: this.props.rawCard.description}}></span>
          </details>
          <div className="Card-Functions">
            <p className="Card-Hide" onClick={this.toggleHidden}>Delete</p>
          </div>
          {/* <p className="Card-Body-Apply"><span className="Card-Detail">Apply:</span> {rawCard.app_url}</p> */}
        </div>
      </div>
    )
  }
}