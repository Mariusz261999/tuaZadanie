import styled from "styled-components";

const BotMessageStyled = styled.div`
  ${(props) => ({
    display: "flex",
    flexDirection: "column",
  })}
`;

const BotPhotoContainer = styled.div`
  ${(props) => ({
    display: "flex",
  })}
`;

const BotPhoto = styled.img`
  ${(props) => ({
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  })}
`;

const BotMessageWrapper = styled.div`
  ${(props) => ({
    background: "#3b414a",
    boxShadow: "none",
    borderRadius: "0px 24px 24px 24px",
    justifyContent: "flex-end",
    padding: "11px 16px",
    overflowWrap: "break-word",
    margin: "5px 0px",
  })}
`;

const Text = styled.p`
  ${(props) => ({
    margin: "0",
    color: "white",
  })}
`;

export {Text, BotMessageWrapper, BotPhoto, BotPhotoContainer, BotMessageStyled};