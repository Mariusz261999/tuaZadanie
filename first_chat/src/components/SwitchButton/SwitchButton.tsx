import React from "react";
import { SwitchButtonStyled } from "./SwitchButton.styled";

interface ISwitchButton{
  onClick: ()=> void;
}

const SwitchButton = ({onClick}: ISwitchButton) =>{
  return (
    <SwitchButtonStyled
      src="https://cdn.liveagent.com/app/uploads/2020/07/LiveAgent-academy-free-live-chat-software.svg"
      alt="switch Button"
      onClick={onClick}
    ></SwitchButtonStyled>
  );
};
export default SwitchButton;
