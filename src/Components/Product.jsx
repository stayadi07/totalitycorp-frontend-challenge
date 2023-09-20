import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Header from "./Header";
import "./comp.css";

const Product = ({ values, handleProduct }) => {
  return (
    <>
      <Header />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-40"
            src={values.images[0]}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-40"
            src={values.images[1]}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-40"
            src={values.images[2]}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="card-body">
        <h5 className="card-title">{values.brand}</h5>
        <p className="card-text">Price: {values.price} /-</p>

        <p className="card-text">Ratings ⭐ {values.rating}</p>
        <p> {values.description}</p>
      </div>
    </>
  );
};

export default Product;
