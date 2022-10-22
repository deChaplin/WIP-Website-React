import React, { Component } from 'react'
import "./Footer.css";

//import fb from "./Images/facebook.png";
//import LinkedIn from "./Images/linkedin.png";
//import eMail from "./Images/Mail.png";

export default class Footer extends Component {
  render() {
    return (
        <ul className='ulF'>
            <li className='liF'>
              <a href="https://en-gb.facebook.com/" target="_blank">
                <img className='footerimage' src='/images/Facebook.png' alt='facebook'></img>
              </a>
            </li>

            <li className='liF'>
              <a href="mailto:testemail@dechaplin.xyz" target="_blank">
                <img className='footerimagemail'  src='/images/mail.png' alt='email'></img>
              </a>
            </li>

            <li className='liF'>
              <a href="https://gb.linkedin.com/" target="_blank">
                <img  className='footerimage' src='/images/linkedin.png' alt='linkedin'></img>
              </a>
            </li>
        </ul>
    )
  }
}
