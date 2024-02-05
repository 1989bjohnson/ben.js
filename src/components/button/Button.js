import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ onClick, children: text, className }) => {
  return (
    <button className={`button button-${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
