import React, { useState } from "react";

import Button1 from "./button";
import "./test2.css";
import ChildComponent from "./ChildComponent";

const Test2 = () => {
  const [inputValue, setInputValue] = useState("");
  const [showEr, setShowEr] = useState(false);

  const handleChange = (e) => {
    if (e.target.value > 6) {
      setShowEr(true);
    } else {
      setInputValue(e.target.value);
      setShowDice(false);
      setShowEr(false);
    }
  };
  const [showDice, setShowDice] = useState(false);

  const handleClick = () => {
    setShowDice(true);
  };
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleChange}
      />
      {showEr && <p className="err">Please enter value less than equal to 6</p>}

      {/* <Button1 value={inputValue} changeVal={changeVal} /> */}

      <button onClick={handleClick} className="btn">
        roll
      </button>
      <ChildComponent value={inputValue} showDice={showDice} />
    </div>
  );
};

export default Test2;
