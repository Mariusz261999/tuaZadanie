import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faPaperclip } from "@fortawesome/free-solid-svg-icons";

const BottomBar = ({ onKeyPress }) => {
  return (
    <div className="bottomBar">
      <FontAwesomeIcon icon={faSmile} className="faSmile" />
      <input
        type="text"
        className="message"
        placeholder="type something..."
        onKeyPress={onKeyPress}
      />
      <FontAwesomeIcon icon={faPaperclip} className="faPaperclip" />
    </div>
  );
};
export default BottomBar;
