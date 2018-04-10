# Job Helmet - Blueprint

* _**Updated**: April 10, 2018_
* _**Version**: 0.3.0_

This blueprint fleshes out the plan for the development of Job Helmet. It explores architecture, interface, and functionality from a high-level view. The Blueprint document will be expanded as needed; for contributions, please see the contributing document.

## Mission

Application purpose is to assist users in the ability to scrape job-hunting sites from a central location. These results are expected to be easily managed, archivable, and a useful way for tracking incoming posts as well as managing existing applictions. Users should be able to filter, sort, and manage their interests quickly to help process large numbers of jobs quickly.

## Features

* Scrapes a variety of job-hunting sites (Indeed, Monster, Glassdoor, etc.).
* Results are filtered internally before being displayed to the user.
* Results can be saved and archived to keep track of applications.
* Sites can be enabled/disabled as desired.
* SPA that dynamically updates with new posts.
* Star positions that user is interested in for processing.
* Word cloud for fast optimization of filtered list.

## Design Goals

1. ~~Modular plguins should scrape sites and return a common pattern for processing.~~.
2. A word cloud will allow users to add positive and negative booleon search values.
3. Categories will process as "hidden" and "saved," and will be easily filtered.
4. Users should be able to populate their results via their interested keywords.
5. Data should be stored so users can quickly review where they left off.

### Update

Blueprint has been reworked to show more structure; design goals now list a roadmap plan. I consider this version (0.3.0) a milestone and will be moving forward to complete the tasks at hand to prepare for release of v1.0.0 moving forward.

## Technology

* Jest
* React
* Yarn