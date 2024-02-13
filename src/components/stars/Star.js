import React from "react";

const generateStars = (n) => {
  let value = `${Math.random() * 100}vw ${Math.random() * 200}vh #FFF`;
  for (let i = 0; i < n; i++) {
    value += `, ${Math.random() * 100}vw ${Math.random() * 200}vh #FFF`;
  }
  return value;
};

const Star = ({ size, count }) => {
  const starStyle = {
    width: `${size}px`,
    height: "0",
    background: "transparent",
    alignSelf: "stretch",
    boxShadow: generateStars(count),
    animation: `animStar ${50 * size}s linear infinite, fadeIn 1s ease-in-out`,
  };

  const starAfterStyle = {
    content: '" "',
    position: "absolute",
    bottom: 0,
    width: `${size}px`,
    height: `${size}px`,
    background: "transparent",
    boxShadow: generateStars(count),
  };

  return (
    <div style={starStyle}>
      <div style={starAfterStyle} />
    </div>
  );
};

export default Star;
