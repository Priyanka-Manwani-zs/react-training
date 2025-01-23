import React, { useState } from "react";
import "./modal.css";

function Modal({ show, onClose }) {
  if (!show) {
    return null;
  }
  return (
    <div className="maindiv-modal">
      <div className="modal">
        <span className="cross" onClick={onClose}>
          X
        </span>
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
  );
}

export default Modal;
