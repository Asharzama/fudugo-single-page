import styled from "styled-components";

export const FeedContainer = styled.div`
  height: 997px;
  background: #013832;
`;

export const Background = styled.div`
  background-image: url("./images/instagram_feed.svg");
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  h1 {
    padding-top: 62px;
    text-transform: uppercase;
    font-family: "Spectral", serif;
    font-style: normal;
    font-weight: 400;
    font-size: 65px;
    line-height: 46px;
    text-align: center;
    color: #ffffff;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin: 62px auto;
  gap: 3vw;
  width: 61.72vw;
  height: 759px;
  @media (max-width: 1220px) {
    width: 90vw;
  }
`;

export const Item = styled.div`
  background-image: url(${(props) => props.background});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;
