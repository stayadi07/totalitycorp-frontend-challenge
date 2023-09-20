import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sad from "../Assets/sad-face.png";
import "./comp.css";

const MyCart = ({ cartItems, total, onRemove, onAdd }) => {
  const history = useNavigate();

  const handleOrder = () => {
    history("/placeOrder");
  };

  const handleClick = () => {
    history("/product");
  };

  const handleDecrease = (item) => {
    onRemove(item);
  };

  if (cartItems.length === 0) {
    return (
      <>
        <div className="cart-wrapper">
          <Header />
          <h3 className="cart-display">
            No items to Display
            <img src={Sad} alt="" className="sad-face-container" /> !!
          </h3>
          <button
            type="button"
            className="btn btn-outline-warning ml-3"
            onClick={handleClick}
          >
            Go Back to products page
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="cart-wrapper">
        <nav className="navbar navbar-dark bg-dark">
          <Header />

          <div className="total-price">Total price: Rs.{total}/- </div>
        </nav>
      </div>
      <div className="col-md-9">
        <div className="row">
          {cartItems.map((values) => {
            return (
              <>
                <div className="col-md-4 mb-4 mt-4">
                  <div className="card" key={values?.id}>
                    <img
                      src={values?.images[0]}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{values?.brand}</h5>
                      <p className="card-text">Price: {values?.price} /-</p>
                      <p className="card-text">
                        Discount: {values.discountPercentage}%
                      </p>

                      <p className="card-text">Ratings ⭐ {values?.rating}</p>
                      <p className="card-text">
                        Quantity: {values?.quantity}
                        <label
                          class="btn btn-secondary ml-2"
                          onClick={() => handleDecrease(values)}
                        >
                          -
                        </label>
                        <label
                          class="btn btn-secondary ml-3"
                          onClick={(e) => {
                            e.preventDefault();
                            onAdd(values);
                          }}
                        >
                          +
                        </label>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <button
          type="button"
          className="btn btn-outline-warning mb-3"
          onClick={handleClick}
        >
          Go Back to products page
        </button>
        <button
          type="button"
          className="btn btn-outline-info ml-3 mb-3"
          onClick={handleOrder}
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default MyCart;
