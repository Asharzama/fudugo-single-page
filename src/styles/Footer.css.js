import styled from "styled-components";
// font-family: 'Montserrat', sans-serif;
// font-family: 'Spectral', serif;

export const FooterContainer = styled.div`
  height: 480px;
  background: radial-gradient(
    94.04% 94.04% at 49.31% 47.71%,
    #131005 0%,
    #050211 37.68%,
    #050116 100%
  );
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 80%;
  margin-right: 24.58vw;
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-around;
  img {
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  display: inline-block;
  margin: 50px auto;
`;

export const LogoContainer = styled.div`
  border-right: 1px solid #ffffff;
  padding: 25px 0;
  padding-right: 4.2vw;
`;

export const Details = styled.div`
  display: grid;
  gap: 30px;
`;

export const Address = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 147.9%;
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
`;

export const Time = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 147.9%;
  color: #ffffff;
`;

export const Pages = styled.div`
  display: grid;
  gap: 20px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 74.4%;
  color: #ffffff;
  div {
    cursor: pointer;
  }
`;

export const CopyRight = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 147.9%;
  text-align: center;
  color: #ffffff;
`;
