import React from "react";
import Star from "../../components/stars/Star";
import "./Landing.scss";
import Button from "../../components/button/Button";

const Landing = () => {
  return (
    <div className="section landing">
      <Star size={1} count={350} />
      <Star size={2} count={100} />
      <Star size={3} count={50} />
      <div className="content center-content">
        <h1>ben.js</h1>
        <Button onClick={() => console.log("Hello")}>about</Button>
      </div>
    </div>
  );
};

export default Landing;
