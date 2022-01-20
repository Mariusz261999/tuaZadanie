import styled from "styled-components";

export const DialogStyled = styled.div`
  ${() => ({
    boxSizing: " border-box",
    overflow: "scroll",
    height: "500px",
    flex: " 1 1 0%",
    overflowX: "hidden auto",
    padding: " 10px 20px",
  })}
`;
