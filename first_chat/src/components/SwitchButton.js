import React from "react";

const SwitchButton = ({ onClick }) => {
  return (
    <img
      src="https://cdn.liveagent.com/app/uploads/2020/07/LiveAgent-academy-free-live-chat-software.svg"
      className="switchButton"
      alt="switch Button"
      onClick={onClick}
    ></img>
  );
};
export default SwitchButton;
