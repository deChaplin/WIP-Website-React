import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MediaCard from "./MediaCard";

import "../Projects/Projects.css";

const Projects = (props) => {
  const xSmall = 12;
  const small = 5;
  const medium = 4;
  const large = 3;
  const xLarge = 2;

  let settings = {
    dots: false,
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
            description="Simple application written in C# and makes use of win forms."
            link="https://github.com/deChaplin/Tarkov-Helper"
          />
        </div>
        <div>
          <MediaCard
            imageUrl="https://user-images.githubusercontent.com/85872356/197346558-49f1c5da-ae7d-4b26-8c90-7cbcf588fdf9.png"
            alt="Auto Clicker Image"
            title="Auto Clicker"
            description="An auto clicker written in C#."
            link="https://github.com/deChaplin/CSharp-Auto-Clicker"
          />
        </div>
        <div>
          <MediaCard
            imageUrl="https://user-images.githubusercontent.com/85872356/203089260-2123c787-ed2e-4b66-9764-5e89804b3e10.png"
            alt="Image of the menu"
            title="My First Dear ImGui Menu"
            description="A simple menu created using the Dear ImGui library."
            link="https://github.com/deChaplin/ImGui-Menu"
          />
        </div>
        <div>
          <MediaCard
            imageUrl="https://user-images.githubusercontent.com/85872356/203100482-75918b70-d2c6-4d92-8d80-cb55b5169293.png"
            alt="Image of the bot's response"
            title="VAC Checker Bot"
            description="A program to check if accounts have been banned by VAC (Valve Anti Cheat) software. It has been written in python with the aim to connect it to a discord bot."
            link="https://github.com/deChaplin/VAC-Checker"
          />
        </div>
        <div>
          <MediaCard
            imageUrl="https://user-images.githubusercontent.com/85872356/197346573-1308d036-23d2-4ad3-911a-8c73211f4814.png"
            alt="Gelatin Geode Image"
            title="Gelatin Geode Game"
            description="A game made during my first year of studying Computer Games Development."
            link="https://github.com/deChaplin/Unreal-engine-Gelatin-Geode"
          />
        </div>
        <div>
          <MediaCard
            imageUrl="https://user-images.githubusercontent.com/85872356/197346582-51c674b1-405a-4275-a7d9-4e7db09df320.png"
            alt="Cennet Down to ashes Image"
            title="Cennet Down to ashes"
            description="A game made during my first year of studying Computer Games Development."
            link="https://github.com/deChaplin/Unreal-Engine-Cennet-Down-to-ashes"
          />
        </div>
        <div>
          <MediaCard
            imageUrl="https://user-images.githubusercontent.com/85872356/197346589-06090247-7dde-45e9-9756-234e1c119efb.png"
            alt="Dim Spirits 4 Image"
            title="Dim Spirits 4"
            description="A game made during my first year of studying Computer Games Development."
            link="https://github.com/deChaplin/Unreal-Engine-Dim-Spirits-4"
          />
        </div>
        <div>
          <MediaCard
            imageUrl="https://user-images.githubusercontent.com/85872356/197350781-5a04b54c-c171-4703-9236-6de42edbd157.png"
            alt="Dark Discord Theme Image"
            title="Dark Discord Theme"
            description="A theme written using CSS for better discord."
            link="https://github.com/deChaplin/Dark-Discord-Theme"
          />
        </div>
        <div>
          <MediaCard
            imageUrl="https://user-images.githubusercontent.com/85872356/197355405-d61b0a24-35e3-4428-8dc3-d9f3193fa65d.png"
            alt="Website Image"
            title="React Website"
            description="My portfolio website. You're currently on it!"
            link="https://github.com/deChaplin/WIP-Website-React"
          />
        </div>
        <div>
          <MediaCard
            imageUrl="https://user-images.githubusercontent.com/85872356/197346563-2fb0c290-9af5-4bf4-b4d1-7ff8b3698ef9.png"
            alt="Tic Tac Toe Image"
            title="Tic-Tac-Toe"
            description="The well known game Tic-Tac-Toe made using C#."
            link="https://github.com/deChaplin/CSharp-Tic-Tac-Toe"
          />
        </div>
      </Slider>
    </div>
  );
};
export default Projects;
