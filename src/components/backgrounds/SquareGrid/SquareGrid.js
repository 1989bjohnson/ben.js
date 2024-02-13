import React, { useState, useEffect } from "react";
import "./SquareGrid.scss"; // Import the CSS

const SquareGrid = () => {
  const [numSquares, setNumSquares] = useState(0);

  useEffect(() => {
    // Calculate the number of squares based on the screen width and height
    const squaresPerRow = Math.floor(window.innerWidth / 100);
    const numRows = Math.floor(window.innerHeight / 100);
    setNumSquares(squaresPerRow * numRows);
  }, []);

  return (
    <div className="square-grid">
      {Array.from({ length: numSquares }, (_, i) => (
        <div key={i} className="square"></div>
      ))}
    </div>
  );
};

export default SquareGrid;
