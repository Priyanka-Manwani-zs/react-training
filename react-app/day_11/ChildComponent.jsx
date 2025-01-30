import React, { useState, useMemo } from "react";
import "./childComponent.css";

const ChildComponent = ({ value, showDice }) => {
  const addbuttons = (num) => {
    console.log(num);
    let buttonsArray = [
      "dice1.png",
      "dice2.png",
      "dice3.png",
      "dice4.png",
      "dice5.png",
      "dice6.png",
    ];

    let imagesArr = [];

    for (let i = 0; i < num; i++) {
      imagesArr.push(buttonsArray[i]);
    }

    return imagesArr;
  };

  const arr = addbuttons(value);
  console.log(arr);

  return (
    <div className="maindiv">
      {showDice &&
        arr.map((img, ind) => {
          return (
            <img className="card" src={`/${img}`} alt={`Dice ${ind + 1}`} />
          );
        })}
    </div>
  );
};

export default ChildComponent;
