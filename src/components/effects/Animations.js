import React, { useEffect, useState } from "react";

export const AnimateList = ({ items, itemDelay, delay, renderItem }) => {
  const [renderCount, setRenderCount] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  // Handle the initial delay before starting the animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  // Increment renderCount after the initial delay has passed
  useEffect(() => {
    if (startAnimation) {
      if (renderCount < items.length) {
        const timer = setTimeout(() => {
          setRenderCount(renderCount + 1);
          console.log("itemDelay: ", itemDelay * renderCount);
        }, itemDelay * renderCount);

        return () => clearTimeout(timer);
      }
    }
  }, [renderCount, items.length, itemDelay, startAnimation]);

  return (
    <>
      {startAnimation &&
        items
          .slice(0, renderCount)
          .map((item, index) => renderItem(item, index))}
    </>
  );
};
