import React from "react";
import "../style/App.css";
import SwitchButton from "./SwitchButton";
import ChatView from "./ChatView";
import { useState } from "react";

const App = () => {
  const [isChatVisible, setChatvisible] = useState(false);
  function hanldeClick() {
    setChatvisible((isChatVisible) => !isChatVisible);
  }
  return (
    <div className="App">
      <SwitchButton onClick={hanldeClick} />
      {isChatVisible && <ChatView onClick={hanldeClick} />}
    </div>
  );
};

export default App;
