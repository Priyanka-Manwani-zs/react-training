import "./App.css";
import Test2 from "./day_11/test2";
import Modal from "./day_13/modal";
import Counter from "./day_8/count";
import SignForm from "./day_8/SignForm";
import DelayCounter from "./usememo /usememo1";
import Memo from "./usememo /usememo2";
// import Counter from "./components/Counter";
import React, { useState } from "react";
import "./day_13/modal.css";

// import Buttons from "./day_8/Buttons";
// import Text from "./components/Text";
// import Test from "./day_10/Test";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // return <Buttons />;
  // return <Counter />;
  // return <SignForm />;
  // return <Test2 />;
  // return <DelayCounter />;
  // return <Memo />;
  return (
    <div className="outerDiv">
      <button onClick={openModal}>Click Me</button>
      {showModal && <Modal onClose={closeModal} />}
    </div>
  );
  // return <Modal />;
}

export default App;
