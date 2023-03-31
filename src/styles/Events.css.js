import styled from "styled-components";

export const EventContainer = styled.div`
  background-image: url("./images/event.png");
  height: 624px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  h1 {
    text-transform: uppercase;
    padding-top: 63px;
    font-family: "Spectral", serif;
    font-style: normal;
    font-weight: 400;
    font-size: 3.4vw;
    line-height: 46px;
    text-align: center;
    color: #ffffff;
  }
`;

export const Grid = styled.div`
  flex: 0.8;
  display: grid;
  gap: 2.1vw;
  grid-template-columns: repeat(4, 1fr);
`;

export const Item = styled.div`
  background-image: url(${(props) => props.background});
  background-color: black;
  max-width: 295px;
  height: 406px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  cursor: pointer;
`;

export const Flex = styled.div`
  margin: 70px 8.6vw 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    cursor: pointer;
    font-size: 70px;
    font-weight: 900;
    background: linear-gradient(
      93.04deg,
      #a67935 13.82%,
      #e6d48b 64.05%,
      #ffeb99 81.31%,
      #f1c100 103.12%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;
