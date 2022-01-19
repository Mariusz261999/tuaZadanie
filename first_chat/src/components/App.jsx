import React from "react";
import SwitchButton from "./SwitchButton";
import ChatView from "./ChatView";
import { useState } from "react";
import {AppStyled} from "../style/App.styled.jsx";

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
