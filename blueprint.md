# Job Helmet - Blueprint

* _**Updated**: March 31, 2018_
* _**Version**: 0.1.0_

This blueprint fleshes out the plan for the devlopment of Job Helmet. It explores architecture, interface, and functionality from a high-level view. The Blueprint document will be expanded as needed; for contributions, please see the contributing document.

## Mission

Application purpose is to assist users in the ability to scrape job-hunting sites from a central location. These results are expected to be easily managed, archivable, and a useful way for tracking incoming posts as well as managing existing applictions.

## Features

* Scrapes a variety of job-hunting sites (Indeed, Monster, Glassdoor, etc.).
* Results are filtered internally before being displayed to the user.
* Results can be saved and archived to keep track of applications.
* Sites can be enabled/disabled as desired.
* SPA that dynamically updates with new posts.

## Design

This application will be structured as an interface accepting modular plugins. These modules will house the data required for scraping each site individually, but will return a common layout that can then be processed by the application itself.

## Technology

* Jest
* React