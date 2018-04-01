import React, { Component } from 'react';
import ScrapeSite from './ScrapeSite';

ScrapeSite("GitHub").then(data => console.log(data));
ScrapeSite("StackOverflow").then(data => console.log(data));
