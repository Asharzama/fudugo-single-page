import React from "react";
import {
  FooterContainer,
  Flex,
  Social,
  Logo,
  LogoContainer,
  Details,
  Address,
  Time,
  Pages,
  CopyRight,
} from "../styles/Footer.css";

const Footer = () => {
  return (
    <FooterContainer>
      <Flex>
        <LogoContainer>
          <Logo src="./images/footer.png" alt="" />
          <Social>
            <img src="./images/instagram.png" alt="" />
            <img src="./images/facebook.png" alt="" />
          </Social>
        </LogoContainer>
        <Details>
          <Address>
            Calle Larga 25, Cra. 8b #90
            <br />
            Cartagena de Indias,
            <br />
            Bolívar, Colombia
          </Address>
          <Time>
            Hours of Operation:
            <br />
            Mon-Sun | 6pm-5am
          </Time>
          <Time>+57 (302) 287-7607</Time>
        </Details>
        <Pages>
          <div>Home</div>
          <div>Menus</div>
          <div>Events</div>
          <div>Private Events</div>
        </Pages>
        <Pages>
          <div>About Us</div>
          <div>Gallery</div>
          <div>Contact Us</div>
        </Pages>
      </Flex>
      <CopyRight>Tulum Cartagena 2022 - All Copyrights Reserved</CopyRight>
    </FooterContainer>
  );
};

export default Footer;
