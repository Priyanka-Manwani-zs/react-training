import React from "react";
import "./Test.css";

function form(props) {
  return (
    <div className="maindiv">
      <img src={props.img} alt="no image" />
      <div className="subdiv">
        <div className="title">
          {" "}
          <p>{props.title}</p>
        </div>

        <div className="description">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default form;
