import React, { useRef, useState } from "react";
import "./accordion.css";

function Test(props) {
  const [show, setShow] = useState(false);

  const handledropdown = () => {
    setShow((prev) => (prev = !prev));
  };

  return (
    <div onClick={handledropdown}>
      {props.title}{" "}
      <span
        aria-hidden={true}
        className={
          show ? "accordion-icon" : "accordion-icon-rotated accordion-icon"
        }
      />
      {show && <p className="p">{props.content}</p>}
    </div>
  );
}

export default Test;
