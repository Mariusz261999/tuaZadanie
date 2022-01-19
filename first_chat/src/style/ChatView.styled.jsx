import styled from "styled-components";

const ChatViewStyled = styled.div`
  ${(props) => ({
    position: "absolute",
    backgroundColor: "rgb(239 239 239)",
    bottom: " 80px",
    right: "80px",
    height: "600px",
    width: "350px",
    transition: "all 2s",
  })}
`;

export {ChatViewStyled};