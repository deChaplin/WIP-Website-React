import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomeButton.css";
import HomeIcon from "@mui/icons-material/Home";
import { SvgIcon, IconButton } from "@mui/material";

export default class HomeButton extends Component {
  render() {
    return (
      <div className="Button">
        <Link to="/" style={{ textDecoration: "none" }}>
          <IconButton style={{ margin: "10px", width: "50px", height: "50px" }}>
            <HomeIcon
              style={{ width: "50px", height: "50px", color: "white" }}
            />
          </IconButton>
        </Link>
      </div>
    );
  }
}
