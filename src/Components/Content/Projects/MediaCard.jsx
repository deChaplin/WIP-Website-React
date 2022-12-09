import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../Projects/MediaCard.css";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function MediaCard(props) {
  return (
    <div>
      <Card
        className="mediaCard"
        sx={{ maxWidth: "100%" }}
        style={{
          backgroundColor: "#222222",
          border: "4px solid #222222",
          color: "white",
        }}
      >
        <CardMedia
          component="img"
          height="100%"
          style={{ height: "400px", color: "white" }}
          image={props.imageUrl}
          alt={props.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            style={{ fontWeight: "bold", height: "65px", overflow: "hidden" }}
            variant="h5"
            component="div"
          >
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{
              fontSize: ".85rem",
              height: "55px",
              overflow: "hidden",
              color: "white",
            }}
          >
            {props.description}
          </Typography>
        </CardContent>

        <div
          style={{
            position: "relative",
            textAlign: "end",
            marginRight: "1rem",
          }}
        >
          <Button
            className="buttons"
            style={{
              backgroundColor: "gray",
            }}
            onClick={() => window.open(props.link)}
            variant="contained"
            color="secondary"
            size="large"
          >
            <span>Learn More</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}
