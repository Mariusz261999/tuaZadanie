import React from "react";
import Dialog from "./Dialog";
import AppBar from "./AppBar";
import BottomBar from "./BottomBar";
import { useEffect, useState } from "react";
import StorageService from "./StorageService";

const ChatView = ({ onClick }) => {
  const [messages, setMessages] = useState({ allMessages: [] });
  const [authorization, setAuthorization] = useState("default");
  const [botName, setBotName] = useState("Botname");
  const [avatar, setAvatar] = useState("default");
  const storage = new StorageService();

  const messageAPI =
    "https://actionbot-demo.eu-de.mybluemix.net/test-api/message";
  const authorizationAPI =
    "https://actionbot-demo.eu-de.mybluemix.net/test-api/auth";

  const addMessage = ({ text, isMyMessage }) => {
    const newMessage = {
      id: Math.floor(Math.random() * 1000) * Date.now(),
      text,
      isMyMessage,
    };
    setMessages((prevState) => ({
      allMessages: [...prevState, newMessage],
    }));
  };

  const sendMessage = (e) => {
    if (e.key === "Enter") {
      const inputMessage = e.target.value;
      if (inputMessage !== "") {
        addMessage({ text: inputMessage, isMyMessage: true });
        e.target.value = "";

        const requestOptions = {
          method: "POST",
          headers: { Authorization: authorization },
          body: JSON.stringify({ text: "text" }),
        };
        fetch(messageAPI, requestOptions)
          .then((response) => {
            if (response.ok) {
              return response;
            }
            throw Error(response.status);
          })
          .then((response) => response.json())
          .then((data) => {
            data.messages.forEach(({ value }) =>
              addMessage({ text: value, isMyMessage: false })
            );
          })
          .catch((error) => console.log(error));
      } else {
        alert("You cannot send an empty message");
      }
    }
  };

  const sendAuthorization = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: "test", password: "test123" }),
    };
    fetch(authorizationAPI, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        storage.setAuthorizationData({ data });
        setData(data);
      })
      .catch((error) => console.log(error));
  };

  const setData = ({ token, botData }) => {
    setAuthorization(token);
    setBotName(botData.name);
    setAvatar(botData.avatar);
  };

  useEffect(() => {
    const data = storage.getMessagesData();
    if (data) {
      setMessages(data);
    }
    if (storage.getAuthorizationData() === null) {
      sendAuthorization();
    } else {
      setData(storage.getAuthorizationData());
    }
  }, []);

  useEffect(() => {
    storage.setMessagesData(messages);
  }, [messages, storage]);

  return (
    <>
      <div className="ChatView">
        <AppBar onClick={onClick} botName={botName} />
        <Dialog messages={messages} avatar={avatar} />
        <BottomBar onKeyPress={sendMessage} />
      </div>
    </>
  );
};
export default ChatView;
