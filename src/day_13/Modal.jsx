import React from "react";
import "./modal.css";
import { IoIosCloseCircle } from "react-icons/io";

function Modal({ onClose }) {
  return (
    <>
      <div className="maindiv-modal">
        <div className="modal">
          <IoIosCloseCircle size={24} className="cross" onClick={onClose} />
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
