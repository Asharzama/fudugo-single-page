import React from "react";
import {
  HeaderContainer,
  ImageContainer,
  Navbar,
  ReservationButton,
  Pages,
  BrandIcon,
  Description,
  BookingButton,
} from "../styles/Header.css";

const Header = () => {
  return (
    <HeaderContainer>
      <ImageContainer>
        <Navbar>
          <Pages>
            <li>Home</li>
            <li>Menus</li>
            <li>Events</li>
            <li>Gallery</li>
            <li>Private Events</li>
            <li>Contact</li>
          </Pages>
          <ReservationButton>Make a Reservation</ReservationButton>
        </Navbar>
        <BrandIcon>
          <img src="./images/brand_name.png" alt="" />
        </BrandIcon>
        <Description>
          multi level restaurant <br /> high energy lounge with <br /> diverse
          mexican inspired menu
        </Description>
        <BookingButton>I want to book!</BookingButton>
      </ImageContainer>
    </HeaderContainer>
  );
};

export default Header;
