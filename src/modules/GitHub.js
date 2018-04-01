// This plugin houses the GitHub data parser and is designed to function
// independantly of other site plugins.
//
// Sample JSON return value; note the array wrapper.
//
// [{
//   "id": "fa2381ba-fdd3-11e6-82c5-5b93b6d5fc76",
//   "created_at": "Sun Apr 01 16:22:28 UTC 2018",
//   "title": "DevOps Engineer | Site Reliability Engineer (Full Relocation to Amsterdam)",
//   "location": "Amsterdam, the Netherlands",
//   "type": "Full Time",
//   "description": "<p>Job Description:</p>\n\n<p>Booking.com is looking for a Site Reliability Engineer to join our Core Infrastructure team at our Amsterdam headquarters. As a member of one of the 30 infrastructure teams, you will be given the freedom to make meaningful and measurable improvements impacting millions of people. You will be working in one of the biggest e-commerce companies in the world, deploying code on 25,000+ servers across multiple data centers around the world!</p>\n\n<p><strong>B.responsible</strong></p>\n\n<ul>\n<li><p>Design, develop and implement software that improves the stability, scalability, availability and latency of the Booking.com products;</p></li>\n<li><p>Take ownership of one or more services and have the freedom to do what is best for our business and customers;</p></li>\n<li><p>Solve problems occurring with our highly available production systems and build solutions and automation to prevent them from happening again;</p></li>\n<li><p>Build effective monitoring to monitor the health of your system, and jump in to handle outages;</p></li>\n<li><p>Build and run capacity tests to manage the growth of your systems;</p></li>\n<li><p>Plan for reliability by designing systems to work across our multinational data centers;</p></li>\n<li><p>Develop tools to assist the product development teams with successfully deploying 1000s of change sets every day;</p></li>\n<li><p>Share the on-call rotation and be an escalation contact for incidents.</p></li>\n</ul><p><strong>B.skilled</strong></p>\n\n<ul>\n<li><p>Mastery in at least one programming language, Perl and Java are a plus;</p></li>\n<li><p>Experience with building, operating and maintaining complex and scalable systems;</p></li>\n<li><p>Solid understanding of Software Engineering and Computer Science principles;</p></li>\n<li><p>Solid foundation in Linux administration and troubleshooting;</p></li>\n<li><p>Proven experience with automation. Knowledge of configuration management tools like Puppet or Chef is a plus;</p></li>\n<li><p>Additional experience in Networking, Security or Storage is a plus;</p></li>\n<li><p>Be able to understand and formulate meaningful business metrics;</p></li>\n<li><p>Creative and not afraid to step outside of your comfort zone;</p></li>\n<li><p>Fluent in the English language both spoken and written.</p></li>\n</ul><p><strong>B.offered</strong></p>\n\n<p>We are a performance-based company that offers career advancement and lucrative compensation, including bonuses and stock potential.  We also offer what we call the Booking Deal with other competitive perks and benefits.  The Technology department has monthly hackathons, training and attends/speaks at global conferences.</p>\n\n<p>This position is open to worldwide candidates and in the case of relocation, we will assist you with a generous relocation package, ensuring a smooth transition to working and living in Amsterdam.  We have successfully relocated 300+ Technology professionals to Amsterdam in the last year!</p>",
//   "how_to_apply": "<p>Apply via this link: <a href=\"https://goo.gl/WQNBLA\">https://goo.gl/WQNBLA</a></p>",
//   "company": "Booking.com BV",
//   "company_url": "https://www.booking.com/",
//   "company_logo": "http://github-jobs.s3.amazonaws.com/8b8d7738-fdd3-11e6-84c5-9df564e62219.jpg",
//   "url": "http://jobs.github.com/positions/fa2381ba-fdd3-11e6-82c5-5b93b6d5fc76"
// }]

import getData from './GetData';

const url = 'https://jobs.github.com/positions.json?description=&location=';

const processData = function(data) {
  let output = {};
  for (let key in data) {
    const entry = data[key];
    output[key] = {
      'posted': entry.created_at,
      'title': entry.title,
      'location': entry.location,
      'position': entry.type,
      'description': entry.description,
      'company': entry.company,
      'company_url': entry.company_url
    }
  }
  return output;
}

export default () => getData(url, 'json').then(data => processData(data));