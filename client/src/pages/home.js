import React, { Component } from 'react';
import logo from './../vallogo.png'

export default class Home extends Component {

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Welcome to Valorant Helper
        </header>
        </div>
    )
  }
}