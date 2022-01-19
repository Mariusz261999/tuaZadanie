import styled from "styled-components";

const AppBarStyled = styled.div`
  ${(props) => ({
    backgroundColor: " white",
    height: "50px",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  })}
`;

const BackButton = styled.button`
  ${(props) => ({
    backgroundColor: "white",
    borderStyle: "none",
    ":hover": {
      cursor: "pointer",
    },
  })}
`;

const BotName = styled.p`
  ${(props) => ({
    width: "100%",
    marginRight: "30px",
  })}
`;

const ActiveDot = styled.span`
  ${(props) => ({
    display: "inline-block",
    width: "10px",
    height: "10px",
    backgroundColor: "rgb(20, 204, 20)",
    borderRadius: "50%",
  })}
`;

export {AppBarStyled, BackButton, BotName, ActiveDot}