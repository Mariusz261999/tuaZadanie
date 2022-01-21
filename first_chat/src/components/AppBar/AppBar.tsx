import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import {AppBarStyled, BackButton, BotName, ActiveDot} from "./AppBar.styled.jsx"

interface AppBarInterface{
  onClick: ()=> void;
  botName: string;
}


const AppBar = ({onClick, botName}:AppBarInterface ) => {
  return (
    <AppBarStyled>
      <BackButton onClick={onClick}>
        <FontAwesomeIcon icon={faArrowCircleLeft} />
      </BackButton>
      <BotName>
        <ActiveDot /> {botName}
      </BotName>
    </AppBarStyled>
  );
};
export default AppBar;
