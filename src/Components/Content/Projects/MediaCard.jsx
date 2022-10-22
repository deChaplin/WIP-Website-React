import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../Projects/MediaCard.css";

export default function MediaCard(props) {
  return (
    <div>
      <Card className="mediaCard" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
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
            style={{ fontSize: ".85rem", height: "55px", overflow: "hidden" }}
          >
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className="card"
            style={{ backgroundColor: "gray" }}
            onClick={() => window.open(props.link)}
            variant="contained"
            color="secondary"
            size="small"
          >
            <span>Learn More</span>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
