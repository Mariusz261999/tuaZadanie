import React from "react";
import SwitchButton from "../SwitchButton/SwitchButton";
import ChatView from "../ChatView/ChatView";
import { useState } from "react";
import {AppStyled} from "./App.styled.jsx";

const App = () => {
  const [isChatVisible, setChatvisible] = useState(false);

  function hanldeClick() {
    setChatvisible((isChatVisible) => !isChatVisible);
  }

  return (
    <AppStyled>
      <SwitchButton onClick={hanldeClick} />
      {isChatVisible && <ChatView onClick={hanldeClick} />}
    </AppStyled>
  );
};

export default App;
