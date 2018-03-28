import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import Background from "../src/Background";
import About, { Text, SmallText } from "../src/About";
import { about } from "../src/content";

const AboutText = styled(Text)`
  font-family: "Open Sans", sans-serif;
`;

const AboutSmallText = styled(SmallText)`
  font-family: "Open Sans", sans-serif;
`;

storiesOf("Background pattern", module).add("current", () => <Background />);
storiesOf("About", module)
  .add("current", () => <About />)
  .add("another font", () => (
    <Fragment>
      <AboutText>{about.firstPar}</AboutText>
      <AboutSmallText>{about.caption}</AboutSmallText>
      <AboutText>{about.secondPar}</AboutText>
    </Fragment>
  ))
  .add("without styled caption", () => (
    <Fragment>
      <AboutText>{about.firstPar}</AboutText>
      <AboutSmallText style={{ textShadow: "none" }}>
        {about.caption}
      </AboutSmallText>
      <AboutText>{about.secondPar}</AboutText>
    </Fragment>
  ));
