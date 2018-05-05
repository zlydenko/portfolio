import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import { about } from "../../src/content";
import Background from "../../src/Background";
import {
  DarkBackground,
  PinkBackground,
  CyanBackground,
  PurpleBackground,
  GoldenBackground
} from "../Background";
import { Text, SmallText } from "../../src/About";

const SansText = Text.extend`
  font-family: "Open Sans", sans-serif;
`;

const SansSmallText = SmallText.extend`
  font-family: "Open Sans", sans-serif;
`;

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
`;

const About = props => (
  <Fragment>
    {props.children}
    <Wrapper style={{ color: props.color }}>
      {props.font === "fira" && (
        <Fragment>
          <Text>{about.firstPar}</Text>
          <SmallText style={{ textShadow: "none" }}>{about.caption}</SmallText>
          <Text>{about.secondPar}</Text>
        </Fragment>
      )}
      {props.font === "opensans" && (
        <Fragment>
          <SansText>{about.firstPar}</SansText>
          <SansSmallText style={{ textShadow: "none" }}>
            {about.caption}
          </SansSmallText>
          <SansText>{about.secondPar}</SansText>
        </Fragment>
      )}
    </Wrapper>
  </Fragment>
);

storiesOf("About/Fira Mono", module)
  .add("current", () => (
    <About font={"fira"}>
      <Background />
    </About>
  ))
  .add("dark theme/default", () => (
    <About font={"fira"} color={"rgb(255,255,255)"}>
      <DarkBackground />
    </About>
  ))
  .add("dark theme/colored", () => (
    <About font={"fira"} color={"#f12d14"}>
      <DarkBackground />
    </About>
  ))
  .add("pink theme/default", () => (
    <About font={"fira"} color={"rgb(255,255,255)"}>
      <PinkBackground />
    </About>
  ))
  .add("pink theme/colored", () => (
    <About font={"fira"} color={"#04284a"}>
      <PinkBackground />
    </About>
  ))
  .add("cyan theme/default", () => (
    <About font={"fira"} color={"rgb(255,255,255)"}>
      <CyanBackground />
    </About>
  ))
  .add("cyan theme/colored", () => (
    <About font={"fira"} color={"#afffcc"}>
      <CyanBackground />
    </About>
  ))
  .add("purple theme/default", () => (
    <About font={"fira"} color={"rgb(255,255,255)"}>
      <PurpleBackground />
    </About>
  ))
  .add("purple theme/colored", () => (
    <About font={"fira"} color={"#f66754"}>
      <PurpleBackground />
    </About>
  ))
  .add("golden theme/default", () => (
    <About font={"fira"} color={"rgb(255,255,255)"}>
      <GoldenBackground />
    </About>
  ))
  .add("golden theme/colored", () => (
    <About font={"fira"} color={"#ffe600"}>
      <GoldenBackground />
    </About>
  ));

storiesOf("About/Open Sans", module)
  .add("current", () => (
    <About font={"opensans"}>
      <Background />
    </About>
  ))
  .add("dark theme/default", () => (
    <About font={"opensans"} color={"rgb(255,255,255)"}>
      <DarkBackground />
    </About>
  ))
  .add("dark theme/colored", () => (
    <About font={"opensans"} color={"#f12d14"}>
      <DarkBackground />
    </About>
  ))
  .add("pink theme/default", () => (
    <About font={"opensans"} color={"rgb(255,255,255)"}>
      <PinkBackground />
    </About>
  ))
  .add("pink theme/colored", () => (
    <About font={"opensans"} color={"#04284a"}>
      <PinkBackground />
    </About>
  ))
  .add("cyan theme/default", () => (
    <About font={"opensans"} color={"rgb(255,255,255)"}>
      <CyanBackground />
    </About>
  ))
  .add("cyan theme/colored", () => (
    <About font={"opensans"} color={"#afffcc"}>
      <CyanBackground />
    </About>
  ))
  .add("purple theme/default", () => (
    <About font={"opensans"} color={"rgb(255,255,255)"}>
      <PurpleBackground />
    </About>
  ))
  .add("purple theme/colored", () => (
    <About font={"opensans"} color={"#f66754"}>
      <PurpleBackground />
    </About>
  ))
  .add("golden theme/default", () => (
    <About font={"opensans"} color={"rgb(255,255,255)"}>
      <GoldenBackground />
    </About>
  ))
  .add("golden theme/colored", () => (
    <About font={"opensans"} color={"#ffe600"}>
      <GoldenBackground />
    </About>
  ));
