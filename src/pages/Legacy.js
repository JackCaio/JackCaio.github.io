import React, { Component } from 'react';
import logo from '../logo.svg';

export default class Legacy extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1>Hello, World</h1>
        </header>
      </div>
    );
  }
}