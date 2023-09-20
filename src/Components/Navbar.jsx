import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../Assets/Avatar.png";
import "./comp.css";
import Logout from "./Logout";

const Navbar = ({ onAdd, cartItems }) => {
  const [logoutPopupOpen, setLogoutPopupOpen] = useState(false);
  console.log({ logoutPopupOpen });
  const history = useNavigate();

  const handleCart = (e) => {
    e.preventDefault();
    history("/cart");
  };

  const openLogoutPopup = () => {
    setLogoutPopupOpen(true);
  };

  const closeLogoutPopup = () => {
    setLogoutPopupOpen(false);
  };

  return (
    <>
      <div className="navbar-container">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/product">
            ShopHere
          </a>

          <div className="cart-container">
            <div onClick={handleCart}>
              <svg
                type="button"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="white"
                className="bi bi-cart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <button type="button" className="btn btn-outline-light">
                Cart({cartItems.length})
              </button>
            </div>
            <div>
              <img className="avatar-container" src={Avatar} alt="Avatar" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                fill="#fff"
                className="logout-icon"
                onClick={openLogoutPopup}
              >
                <path d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z" />
              </svg>
            </div>
          </div>
        </nav>
        {logoutPopupOpen && (
          <Logout isOpen={logoutPopupOpen} onClose={closeLogoutPopup} />
        )}
      </div>
    </>
  );
};

export default Navbar;
