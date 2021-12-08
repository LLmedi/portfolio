import React from 'react';
import logo from '../common/logo.svg';
import './css/Home.css';

const Home =() => {
  return (
    <div className="App">
      <div className="rain-front"/>
      <div className="rain-back"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Home
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

export default Home;
