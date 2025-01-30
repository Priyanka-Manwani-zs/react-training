import React, { useState } from "react";
import "./modal.css";
import { IoIosCloseCircle } from "react-icons/io";

function Modal({ onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 500);
  };
  return (
    <>
      <div className="maindiv-modal">
        <div className={`modal ${isClosing ? "exit" : ""}`}>
          <IoIosCloseCircle size={24} className="cross" onClick={handleClose} />
          <p>Hello there</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            explicabo minus ducimus inventore obcaecati repellat sit error,
            recusandae commodi illum nesciunt ipsam a nam animi et provident
            tempore nihil dolorum! Commodi eaque voluptate vitae quis soluta,
            omnis consequuntur nemo harum.
          </p>
        </div>
      </div>
    </>
  );
}

export default Modal;
