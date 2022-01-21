import React from "react";
// @ts-ignore
import SwitchButton from "../SwitchButton/SwitchButton.tsx";
// @ts-ignore
import ChatView from "../ChatView/ChatView.tsx";
import { useState } from "react";
import {AppStyled} from "./App.styled.jsx";


const App = () => {
  const [isChatVisible, setChatvisible] = useState(false);
  function hanldeClick() {
    setChatvisible((isChatVisible) => !isChatVisible);
  }

  return (
    <AppStyled>
      <SwitchButton onClick={hanldeClick}/>
      {isChatVisible && <ChatView onClick={hanldeClick} />}
    </AppStyled>
  );
};

export default App;
