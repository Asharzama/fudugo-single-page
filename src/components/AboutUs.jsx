import React from "react";
import {
  AboutContainer,
  ImageContainer,
  Palmleft,
  PalmRight,
  AboutDescription,
  DescriptionText,
} from "../styles/AboutUs.css";
import { BookingButton } from "../styles/Header.css";

const AboutUs = () => {
  return (
    <AboutContainer>
      <ImageContainer>
        <Palmleft src="./images/palm-left.png" alt="palm left" />
        <PalmRight src="./images/palm-right.png" alt="palm right" />
      </ImageContainer>
      <AboutDescription>
        <DescriptionText>
          <div>
            <h1>About Us</h1>
            <p>
              The energy of Tulum can be feel throughout the venue, bringing the
              wood and energy from Tulum itself with 40' palm trees and a jungle
              atmosphere.
            </p>
            <BookingButton>Learn More</BookingButton>
          </div>
          <img src="./images/description_image.png" alt="" />
        </DescriptionText>
      </AboutDescription>
    </AboutContainer>
  );
};

export default AboutUs;
