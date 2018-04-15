# Job Helmet

Job Helmet is a job hunting tool that pulls data from popular job sites and compiles them into a single, manageable list. Providing tools like application tracking, interest parsing, and high-level company/location research, Job Helmet aims to pull the best features from other sites and merge them into a convenient location. 

###### _"Oh, get a job? Just get a job? Why don't I strap on my job helmet and squeeze down into a job cannon and fire off into job land, where jobs grow on jobbies?" - **Charlie Kelly**_

## 0.3.0 - Overview

![Job Helmet Preview](https://raw.githubusercontent.com/mdawsondev/job-helmet/master/docs/preview.png)

_Note: Until v1.0.0 the project will cater to the specific needs of finding software engineering jobs; see blueprint for more information._

Upon initialization of the Job Helmet application page, the page will self-populate pulling from GitHub, StackOverflow, and Indeed. At the moment there is no support for query injection; these are very broad searches (though this is due to change).

After initial population, the first 100 results are displayed to the user for categorization. The user is encouraged to hide or bookmark each entry which categorizes the entry for further processing. These results can be instantly sorted with a live filter input, allowing the user to narrow their results. Each entry is displayed as an individual card which provides an instant search-query to Glassdoor and City-Data for company information and location details, respectively. The "apply" link will take the user directly to the result application page.

## Development

The project is still in early development and not stable for public release, but is functional enough for fundamental use. If you would like to contribute, please read the contributing docs and peek at the blueprint for an idea about where the project is headed.

Job Helmet currently uses the following technologies.

* JavaScript ES6+
* Jest
* NodeJS
* React
* Yarn