import styled from "styled-components";

const MyMessageStyled = styled.div`
  ${(props) => ({})}
`;

const MyPhoto = styled.div`
  ${(props) => ({
    display: "flex !important",
    placeContent: "end",
  })}
`;

const MyWrapper = styled.div`
  ${(props) => ({
    display: "flex",
    flexDirection: "row-reverse",
  })}
`;

const ImgPhoto = styled.img`
  ${(props) => ({
    height: "50px",
    width: "50px",
    borderRadius: "50%",
  })}
`;

const MyMessageWrapper = styled.div`
  ${(props) => ({
    background: "white",
    boxShadow: "none",
    borderRadius: "24px 0px 24px 24px",
    justifyContent: "flex-end",
    padding: "11px 16px",
    overflowWrap: "break-word",
    margin: "5px 0px",
  })}
`;

const Text = styled.p`
  ${(props) => ({
    margin: "0",
  })}
`;
export {MyMessageStyled, MyPhoto, MyWrapper, Text, MyMessageWrapper,  ImgPhoto}