import styled from "styled-components";

const SwitchButtonStyled = styled.img`
  ${(props) => ({
    position: "absolute",
    bottom: "10px",
    right: "30px",
    height: "50px",
    width: "50px",
    padding: "5px",
    backgroundColor: "white",
    borderRadius: "50%",
    ":hover": {
      cursor: "pointer",
    },
  })}
`;

export {SwitchButtonStyled};