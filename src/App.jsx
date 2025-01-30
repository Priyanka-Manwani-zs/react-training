// import "./App.css";

// import AccordionDisplay from "./Accordion/AccordionDisplay.jsx";

import "./App.css";

// import Test2 from "./day_11/test2";

// import Counter from "./day_8/count";
// import SignForm from "./day_8/SignForm";
// import DelayCounter from "./usememo /usememo1";
// import Memo from "./usememo /usememo2";

// import Form from "./day_10/Test";

// import Test2 from "./day_11/test2";
// import Counter from "./day_8/count";
// import SignForm from "./day_8/SignForm";
// import DelayCounter from "./usememo /usememo1";
// import Memo from "./usememo /usememo2";

import Counter from "./components/Counter";
import React, { useState } from "react";

// import ModalDisplay from "./day_13/ModalDisplay";

import Display from "./components/Display";

// import Buttons from "./day_8/Buttons";
// import Button1 from "./day_11/button.jsx";
// import Text from "./components/Text";
// import Test from "./day_10/Test";

function App() {
  // // return <Counter />;
  // // return <SignForm />;
  // return <Test2 />;
  // // return <DelayCounter />;
  // // return <Memo />;
  // return;
  // return <Buttons />;
  // return <Display />;
  // return <Counter />;
  // return <SignForm />;
  // return <Test2 />;
  // return <DelayCounter />;
  // return <Memo />;
  // return <ModalDisplay />;
  // return <Modal />;
  // return <Test2 />;
  // return <DelayCounter />;
  // return <Memo />;
  // return <Form />;
  // return (
  //   <>
  //     <AccordionDisplay />
  //   </>
  // );
}

export default App;

const Tooltip = ({
  alignment,
  text,
  children,
  isButton,
  index,

  showText,
}) => {
  const [visible, setVisible] = useState(false);

  const ref = useRef();
  useEffect(() => {
    setVisible(showText);
  }, [showText]);

  const handleOuterClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOuterClick);
    return () => document.removeEventListener("click", handleOuterClick);
  }, []);

  console.log(ref.current);
  const handleHover = () => {
    setVisible(true);
  };
  const handleHoverClose = () => {
    setVisible(false);
  };
  const handleClick = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <div
        className="maindiv"
        onMouseEnter={isButton ? null : handleHover}
        onMouseLeave={isButton ? null : handleHoverClose}
        onClick={isButton ? handleClick : null}
        ref={ref}
      >
        {visible && (
          <div
            className={
              alignment == "top"
                ? "top"
                : alignment == "right"
                ? "right"
                : alignment == "bottom"
                ? "bottom"
                : alignment == "left"
                ? "left"
                : "top"
            }
          >
            <p>{text}</p>
          </div>
        )}
        <div> {children}</div>
      </div>
    </>
  );
};

const Button = ({
  alignment,
  text,
  index,

  showSideBar,
  sidebarOpen,
}) => {
  return (
    <Tooltip text={text} alignment={alignment} isButton={true} index={index}>
      <button
        onClick={() => {
          if (index == 4) {
            showSideBar(true);
          } else {
            return;
          }
        }}
      >
        Click me
      </button>
    </Tooltip>
  );
};

const Hover = ({ alignment, text }) => {
  return (
    <Tooltip text={text} alignment={alignment}>
      <span>Hover over me</span>
    </Tooltip>
  );
};

// const tooltips = [
//   {
//     text: "",
//     alignment: "",
//   },
// ];
