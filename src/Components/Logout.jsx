import React from "react";
import { useNavigate } from "react-router-dom";
import "./comp.css";

function Logout({ isOpen, onClose }) {
  const history = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    history("/");

    onClose();
  };

  return (
    isOpen && (
      <div className="logout-popup">
        <div className="logout-popup-content">
          <p>Are you sure you want to logout?</p>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            type="button"
            className="btn btn-secondary ml-2"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    )
  );
}

export default Logout;
