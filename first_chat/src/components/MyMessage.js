import React from "react";

const MyMessage = ({ text }) => {
  return (
    <div className="myMessage">
      <div className="myPhoto">
        <img
          src="https://www.seekpng.com/png/full/356-3562377_personal-user.png"
          alt="myPhoto"
        />
      </div>
      <div className="myWrapper">
        <div className="myMessageWrapper">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default MyMessage;
