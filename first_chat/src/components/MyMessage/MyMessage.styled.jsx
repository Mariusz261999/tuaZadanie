import styled from "styled-components";

export const MyMessageStyled = styled.div`
  ${() => ({})}
`;

export const MyPhoto = styled.div`
  ${() => ({
    display: "flex !important",
    placeContent: "end",
  })}
`;

export const MyWrapper = styled.div`
  ${() => ({
    display: "flex",
    flexDirection: "row-reverse",
  })}
`;

export const ImgPhoto = styled.img`
  ${() => ({
    height: "50px",
    width: "50px",
    borderRadius: "50%",
  })}
`;

export const MyMessageWrapper = styled.div`
  ${() => ({
    background: "white",
    boxShadow: "none",
    borderRadius: "24px 0px 24px 24px",
    justifyContent: "flex-end",
    padding: "11px 16px",
    overflowWrap: "break-word",
    margin: "5px 0px",
  })}
`;

export const Text = styled.p`
  ${() => ({
    margin: "0",
  })}
`;