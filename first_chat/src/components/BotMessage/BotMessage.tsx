import React from "react";
import {Text, BotMessageWrapper, BotPhoto, BotPhotoContainer, BotMessageStyled} from "./BotMessage.styled"

interface BotMessageInterface{
  botPhoto: string;
  text: string;
  withAvatar: boolean;
}

const BotMessage = ({ botPhoto, text, withAvatar }:BotMessageInterface) => {
  return (
    <BotMessageStyled>
      {text===undefined}
      {withAvatar?
      <BotPhotoContainer>
        <BotPhoto src={botPhoto} alt="" />
      </BotPhotoContainer> 
      : null}
      {text===undefined? null :
      <BotMessageWrapper>
        <Text>{text}</Text>
      </BotMessageWrapper>}
    </BotMessageStyled>
  );
};
export default BotMessage;
