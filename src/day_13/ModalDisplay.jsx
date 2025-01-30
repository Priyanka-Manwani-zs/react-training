import React, { useState } from "react";
import "./modal.css";
import Modal from "./modal";

function ModalDisplay() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="outerDiv">
      <button onClick={openModal}>Click Me</button>
      {showModal && <Modal onClose={closeModal} />}
    </div>
  );
}

export default ModalDisplay;
