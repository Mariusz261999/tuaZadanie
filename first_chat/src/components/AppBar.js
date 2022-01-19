import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

const AppBar = ({ onClick, botName }) => {
  return (
    <div className="appBar">
      <button onClick={onClick}>
        <FontAwesomeIcon icon={faArrowCircleLeft} />
      </button>
      <p>
        <span></span> {botName}
      </p>
    </div>
  );
};
export default AppBar;
