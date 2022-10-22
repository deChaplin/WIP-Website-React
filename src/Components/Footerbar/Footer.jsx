import React, { Component } from "react";
import "./Footer.css";
import { LinkedIn } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";

//import fb from "./Images/facebook.png";
//import LinkedIn from "./Images/linkedin.png";
//import eMail from "./Images/Mail.png";

export default class Footer extends Component {
  render() {
    return (
      <ul className="ulF">
        <li className="liF">
          <a href="mailto:testemail@dechaplin.xyz" target="_blank">
            <EmailIcon
              style={{
                width: "40px",
                height: "40px",
                color: "white",
                marginRight: "4px",
              }}
            ></EmailIcon>
          </a>
        </li>

        <li className="liF">
          <a
            href="https://www.linkedin.com/in/kyle-chaplin-45a26a251/"
            target="_blank"
          >
            <LinkedIn
              style={{
                width: "40px",
                height: "40px",
                color: "white",
                marginRight: "4px",
              }}
            ></LinkedIn>
          </a>
        </li>
      </ul>
    );
  }
}
