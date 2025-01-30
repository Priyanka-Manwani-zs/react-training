import React, { useContext, useEffect, useRef } from "react";
import "./style.css";
import Context from "../context/ThemeContext";

function ChildC() {
  const { bg, changebg } = useContext(Context);
  const ChildCRef = useRef();

  useEffect(() => {
    ChildCRef.current.style.backgroundColor = bg;
  }, [bg]);

  function handlechildC() {
    changebg();
  }
  return (
    <div className="box3" ref={ChildCRef}>
      <button onClick={handlechildC}>swtich</button>
    </div>
  );
}

export default ChildC;
