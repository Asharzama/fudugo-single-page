import styled from "styled-components";

export const AboutContainer = styled.div``;

export const ImageContainer = styled.div`
  position: relative;
  height: 600px;
  background-image: url("./images/about_us.png");
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  z-index: -2;
`;

export const Palmleft = styled.img`
  position: absolute;
  left: 0;
  z-index: -1;
  top: 129px;
`;

export const PalmRight = styled.img`
  position: absolute;
  right: 0;
  z-index: -1;
  top: 72px;
`;

export const AboutDescription = styled.div`
  background-image: url("./images/about_description.jpg");
  height: 720px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const DescriptionText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  h1 {
    font-family: "Spectral", serif;
    font-style: normal;
    font-weight: 400;
    font-size: 3.4vw;
    line-height: 46px;
    color: #ffffff;
    text-transform: uppercase;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.04vw;
    line-height: 180%;
    color: #ffffff;
    width: 23.1vw;
    margin: 25px 0;
  }
  button {
    margin: 0;
  }
  img {
    position: absolute;
    right: 0;
    width: 52vw;
    height: auto;
  }
`;
