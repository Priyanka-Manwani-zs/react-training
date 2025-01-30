import { useState, useRef, useEffect } from "react";
import "./Tooltip.css";
import SideDrawer from "./sideDrawer";

function ToolTipDisplay() {
  const arr = [
    {
      alignment: "top",
      title: "click me 1",
    },
    { alignment: "bottom", title: "hover me 1" },
    { alignment: "top", title: "click me 2" },
    { alignment: "right", title: "hover me 2" },
    { alignment: "top", title: "click me 3" },
    { alignment: "bottom", title: "hover me 3" },
    { alignment: "left", title: "click me 4" },
    { alignment: "bottom", title: "hover me 4" },
    { alignment: "top", title: "click me 5" },
  ];

  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      {/* <SideDrawer /> */}

      <main className="maincontainer">
        {arr.map((ele, i) => (
          <div className="card">
            {i % 2 === 0 ? (
              <Button
                alignment={ele.alignment}
                text={ele.title}
                index={i}
                showSideBar={setShowSideBar}
                sidebarOpen={showSideBar}
              />
            ) : (
              <Hover alignment={ele.alignment} text={ele.title} />
            )}
          </div>
        ))}

        {showSideBar && <SideDrawer setShowSideBar={setShowSideBar} />}
      </main>
    </>
  );
}

export default ToolTipDisplay;

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
