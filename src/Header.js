import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  border: 0.1em solid rgba(0, 0, 0, 0.9);
  display: flex;
`;
const Title = styled.h1`
  font-style: italic;
  font-weight: 800;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  padding: 0.1em 0.5em;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  background-color: rgba(0, 0, 0, 0.9);
  margin: 0em;
  display: inline;
  border-left: 0.06em solid rgba(0, 0, 0, 0.9);
  flex-basis: 26%;
`;
const TransparentBox = styled.div`
  background-color: transparent;
  flex-basis: 75%;
`;

const Header = () => (
  <Wrapper>
    <TransparentBox />
    <Title>Zlydenko</Title>
  </Wrapper>
);

export default Header;
