import React from "react";

const BotMessage = ({ botPhoto, text }) => {
  return (
    <div className="botMessage">
      <div className="botPhoto">
        <img src={botPhoto} alt="" />
      </div>
      <div className="botWrapper">
        <div className="botMessageWrapper">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
export default BotMessage;
