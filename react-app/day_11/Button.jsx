import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import "./Button.css";

function Button1({ value, changeVal }) {
  const [showDice, setShowDice] = useState(false);

  const handleClick = () => {
    setShowDice(true);
  };
  return (
    <div className="maindiv">
      <button onClick={handleClick}>HELLO</button>

      <ChildComponent value={value} showDice={showDice} />
    </div>
  );
}

export default Button1;
