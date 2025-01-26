import { useState } from "react";
import "./progress.css";
export default function ProgressBars() {
  const arr = [
    "one",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eight",
  ];
  const [bar, setBar] = useState();

  function handleclick() {
    let i = 0;
    const interval = setInterval(() => {
      setBar(arr[i]);
      i++;

      if (i >= arr.length) {
        clearInterval(interval);
      }
    }, 500);
  }
  return (
    <div className="main">
      <button onClick={handleclick}>Add</button>
      <div className="bar">
        <div className={bar}></div>
      </div>
    </div>
  );
}
