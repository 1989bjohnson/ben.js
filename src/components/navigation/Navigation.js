import React, { useState } from "react";
import Button from "../button/Button";
import Overlay from "../overlay/Overlay";
import { pages } from "../../pages/page/Page";
import "./Navigation.scss";

const Navigation = ({ handlePageChange, landing, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleButtonClick = (pageName) => {
    handlePageChange(pageName);
    setIsMenuOpen(false);
  };

  return (
    <>
      <Overlay show={isMenuOpen} />
      <nav className={landing ? "nav-landing" : "nav"}>
        {!landing && (
          <div className="menu-button" onClick={toggleMenu}>
            <div
              className={`menu-bar menu-bar-0 ${isMenuOpen ? "open" : ""}`}
            ></div>
            <div
              className={`menu-bar menu-bar-1 ${isMenuOpen ? "open" : ""}`}
            ></div>
            <div
              className={`menu-bar menu-bar-2 ${isMenuOpen ? "open" : ""}`}
            ></div>
          </div>
        )}
        <div className={`nav-items ${isMenuOpen || landing ? "open" : ""}`}>
          {pages.map((page, i) => {
            if (page.name === "Landing" || page.name === currentPage)
              return null;
            return (
              <Button
                key={i}
                className="fade-in-button"
                onClick={() => handleButtonClick(page.name)}
              >
                {page.name}
              </Button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
