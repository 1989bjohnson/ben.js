import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ onClick, children: text }) => {
  return (
    <button className="button" onClick={onClick}>
      <span className="corner top left"></span>
      <span className="corner top right"></span>
      <span className="corner bottom left"></span>
      <span className="corner bottom right"></span>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
