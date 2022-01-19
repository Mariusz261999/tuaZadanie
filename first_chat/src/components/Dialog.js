import React from "react";
import { useEffect } from "react";
import MyMessage from "./MyMessage";
import BotMessage from "./BotMessage";

const Dialog = ({ messages, avatar }) => {
  const textsComponents = messages.allMessages.map((message) =>
    message.isMyMessage ? (
      <MyMessage key={message.id} text={message.text} />
    ) : (
      <BotMessage key={message.id} text={message.text} botPhoto={avatar} />
    )
  );
  useEffect(() => {
    var messegesContainer = document.querySelector(".dialog");
    messegesContainer.scrollTop = messegesContainer.scrollHeight;
  }, [textsComponents]);
  return (
    <div className="dialog">
      <div className="Messages">{textsComponents}</div>
    </div>
  );
};

export default Dialog;
