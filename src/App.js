import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'lib-flexible';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Penging</h1>
        </header>
        <p className="App-intro">
          a little story of three fish
        </p>
      </div>
    );
  }
}

export default App;
