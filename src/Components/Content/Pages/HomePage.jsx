import { Button, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import Projects from "../Projects/Projects";
import "./HomePage.css";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import GitHubIcon from "@mui/icons-material/GitHub";

const Home = () => {
  const xSmall = 12;
  const small = 12;
  const medium = 12;
  const large = 12;
  const xLarge = 6;

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
      secondary: {
        main: "#ffffff",
      },
    },
  });

  return (
    <div className="mainText">
      <Grid container spacing={5}>
        <Grid
          item
          xs={xSmall}
          sm={small}
          md={medium}
          lg={large}
          xl={xLarge}
          style={{ paddingLeft: "10%" }}
        >
          <h1 className="text">Kyle</h1>
          <h1>Chaplin</h1>
          <Grid item xs={xSmall} sm={small} md={medium} lg={large} xl={xLarge}>
            <ThemeProvider theme={theme}>
              <Link to="/About">
                <Button className="button" variant="outlined">
                  <InfoIcon
                    style={{
                      width: "20px",
                      height: "25px",
                      color: "white",
                      marginRight: "4px",
                    }}
                  ></InfoIcon>
                  About
                </Button>
              </Link>
              &nbsp;
              <a href="https://github.com/deChaplin" target="_blank">
                <Button className="button" variant="outlined">
                  <GitHubIcon
                    style={{
                      width: "20px",
                      height: "25px",
                      color: "white",
                      marginRight: "4px",
                    }}
                  ></GitHubIcon>
                  Github
                </Button>
              </a>
            </ThemeProvider>
          </Grid>
        </Grid>

        <Grid item xs={xSmall} sm={small} md={medium} lg={large} xl={xLarge}>
          <p className="projectContainer">
            <Projects />
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
