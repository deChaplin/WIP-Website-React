import { Grid, Paper, Typography } from "@mui/material";
import React, { Component } from "react";
import HomeButton from "../../HomeButton/HomeButton";

export default class About extends Component {
  render() {
    const xSmall = 10;
    const small = 10;
    const medium = 5.5;
    const large = 5.5;
    const xLarge = 5.6;

    return (
      <div>
        <HomeButton />
        <Grid
          container
          rowSpacing={1}
          columnSpacing={5}
          style={{ margin: "1rem" }}
        >
          <Grid item xs={xSmall} sm={small} md={medium} lg={large} xl={xLarge}>
            <Grid>
              <Paper
                elevation={3}
                sx={{
                  backgroundColor: "#303030",
                  color: "white",
                }}
              >
                <Typography>Key Skills</Typography>
                <Typography>
                  Organisation, Teamwork, Time management, Communication
                  Computer Literate, First Aid knowledge
                </Typography>
              </Paper>
              <br></br>
            </Grid>
            <Grid>
              <Paper
                elevation={3}
                sx={{
                  backgroundColor: "#303030",
                  color: "white",
                }}
              >
                <Typography>Computer Science </Typography>
                <Typography>C++, HTML, CSS, C#, Github</Typography>
              </Paper>
              <br></br>
            </Grid>
            <Grid>
              <Paper
                elevation={3}
                sx={{
                  backgroundColor: "#303030",
                  color: "white",
                }}
              >
                <Typography>Volunteering</Typography>
                <Typography>
                  Youth Ambassador DofE Wales Dulais Valley Food Bank
                </Typography>
              </Paper>
              <br></br>
            </Grid>
            <Grid>
              <Paper
                elevation={3}
                sx={{
                  backgroundColor: "#303030",
                  color: "white",
                }}
              >
                <Typography>Activities and Interests</Typography>
                <Typography>
                  Coding, Game Server Hosting, Raspberry Pi, Website
                  Development, Adobe Photoshop, Adobe After effects
                </Typography>
                <br></br>
                <Typography>
                  I enjoy using my free time to improve my general knowledge and
                  work on my personal projects. I've been hosting Minecraft
                  servers for my friends and family for a few years and I'm
                  currently hosting one using Oracle Cloud's free tier as it
                  provides more power than my Raspberry pi.
                </Typography>
              </Paper>
              <br></br>
            </Grid>
          </Grid>

          <Grid item xs={xSmall} sm={small} md={medium} lg={large} xl={xLarge}>
            <Grid>
              <Paper
                elevation={3}
                sx={{
                  backgroundColor: "#303030",
                  color: "white",
                }}
              >
                <Typography>Personal Profile</Typography>
                <Typography>
                  Current student at the University of South Wales studying
                  Computer Games Development with a genuine passion for ICT. In
                  my first and second year I was selected by my class to
                  represent them as course representative. Between 2014 and 2020
                  I was a member of the Army Cadet Force where I achieved the
                  rank of Sergeant Major and held the honorary role of Lord
                  Lieutenant Cadet for Gwent and Powys. I enjoy working hard and
                  learning new things whilst also improving upon my current
                  skills and knowledge.
                </Typography>
              </Paper>
              <br></br>
            </Grid>
            <Grid>
              <Paper
                elevation={3}
                sx={{
                  backgroundColor: "#303030",
                  color: "white",
                }}
              >
                <Typography>Experience</Typography>
                <br></br>

                <Paper
                  elevation={5}
                  sx={{
                    backgroundColor: "#303030",
                    color: "white",
                  }}
                >
                  <Typography>Technology Intern • Bright Network</Typography>
                  <Typography>
                    This internship was a great insight into the many different
                    sectors in the world of technology. During the internship I
                    attended many different talks from popular companies such as
                    Google and Amazon. The internship concluded with the
                    completion of a coding task set out by Amazon.
                  </Typography>
                </Paper>
                <br></br>
                <Paper
                  elevation={5}
                  sx={{
                    backgroundColor: "#303030",
                    color: "white",
                  }}
                >
                  <Typography>Experience</Typography>
                  <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Assumenda architecto aliquam nulla. Voluptate tenetur dicta
                    qui libero? Voluptates quidem cumque fugiat recusandae
                    tenetur. Vero dolorem cupiditate eius odio. Nam quo
                    perferendis quos fugit eveniet? Laboriosam quam, ex
                    voluptate exercitationem sunt minus ratione dicta deleniti
                    expedita nulla minima quibusdam molestias enim molestiae
                    ullam, soluta impedit? Sit temporibus illum magnam suscipit
                    eveniet eum. Itaque doloremque et vitae quis neque natus
                    culpa eveniet debitis similique unde?
                  </Typography>
                </Paper>
                <br></br>
                <Paper
                  elevation={5}
                  sx={{
                    backgroundColor: "#303030",
                    color: "white",
                  }}
                >
                  <Typography>Experience</Typography>
                  <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Assumenda architecto aliquam nulla. Voluptate tenetur dicta
                    qui libero? Voluptates quidem cumque fugiat recusandae
                    tenetur. Vero dolorem cupiditate eius odio. Nam quo
                    perferendis quos fugit eveniet? Laboriosam quam, ex
                    voluptate exercitationem sunt minus ratione dicta deleniti
                    expedita nulla minima quibusdam molestias enim molestiae
                    ullam, soluta impedit? Sit temporibus illum magnam suscipit
                    eveniet eum. Itaque doloremque et vitae quis neque natus
                    culpa eveniet debitis similique unde?
                  </Typography>
                </Paper>
                <br></br>
              </Paper>
              <br></br>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
