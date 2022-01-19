import React from "react";
import { useEffect } from "react";
import MyMessage from "./MyMessage";
import BotMessage from "./BotMessage";
import { DialogStyled } from "../style/Dialog.styled";

const Dialog = ({ messages, avatar }) => {
  let lastMessageIsMyMessage = false;
  const textsComponents = messages.allMessages.map((message) => {
    const isMyMessage = message.isMyMessage;
    const withAvatarBot = lastMessageIsMyMessage;
    const withAvatarUser = !lastMessageIsMyMessage;
    lastMessageIsMyMessage = isMyMessage
  
    return isMyMessage ? (
      <MyMessage 
      key={message.id} 
      text={message.text} 
      withAvatar={withAvatarUser}/>
    ) : (
      <BotMessage 
      key={message.id} 
      text={message.text} 
      botPhoto={avatar} 
      withAvatar={withAvatarBot}/>
    );
  });

  useEffect(() => {
    var messegesContainer = document.querySelector(".dialog");
    messegesContainer.scrollTop = messegesContainer.scrollHeight;
  }, [textsComponents]);

  return <DialogStyled className="dialog">{textsComponents}</DialogStyled>;
};

export default Dialog;
