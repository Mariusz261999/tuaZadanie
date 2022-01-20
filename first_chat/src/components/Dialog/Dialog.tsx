import React from "react";
import { useEffect } from "react";
// @ts-ignore
import MyMessage from "../MyMessage/MyMessage.tsx";
// @ts-ignore
import BotMessage from "../BotMessage/BotMessage.tsx";
import { DialogStyled } from "./Dialog.styled";


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
