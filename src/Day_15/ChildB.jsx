import React, { useContext, useEffect, useRef } from "react";
import "./style.css";
import Context from "../context/ThemeContext";
function ChildB() {
  const { bg, changebg } = useContext(Context);
  const ChildBRef = useRef();

  useEffect(() => {
    ChildBRef.current.style.backgroundColor = bg;
  }, [bg]);

  function handlechildB() {
    changebg();
  }
  return (
    <div className="box2" ref={ChildBRef}>
      <button onClick={handlechildB}>swtich</button>
    </div>
  );
}

export default ChildB;
