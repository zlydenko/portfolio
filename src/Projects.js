import React from "react";
import styled from "styled-components";

import titleLogo from "./misc/tv.gif";
import uberEatsImg from "./misc/uber_eats2.png";
import aviasalesImg from "./misc/aviasales.png";
import bitcoinPriceImg from "./misc/bitcoinprice.gif";

const Wrapper = styled.section`
  width: 100%;
`;

const Card = styled.div`
  width: 100%;
  background-color: ${props => props.bg || `rgba(255,255,255,0.8)`};
  border-radius: 1em;
  box-shadow: 0em 0.1em 10px #000;
  margin-bottom: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0em;
`;

const Img = styled.img`
  display: block;
  width: 90%;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
`;

export default () => (
  <div>
    <Wrapper>
      <Title>
        <img style={{ marginRight: "0.5em" }} src={titleLogo} />
        {"Things I create"}
      </Title>

      <Img src={uberEatsImg} />

      <Img src={aviasalesImg} />

      <img width={"50%"} src={bitcoinPriceImg} />
    </Wrapper>
  </div>
);
