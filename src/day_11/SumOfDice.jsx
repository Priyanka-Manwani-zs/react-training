import React, { useState, useMemo, useEffect } from "react";
import "./childComponent.css";
import { Audio } from "react-loader-spinner";

const SumOfDice = ({ value, showDice, showloader }) => {
  const [imagesToShow, setImagesToShow] = useState([]);
  const [sumImages, setSumImages] = useState([]);
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

  function targetSum() {
    const result = [];
    for (let i = 1; i <= value; i++) {
      result.push({ a: i, b: value - i });
    }
    console.log("result", result);
    return result;
  }
  const sumEle = targetSum();
  console.log("obje pairs", sumEle);

  const Display = [];
  const ImagesAccToSum = [];

  function displayImages() {
    sumEle.map((ele, i) => {
      Display.push(ele.a);
      Display.push(ele.b);

      return Display;
    });

    for (let i = 0; i < Display.length - 2; i++) {
      console.log("1st ind", arr[Display[i]]);
      ImagesAccToSum.push(arr[Display[i] - 1]);
    }

    console.log("final dice images to be displayed", ImagesAccToSum);

    return ImagesAccToSum;
  }

  displayImages();

  return (
    <div className="maindiv">
      {showloader && (
        <div className="loader">
          {" "}
          <Audio
            height="50"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      )}

      {showDice &&
        ImagesAccToSum.map((img, ind) => {
          return (
            <img
              className="card"
              src={`/${img}`}
              alt={`Dice ${ind + 1}`}
              key={ind}
            />
          );
        })}
    </div>
  );
};

export default SumOfDice;
