import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./comp.css";

const Form = ({ cartItems }) => {
  const history = useNavigate();

  const handleSubmit = () => {
    history("/placed");
  };

  const handleClick = () => {
    history("/product");
  };

  return (
    <>
      <div className="form-container">
        <Header />
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
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="form-input">
          <form action="" onSubmit={handleSubmit}>
            <label className="checkout-labels" htmlFor="formGroupExampleInput">
              Address:
            </label>
            <input
              type="text"
              className="form-control-address m-2"
              id="formGroupExampleInput"
              placeholder="Address"
              required
            />
            <br />
            <label className="checkout-labels" htmlFor="formGroupExampleInput">
              Pincode:
            </label>
            <input
              type="number"
              className="form-control-address m-2"
              id="formGroupExampleInput"
              placeholder="Pincode"
              required
            />
            <br />
            <label className="checkout-labels" htmlFor="formGroupExampleInput">
              Phone:
            </label>
            <input
              type="text"
              className="form-control-address m-2"
              id="formGroupExampleInput"
              placeholder="Phone"
              requiredx1
            />
            <br />
            <button type="submit" className="btn btn-success">
              Place Order
            </button>
            <button
              type="button"
              className="btn btn-outline-warning mb-3 ml-3 mt-3"
              onClick={handleClick}
            >
              Go Back to products page
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
