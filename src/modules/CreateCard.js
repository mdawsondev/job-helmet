import React from 'react';
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

export default function CreateCard(rawCard) {
  console.log(rawCard)
  return (
    <div className="Card">
      <div className="Card-Head">
        <p className="Card-Head-Title">{rawCard.title}</p>
        <p className="Card-Head-Company">{rawCard.company}</p>
      </div>
    </div>
  )
}