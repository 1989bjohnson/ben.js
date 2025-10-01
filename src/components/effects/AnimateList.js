import React from "react";

const AnimateList = ({ children, style }) => {
  return (
    <div style={style}>
      {React.Children.map(children, (child, index) => (
        <div style={{ animationDelay: `${index * 250}ms` }}>{child}</div>
      ))}
    </div>
  );
};

export default AnimateList;
