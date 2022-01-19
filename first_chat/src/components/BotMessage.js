import React from "react";

const BotMessage = ({ botPhoto, text }) => {
  return (
    <div className="botMessageWrapper">
      <div className="botPhoto">
        <img src={botPhoto} alt="" />
      </div>
      <div className="botWrapper">
        <div className="botMessage">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
export default BotMessage;
