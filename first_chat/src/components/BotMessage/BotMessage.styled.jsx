import styled from "styled-components";

export const BotMessageStyled = styled.div`
  ${() => ({
    display: "flex",
    flexDirection: "column",
  })}
`;

export const BotPhotoContainer = styled.div`
  ${() => ({
    display: "flex",
  })}
`;

export const BotPhoto = styled.img`
  ${() => ({
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  })}
`;

export const BotMessageWrapper = styled.div`
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

export const Text = styled.p`
  ${(props) => ({
    margin: "0",
    color: "white",
  })}
`;
