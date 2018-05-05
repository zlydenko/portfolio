import React, { Fragment } from "react";
import styled from "styled-components";

import { about } from "./content";

export const Text = styled.p`
  font-size: 1.8em;
  font-family: "Fira Mono", monospace;
  font-weight: 400;
  letter-spacing: -0.04em;

  @media (min-width: 768px) {
    font-size: 2.4em;
  }
`;

export const SmallText = styled.p`
  font-size: 1.4em;
  font-family: "Fira Mono", monospace;
  text-shadow: 0.04em 0em gold;
`;

const About = () => (
  <Fragment>
    <Text>{about.firstPar} </Text>
    <SmallText>{about.caption}</SmallText>
    <Text>{about.secondPar}</Text>
  </Fragment>
);

export default About;
