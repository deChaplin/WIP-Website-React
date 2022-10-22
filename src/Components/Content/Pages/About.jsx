import { Grid } from "@mui/material";
import React, { Component } from "react";
import HomeButton from "../../HomeButton/HomeButton";

export default class About extends Component {
  render() {
    const xSmall = 12;
    const small = 12;
    const medium = 6;
    const large = 6;
    const xLarge = 5.6;

    return (
      <div>
        <HomeButton />
        <Grid container spacing={5} style={{ margin: "1rem" }}>
          <Grid item xs={xSmall} sm={small} md={medium} lg={large} xl={xLarge}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda architecto aliquam nulla. Voluptate tenetur dicta qui
              libero? Voluptates quidem cumque fugiat recusandae tenetur. Vero
              dolorem cupiditate eius odio. Nam quo perferendis quos fugit
              eveniet? Laboriosam quam, ex voluptate exercitationem sunt minus
              ratione dicta deleniti expedita nulla minima quibusdam molestias
              enim molestiae ullam, soluta impedit? Sit temporibus illum magnam
              suscipit eveniet eum. Itaque doloremque et vitae quis neque natus
              culpa eveniet debitis similique unde?
            </p>
          </Grid>

          <Grid item xs={xSmall} sm={small} md={medium} lg={large} xl={xLarge}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda architecto aliquam nulla. Voluptate tenetur dicta qui
              libero? Voluptates quidem cumque fugiat recusandae tenetur. Vero
              dolorem cupiditate eius odio. Nam quo perferendis quos fugit
              eveniet? Laboriosam quam, ex voluptate exercitationem sunt minus
              ratione dicta deleniti expedita nulla minima quibusdam molestias
              enim molestiae ullam, soluta impedit? Sit temporibus illum magnam
              suscipit eveniet eum. Itaque doloremque et vitae quis neque natus
              culpa eveniet debitis similique unde?
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}
