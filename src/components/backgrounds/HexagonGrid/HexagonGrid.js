import React, { useState, useEffect } from "react";
import "./HexagonGrid.scss";

const HexagonGrid = () => {
  const [numHexagons, setNumHexagons] = useState(0);

  useEffect(() => {
    const hexagonsPerRow = Math.floor(window.innerWidth / 100);
    const numRows = Math.floor(window.innerHeight / 100);
    setNumHexagons(hexagonsPerRow * numRows);
  }, []);

  return (
    <div className="hexagon-grid">
      {Array.from({ length: numHexagons }, (_, i) => (
        <div key={i} className="hexagon"></div>
      ))}
    </div>
  );
};

export default HexagonGrid;
