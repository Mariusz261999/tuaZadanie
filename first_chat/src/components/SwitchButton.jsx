import React from "react";
import { SwitchButtonStyled } from "../style/SwitchButton.styled";

const SwitchButton = ({ onClick }) => {
  return (
    <SwitchButtonStyled
      src="https://cdn.liveagent.com/app/uploads/2020/07/LiveAgent-academy-free-live-chat-software.svg"
      alt="switch Button"
      onClick={onClick}
    ></SwitchButtonStyled>
  );
};
export default SwitchButton;
