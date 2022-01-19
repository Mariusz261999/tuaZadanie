import React from "react";
import {MyMessageStyled, MyPhoto, MyWrapper, Text, MyMessageWrapper,  ImgPhoto} from "../style/MyMessage.styled"


const MyMessage = ({ text, withAvatar}) => {
  return (
    <MyMessageStyled>
      {withAvatar? 
      <MyPhoto>
      <ImgPhoto
        src="https://www.seekpng.com/png/full/356-3562377_personal-user.png"
        alt="myPhoto"
      />
    </MyPhoto>
      : null}
      <MyWrapper>
        <MyMessageWrapper>
          <Text>{text}</Text>
        </MyMessageWrapper>
      </MyWrapper>
    </MyMessageStyled>
  );
};

export default MyMessage;
