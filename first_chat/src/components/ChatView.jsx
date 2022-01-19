import React from "react";
import Dialog from "./Dialog";
import AppBar from "./AppBar";
import BottomBar from "./BottomBar";
import { useEffect, useState } from "react";
import StorageService from "../services/StorageService";
import ApiService from "../services/ApiService";
import { ChatViewStyled } from "../style/ChatView.styled";


const ChatView = ({ onClick }) => {
  const [messages, setMessages] = useState({ allMessages: [] });
  const [authorization, setAuthorization] = useState("default");
  const [botName, setBotName] = useState("boTname");
  const [avatar, setAvatar] = useState("default");
  const apiService = new ApiService();

  const addMessage = ({ text, isMyMessage }) => {
    const newMessage = {
      id: Math.floor(Math.random() * 1000) * Date.now(),
      text,
      isMyMessage,
    };
    setMessages((prevState) => ({
      allMessages: [...prevState.allMessages, newMessage],
    }));
  };

  const sendMessage = (e) => {
    if (e.key === "Enter") {
      const inputMessage = e.target.value;
      if (inputMessage !== "") {
        addMessage({ text: inputMessage, isMyMessage: true });
        e.target.value = "";
        apiService
          .getBotResponse(authorization)
          .then((data) =>
            data.messages.forEach(({ value }) =>
              addMessage({ text: value, isMyMessage: false })
            )
          );
      } else {
        alert("You cannot send an empty message");
      }
    }
  };

  const setData = ({ token, botData }) => {
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
