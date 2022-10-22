import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <ul className="ul">
        <li className="li">
          <a>
            <Link to="/">Home</Link>
          </a>
        </li>
        <li className="li">
          <a>
            <Link to="/About">About</Link>
          </a>
        </li>
        <li className="li">
          <a>
            <Link to="/projects">Projects</Link>
          </a>
        </li>
        <li className="li">
          <a href="https://github.com/deChaplin" target="_blank">
            Github
          </a>
        </li>
        <li className="li">
          <a>
            <Link to="/contact">Contact</Link>
          </a>
        </li>
      </ul>
    );
  }
}
