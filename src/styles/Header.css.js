import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: radial-gradient(
    94.04% 94.04% at 49.31% 47.71%,
    #131005 0%,
    #050211 37.68%,
    #050116 100%
  );
  height: 676px;
`;

export const ImageContainer = styled.div`
  background-image: url("./images/jungle.png");
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const Navbar = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 29.7vw;
  padding-top: 52px;
  margin-right: 2.6vw;
`;

export const Pages = styled.div`
  flex: 0.8;
  text-transform: uppercase;
  font-family: "Spectral", serif;
  font-weight: 400;
  font-size: 1.05vw;
  line-height: 138.9%;
  text-align: center;
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
  display: flex;
  list-style: none;
  justify-content: space-around;
  li {
    cursor: pointer;
  }
`;

export const ReservationButton = styled.button`
  background: linear-gradient(
    93.04deg,
    #a67935 13.82%,
    #e6d48b 64.05%,
    #ffeb99 81.31%,
    #f1c100 103.12%
  );
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #000000;
  width: 12.26vw;
  height: 35.19px;
  cursor: pointer;
`;

export const BrandIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 114px;
`;

export const Description = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 1.3vw;
  line-height: 138.9%;
  font-family: "Spectral", serif;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.25em;
  color: #ffffff;
  width: 40.42vw;
  text-align: center;
  margin: 50px auto;
`;

export const BookingButton = styled(ReservationButton)`
  display: block;
  width: 12.94vw;
  height: 49.69px;
  margin: 0 auto;
`;
