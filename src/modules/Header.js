import React from 'react';
import logo from '../logo.png';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div className="App-intro">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-title-wrapper">
            <h1 className="App-title">Job Helmet</h1>
            <p className="App-slogan">Shoot off into job land! <i className="fas fa-rocket fa-xs"></i></p>
          </div>
        </div>
        <nav className="Navigation">
          <ul>
            <li><span className="Navigation-icon"><i className="fas fa-question-circle"></i></span>About</li>
            <li><span className="Navigation-icon"><i className="fas fa-star"></i></span>Starred</li>
            <li><span className="Navigation-icon"><i className="fas fa-briefcase"></i></span>Applied</li>
          </ul>
        </nav>
      </header>
    )
  }
}