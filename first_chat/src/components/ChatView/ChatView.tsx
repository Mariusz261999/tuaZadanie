import React from "react";
// @ts-ignore
import Dialog from "../Dialog/Dialog.tsx";
// @ts-ignore
import AppBar from "../AppBar/AppBar.tsx";
// @ts-ignore
import BottomBar from "../BottomBar/BottomBar.tsx";
import { useEffect, useState } from "react";
import StorageService from "../../services/StorageService";
import ApiService from "../../services/ApiService";
import { ChatViewStyled } from "./ChatView.styled";

interface ChatViewProps{
onClick:()=>void;
}
interface AddMessageProps{
  text:string,
  isMyMessage: boolean
}
interface valueInterface{
  value: string
}
interface setDataInterface{
  token: string,
  botData:{
    name:string,
    avatar:string,
  }
}



const ChatView = ({ onClick }:ChatViewProps) => {
  const [messages, setMessages] = useState( {allMessages: [{}]} );
  const [authorization, setAuthorization] = useState("default");
  const [botName, setBotName] = useState("boTname");
  const [avatar, setAvatar] = useState("default");
  const apiService = new ApiService();

  const addMessage = ({ text, isMyMessage }:AddMessageProps) => {
    const newMessage = {
      id: Math.floor(Math.random() * 1000) * Date.now(),
      text,
      isMyMessage,
    };
    setMessages((prevState) => ({
      allMessages: [...prevState.allMessages, newMessage],
    }));
  };

  const sendMessage = (e: { key: string; target: { value: string; }; }) => {
    if (e.key === "Enter") {
      const inputMessage = e.target.value;
      if (inputMessage !== "") {
        addMessage({ text: inputMessage, isMyMessage: true });
        e.target.value = "";
        apiService
          .getBotResponse(authorization)
          .then((data) =>
            data.messages.forEach(({value}:valueInterface) =>
              addMessage({ text: value, isMyMessage: false })
            )
          );
      } else {
        alert("You cannot send an empty message");
      }
    }
  };

  const setData = ({ token, botData }:setDataInterface) => {
    setAuthorization(token);
    setBotName(botData.name);
    setAvatar(botData.avatar);
  };

  useEffect(() => {
    const storage = new StorageService();
    const apiService = new ApiService();
    const messagesData = storage.getMessagesData();
    const authorizationData = storage.getAuthorizationData();
    if (messagesData) {
      setMessages(messagesData);
    }
    if (authorizationData === null) {
      apiService
        .sendAuthorization()
        .then((authorizationData) => setData(authorizationData));
    } else {
      setData(authorizationData);
    }
  }, []);

  useEffect(() => {
    const storage = new StorageService();
    storage.setMessagesData(messages);
  }, [messages]);

  return (
    <ChatViewStyled>
      <AppBar onClick={onClick} botName={botName} />
      <Dialog messages={messages} avatar={avatar} />
      <BottomBar onKeyPress={sendMessage} />
    </ChatViewStyled>
  );
};
export default ChatView;
