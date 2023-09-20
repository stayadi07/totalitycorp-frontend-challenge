import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./comp.css";
import Image_1 from "../Assets/Image-1.jpg";
import Image_2 from "../Assets/Image-2.jpg";
import Image_3 from "../Assets/Image-3.jpg";

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="banner-image" src={Image_1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="banner-image" src={Image_2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="banner-image" src={Image_3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
