import React, { useState, useEffect } from "react";

const RotatingText = ({ words, className }) => {
  const [typedText, setTypedText] = useState("");
  const [color, setColor] = useState("");

  const colors = [
    "#0ca5e7",
    "#c51aff",
    "#1affd5",
    "#21ff00",
    "#ffdd00",
    "#ff0033",
  ];

  useEffect(() => {
    if (words.length > 0) {
      startTextAnimation(0);
      setColor(getRandomColor());
    }
  }, [words]);

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      setTypedText(text.substring(0, i + 1));
      setTimeout(() => {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    } else if (typeof fnCallback === "function") {
      setTimeout(fnCallback, 2000);
    }
  }

  function startTextAnimation(i) {
    if (i < words.length) {
      setTypedText("");
      setColor(getRandomColor());
      typeWriter(words[i], 0, () => {
        startTextAnimation(i + 1);
      });
    } else {
      setTimeout(() => {
        startTextAnimation(0);
      }, 20000);
    }
  }

  return (
    <div className="rotating-text-container">
      <h1 className="sub-heading">
        i am a{" "}
        <span
          className="rotating-text active"
          style={{
            color: color,
          }}
        >
          {typedText}
        </span>
        <span className="caret" />
      </h1>
    </div>
  );
};

export default RotatingText;
