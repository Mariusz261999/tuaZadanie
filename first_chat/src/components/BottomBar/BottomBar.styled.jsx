import styled from "styled-components";

export const BottomBarStyled = styled.div`
  ${() => ({
    backgroundColor: "white",
    position: "absolute",
    bottom: "0px",
    display: "flex",
    width: "94%",
    height: "50px",
    alignItems: "center",
    padding: "0px 10px",
  })}
`;

export const InputMessage = styled.input`
  ${() => ({
    width: "100%",
    height: "30px",
    borderStyle: " none",
    margin: " 0px 5px",
    padding: " 0px 10px",
  })}
`;