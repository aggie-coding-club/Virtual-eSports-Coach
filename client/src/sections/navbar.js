import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../veclogo.png'

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
            <img
                src={logo}
                height="30"
                alt="vec logo"
                loading="lazy"
            />
        </Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/stats" className="nav-link">Statistics</Link>
          </li>
          <li className="navbar-item">
          <Link to="/users" className="nav-link">Users</Link>
          </li>
          <li className="navbar-item">
          <Link to="/register" className="nav-link">Register</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}