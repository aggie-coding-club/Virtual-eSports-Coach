import React, { Component } from 'react';
import logo from './../vallogo.png'

export default class Home extends Component {

  render() {
    return (
      <div className="App">

      <header className="App-header">
      <img src={logo} alt='vallogo' height='30' loading="lazy"/>
          Welcome to Virtual eSports Coach
        </header>
        </div>
    )
  }
}