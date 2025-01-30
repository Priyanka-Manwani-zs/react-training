import React from "react";

function Throttlilng() {
  function throttle(func, delay) {
    let timeoutId;
    return () => {
      if (!timeoutId) {
        console.log("hi");
        timeoutId = setTimeout(() => {
          timeoutId = null;
        }, delay);
      }
    };
  }

  let handle = throttle();

  return (
    <div>
      <button onClick={handle}> click</button>
    </div>
  );
}

export default Throttlilng;
