import styled from "styled-components";

const DialogStyled = styled.div`
  ${(props) => ({
    boxSizing: " border-box",
    overflow: "scroll",
    height: "500px",
    flex: " 1 1 0%",
    overflowX: "hidden auto",
    padding: " 10px 20px",
  })}
`;

export {DialogStyled};