import { useState, useRef, useEffect } from "react";
import "./Tooltip.css";

// function SideDrawer({ showSideBar }) {
//   const sidebarref = useRef(null);
//   const [show, setShow] = useState(showSideBar);

//   useEffect(() => {
//     setShow(showSideBar);
//   }, [showSideBar]);

//   const handleOuterClick = (e) => {
//     if (sidebarref.current && !sidebarref.current.contains(e.target)) {
//       //   setShow(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("click", handleOuterClick);
//     return () => document.removeEventListener("click", handleOuterClick);
//   }, [sidebarref]);

//   return <>{show && <div className="sideDrawer" ref={sidebarref}></div>}</>;
// }

function SideDrawer({ setShowSideBar }) {
  function handleclick(e) {
    if (e.target.id == "sidebarContainer") {
      setShowSideBar(false);
    }
  }
  return (
    <main
      className="sidebarContainer"
      onClick={handleclick}
      id="sidebarContainer"
    >
      <div className="sideDrawer">SIDE BAR</div>
    </main>
  );
}
export default SideDrawer;
