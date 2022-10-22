import React, { useMemo } from "react";
import MediaCard from "./MediaCard";
import { Grid, Container } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../Projects/Projects.css";

const Projects = (props) => {
  const xSmall = 12;
  const small = 5;
  const medium = 4;
  const large = 3;
  const xLarge = 2;

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesPerRow: 1,
  };

  return (
    <div id="page2" className="carouselCard">
      <Slider {...settings}>
        <div>
          <MediaCard
            imageUrl="https://user-images.githubusercontent.com/85872356/171001104-9e306ef3-27b3-4d64-81a9-731965ca0dc3.png"
            alt="Tarkov Helper Image"
            title="Tarkov Helper"
            description="Simple application written in C# and makes use of win forms"
          />
        </div>
        <div>
          <MediaCard
            imageUrl=""
            alt="Test Image"
            title="TEST 2"
            description="Testing the card"
          />
        </div>
        <div>
          <MediaCard
            imageUrl=""
            alt="Test Image"
            title="TEST 3"
            description="Testing the card"
          />
        </div>
        <div>
          <MediaCard
            imageUrl=""
            alt="Test Image"
            title="TEST 4"
            description="Testing the card"
          />
        </div>
        <div>
          <MediaCard
            imageUrl=""
            alt="Test Image"
            title="TEST 5"
            description="Testing the card"
          />
        </div>
        <div>
          <MediaCard
            imageUrl=""
            alt="Test Image"
            title="TEST 1"
            description="Testing the card"
          />
        </div>
      </Slider>
    </div>
  );
};
export default Projects;
