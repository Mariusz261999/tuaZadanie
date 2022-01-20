import React from "react";
import {Text, BotMessageWrapper, BotPhoto, BotPhotoContainer, BotMessageStyled} from "./BotMessage.styled"

const BotMessage = ({ botPhoto, text, withAvatar }) => {
  return (
    <BotMessageStyled>
      {withAvatar? 
      <BotPhotoContainer>
        <BotPhoto src={botPhoto} alt="" />
      </BotPhotoContainer> 
      : null}
      <BotMessageWrapper>
        <Text>{text}</Text>
      </BotMessageWrapper>
    </BotMessageStyled>
  );
};
export default BotMessage;
