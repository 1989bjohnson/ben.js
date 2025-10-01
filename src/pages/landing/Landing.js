import Navigation from "../../components/navigation/Navigation";
import logoNv from "../../img/logo-nv.png";
import logoFs from "../../img/logo-black.svg";
import "./Landing.scss";
import React from "react";

const Landing = ({ handlePageChange }) => {
  return (
    <div className="page-inner page-inner-landing">
      <div className="heading fade-in-heading">
          <img src={logoNv} alt="NebulaVoid Logo" className="landing-logo" />
      </div>
        <a href='https://fallenstargame.com' className="fade-in-logo"><img src={logoFs} alt="FALLENSTAR logo" className="fs-logo fade-in" /></a>
        <p className='paragraph text-center fade-in-paragraph m-0'>full site coming soon</p>
      <Navigation handlePageChange={handlePageChange} landing={true} />
    </div>
  );
};

export default Landing;
