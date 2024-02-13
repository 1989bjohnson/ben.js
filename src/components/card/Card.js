import { useRef } from "react";
import "./Card.scss";

export const Card = ({ heading, text }) => {
  const cardRef = useRef();

  return (
    <div className="custom-card" ref={cardRef}>
      <div className="custom-card-container">
        <div className="center-content">
          {heading && <h1 className="heading">{heading}</h1>}
          {text && <p>{text}</p>}
        </div>
      </div>
    </div>
  );
};
