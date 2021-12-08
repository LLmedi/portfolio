import React from 'react';
import logo from '../common/logo.svg';
import './css/Home.css';

const Project =() => {
  return (
    <div className="App">
      <div className="rain-front"/>
      <div className="rain-back"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          projects
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Project;
