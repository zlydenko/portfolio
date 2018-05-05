import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import Background from "../../src/Background";
import {
  DarkBackground,
  PinkBackground,
  CyanBackground,
  PurpleBackground,
  GoldenBackground
} from "../Background";
import { Text, SmallText } from "../../src/About";

const Wrapper = styled.footer`
  background-color: rgba(0, 0, 0, 0.95);
  color: white;
  min-height: 100vh;
  width: 100%;
  padding: 2em;
`;

const FooterText = Text.extend`
  margin-top: 0em;
`;

storiesOf("Footer", module).add("current", () => (
  <Fragment>
    <Background />
    <Wrapper>
      <FooterText>hello world</FooterText>
    </Wrapper>
  </Fragment>
));
