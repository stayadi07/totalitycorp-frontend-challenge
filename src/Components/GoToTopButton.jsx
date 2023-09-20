import React, { useState, useEffect } from "react";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`btn btn-secondary mb-3 btn-sm ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      Go to Top
    </button>
  );
};

export default GoToTopButton;
