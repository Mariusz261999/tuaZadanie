import styled from "styled-components";

export const AppBarStyled = styled.div`
  ${() => ({
    backgroundColor: " white",
    height: "50px",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  })}
`;

export const BackButton = styled.button`
  ${() => ({
    backgroundColor: "white",
    borderStyle: "none",
    ":hover": {
      cursor: "pointer",
    },
  })}
`;

export const BotName = styled.p`
  ${() => ({
    width: "100%",
    marginRight: "30px",
  })}
`;

export const ActiveDot = styled.span`
  ${() => ({
    display: "inline-block",
    width: "10px",
    height: "10px",
    backgroundColor: "rgb(20, 204, 20)",
    borderRadius: "50%",
  })}
`;
