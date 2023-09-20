import React from "react";
import Items from "../Data/Items";
import { useState } from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import Dropdown from "react-bootstrap/Dropdown";
import "./comp.css";
import Banner from "./Banner";
import GoToTopButton from "./GoToTopButton";

const Products = ({ onAdd, cartItems }) => {
  const [selected, setSelected] = useState(null);
  const [data, setData] = useState(Items);

  const handleProduct = (value) => {
    setSelected(value);
  };

  const filterResult = (catItem) => {
    const result = [...Items].filter((currData) => {
      return currData.category === catItem;
    });
    setData(result);
  };
  const handlePrice = () => {
    const numPrice = [...data].sort((a, b) => a.price - b.price);
    setData(numPrice);
  };

  const handlePriceHighToLow = () => {
    const numPrice = [...data].sort((a, b) => b.price - a.price);
    setData(numPrice);
  };

  const handleRating = () => {
    const numRating = [...data].sort((c, d) => d.rating - c.rating);
    setData(numRating);
  };

  const handleDiscount = () => {
    const numDiscount = [...data].sort(
      (a, b) => a.discountPercentage - b.discountPercentage
    );
    setData(numDiscount);
  };

  if (selected !== null) {
    return <Product values={selected} handleProduct={handleProduct} />;
  }

  return (
    <>
      <Navbar onAdd={onAdd} cartItems={cartItems} />
      <Banner />

      <div className="container-fluid mx-2">
        <div className="row mt-4">
          <div className="col-md-2 filter-sort-container">
            <Dropdown>
              <Dropdown.Toggle variant="primary mt-2" id="dropdown-basic">
                Filter
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => filterResult("smartphones")}>
                  Smartphones
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterResult("laptops")}>
                  Laptops
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterResult("skincare")}>
                  Skincare
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterResult("fragrances")}>
                  Fragrances
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterResult("groceries")}>
                  Groceries
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterResult("home-decoration")}>
                  Decorations
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterResult("furniture")}>
                  Furniture
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterResult("tops")}>
                  Tops
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterResult("womens-dresses")}>
                  Women's Dresses
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterResult("womens-shoes")}>
                  Women's Shoes
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterResult("mens-shirts")}>
                  Men's Shirts
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterResult("mens-shoes")}>
                  Men's Shoes
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterResult("mens-watches")}>
                  Men's Watches
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterResult("womens-watches")}>
                  Women's Watches
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterResult("womens-jewellery")}>
                  Women's Jewellery
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterResult("womens-bags")}>
                  Women's Bags
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterResult("motorcycle")}>
                  Motorcycle
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterResult("automotive")}>
                  Automotive
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterResult("sunglasses")}>
                  Sunglasses
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterResult("lighting")}>
                  Lighting
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="success mt-2" id="dropdown-basic">
                Sort
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handlePrice}>
                  Price (Low to High)
                </Dropdown.Item>
                <Dropdown.Item onClick={handlePriceHighToLow}>
                  Price (High to Low)
                </Dropdown.Item>
                <Dropdown.Item onClick={handleRating}>Rating</Dropdown.Item>
                <Dropdown.Item onClick={handleDiscount}>
                  Discount Percentage
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-md-9">
            <div className="row">
              {data.map((values) => {
                return (
                  <>
                    <div className="col-md-4 mb-4" key={values.id}>
                      <div className="card">
                        <img
                          src={values.images[0]}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{values.brand}</h5>
                          <p className="card-text">Price: {values.price} /-</p>
                          <p className="card-text">
                            Discount: {values.discountPercentage}%
                          </p>

                          <p className="card-text">
                            Ratings ⭐ {values.rating}
                          </p>

                          <button
                            className="btn btn-dark"
                            onClick={() => setSelected(values)}
                          >
                            View Product Details
                          </button>

                          <button
                            type="button"
                            className="btn btn-outline-secondary ml-3"
                            onClick={(e) => {
                              e.preventDefault();
                              onAdd(values);
                            }}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <GoToTopButton />
      </div>
    </>
  );
};

export default Products;
