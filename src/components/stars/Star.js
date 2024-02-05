import React from "react";

const generateStars = (n, size) => {
  let value = `${Math.random() * 100}vw ${Math.random() * 200}vh #FFF`;
  for (let i = 0; i < n; i++) {
    value += `, ${Math.random() * 100}vw ${Math.random() * 200}vh #FFF`;
  }
  return value;
};

const Star = ({ size, count }) => {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    background: "transparent",
    boxShadow: generateStars(count),
    animation: `animStar ${50 * size}s linear infinite`,
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
