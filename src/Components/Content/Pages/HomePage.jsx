import React from "react";
import { Grid } from "@mui/material";

import "./HomePage.css";

import Projects from "../Projects/Projects";

import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footerbar/Footer";

const Home = () => {
  const xSmall = 12;
  const small = 12;
  const medium = 6;
  const large = 6;
  const xLarge = 6;

  return (
    <div className="mainText">
      <Grid container spacing={5}>
        <Grid item xs={xSmall} sm={small} md={medium} lg={large} xl={xLarge}>
          <p>Kyle</p>
          <p>Chaplin</p>
        </Grid>

        <Grid item xs={xSmall} sm={small} md={medium} lg={large} xl={xLarge}>
          <p>
            <Projects />
          </p>
        </Grid>
      </Grid>
      <h2>Kyle</h2>
      <h2>Chaplin</h2>
    </div>
  );
};

export default Home;
