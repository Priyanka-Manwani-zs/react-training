import React, { useState } from "react";
import "./Practice.css";

function Practice() {
  const [clicked, setClicked] = useState([]);

  const [bgColor, setBgColor] = useState(Array(7).fill(false));
  console.log(bgColor);
  const [moves, setMoves] = useState(0);

  function handleclick(i) {
    if (clicked.includes(i)) {
      return;
    }
    if (clicked.length > 3) {
      return;
    }
    setClicked((prev) => [...prev, i]);

    setBgColor((prev) => prev.map((ele, ind) => (ind == i ? "true" : ele)));
  }

  console.log(clicked);

  function generateButton(num) {
    const ButtonArray = [];

    for (let i = 0; i < num; i++) {
      ButtonArray.push(
        <button
          className={bgColor[i] && "green"}
          onClick={() => {
            handleclick(i);
          }}
        >
          Button {i + 1}
        </button>
      );
    }

    return ButtonArray;
  }
  const arr = generateButton(7);

  return (
    <div>
      {arr.map((ele, key) => {
        return ele;
      })}
    </div>
  );
}

export default Practice;
