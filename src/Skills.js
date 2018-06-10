import React, { Component, Fragment } from "react";
import styled from "styled-components";

import { GiganticText, SmallText, Wrapper } from "./styled";

const Separator = SmallText.withComponent("span");

export default () => (
  <Wrapper>
    <GiganticText>
      {"HTML&CSS with responsiveness and accessibility in mind"}
      <Separator>{"/"}</Separator>
      {"javascript with modern features"}
      <Separator>{"/"}</Separator>
      {"React (not a framework)"}
      <Separator>{"/"}</Separator>
      {"different kinds of workflow instruments and bundlers"}
      <Separator>{" / "}</Separator>
      {"upper-intermediate english"}
    </GiganticText>
  </Wrapper>
);
