import React from "react";
import ReactDOM from "react-dom/client";

let val = [];
let Global_index = 0;
const root = ReactDOM.createRoot(document.getElementById("root"));

function hook(initialval) {
  const localIndex = Global_index;
  Global_index++;
  val[localIndex] = initialval;

  function setState(newVal) {
    val[localIndex] = newVal;
    Global_index = localIndex;
    root.render(<MyCustomHook />);
  }

  return [val[localIndex], setState];
}

function MyCustomHook() {
  let [text, setText] = hook("hi");

  setTimeout(() => {
    setText("Priyanka");
  }, 400);
  return <h1>{text}</h1>;
}

export default MyCustomHook();
