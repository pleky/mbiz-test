import React from "react";
import { Images } from "../../theme";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const slider = () => {
  return (
    <Carousel showThumbs={false} autoPlay>
      <img src={Images.big1} alt="big1"/>
      <img src={Images.big2} alt="big1"/>
      <img src={Images.big3} alt="big1"/>
      <img src={Images.big4} alt="big1"/>
    </Carousel>
  );
};

export default slider;
