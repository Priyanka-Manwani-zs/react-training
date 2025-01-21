import React, { useRef, useEffect, useState, useTransition } from "react";
import "./Buttons.css";

function Buttons() {
  const addbuttons = (num) => {
    let buttonsArray = [];
    for (let i = 1; i <= num; i++) {
      let btn_name = "Button " + i;

      buttonsArray.push(btn_name);
    }

    return buttonsArray;
  };
  const arr = addbuttons(9);
  const handleButtonClick = (ind) => {
    // if (moves < 4) {
    //   if (e.target.className == "clicked") {
    //     return;
    //   } else {
    //     console.log(e.target.className);
    //     e.target.className = "clicked";
    //     moves++;
    //     console.log("moves", moves);
    //   }
    // } else {
    //   alert("no more click");
    // }
    if (clickedButtons.includes(ind)) return;
    if (clickedButtons.length == 4) return;

    setClickedButtons((prev) => [...prev, ind]);

    if (moves < 4) {
      setMoves((moves) => moves + 1);
      setButtonColors((prevColors) =>
        prevColors.map((color, i) => (i === ind ? "green" : color))
      );
    }
  };

  const removeEle = () => {
    let i = clickedButtons.length;
    if (clickedButtons.length == 4) {
      setInterval(() => {
        let el = clickedButtons[i];
        setButtonColors((prevColors) =>
          prevColors.map((color, i) => (i === el ? "black" : color))
        );
        i--;
      }, 300);
    }
  };
  const [clickedButtons, setClickedButtons] = useState([]);

  useEffect(() => {
    if (clickedButtons.length === 4)
      setTimeout(() => {
        removeEle();
        setMoves(0);
        setClickedButtons([]);
      }, 1000);
  }, [clickedButtons]);

  // Ansh's Code

  const [buttonColors, setButtonColors] = useState(
    Array(arr.length).fill("black")
  );

  const [moves, setMoves] = useState(0);
  console.log("rendered");

  return (
    <div className="maindiv">
      {arr.map((button, ind) => {
        return (
          <button
            key={ind}
            className="btn"
            onClick={() => handleButtonClick(ind)}
            style={{
              backgroundColor: buttonColors[ind],
            }}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
}

export default Buttons;
