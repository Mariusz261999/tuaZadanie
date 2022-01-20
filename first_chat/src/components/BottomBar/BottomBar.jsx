import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { BottomBarStyled, InputMessage } from "./BottomBar.styled";


const BottomBar = ({ onKeyPress }) => {
  return (
    <BottomBarStyled>
      <FontAwesomeIcon icon={faSmile} className="faSmile" />
      <InputMessage
        type="text"
        className="message"
        placeholder="type something..."
        onKeyPress={onKeyPress}
      />
      <FontAwesomeIcon icon={faPaperclip} className="faPaperclip" />
    </BottomBarStyled>
  );
};
export default BottomBar;
