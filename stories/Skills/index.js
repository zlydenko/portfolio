import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import { skills } from "../../src/content";
import Background from "../../src/Background";
import {
  DarkBackground,
  PinkBackground,
  CyanBackground,
  PurpleBackground,
  GoldenBackground
} from "../Background";
import { SkillsTitle, List, Item, MakeList } from "../../src/Skills";
import {
  JsIcon,
  HtmlIcon,
  CssIcon,
  WebpackIcon,
  ReactIcon,
  GitIcon
} from "./icons";

const Text = styled.p`
  ${"" /* display: inline-flex;
  align-items: center; */} font-size: 2.3em;
  line-height: 1.3;
  color: ${props => props.color || "black"};
  font-family: ${props =>
    props.font === "fira"
      ? `'Fira Mono', monospace`
      : `'Open Sans', sans-serif`};
  & span {
    margin-left: 0.3em;
    margin-right: 0.3em;
    font-size: 1.5em;
  }
  & svg {
    margin-left: 0.3em;
  }
`;

const ListString = ({ color, font }) => (
  <Text color={color} font={font}>
    {skills[0].text}
    <HtmlIcon />
    <span>/</span>

    {skills[1].text}
    <JsIcon />
    <span>/</span>

    {skills[2].text}
    <ReactIcon />
    <span>/</span>

    {skills[3].text}
    <GitIcon />
    <span>/</span>

    {skills[4].text}
    <WebpackIcon />
  </Text>
);

const Title = SkillsTitle.extend`
  color: ${props => props.color || "black"};
  font-family: ${props =>
    props.font === "fira"
      ? `'Fira Mono', monospace`
      : `'Open Sans', sans-serif`};
  text-shadow: 0.06em 0.06em tomato;
`;

const StringTitle = SkillsTitle.extend`
  color: ${props => props.color || "black"};
  font-family: ${props =>
    props.font === "fira"
      ? `'Fira Mono', monospace`
      : `'Open Sans', sans-serif`};
  text-shadow: ${props =>
    props.shadow ? `0.06em 0.06em 0.12em gold` : "none"};
  text-align: left;
  font-style: normal;
  font-weight: 500;
  text-transform: none;
  font-size: 2em;
  margin-bottom: 1em;
`;

storiesOf("Skills/Default view", module)
  .add("current", () => (
    <Fragment>
      <Background />
      <Fragment>
        <Title>Skills</Title>
        <MakeList list={skills} />
      </Fragment>
    </Fragment>
  ))
  .add("dark theme", () => (
    <Fragment>
      <DarkBackground />
      <Fragment>
        <Title color={"rgb(255,255,255)"}>Skills</Title>
        <MakeList list={skills} />
      </Fragment>
    </Fragment>
  ))
  .add("pink theme", () => (
    <Fragment>
      <PinkBackground />
      <Fragment>
        <Title color={"rgb(255,255,255)"}>Skills</Title>
        <MakeList list={skills} />
      </Fragment>
    </Fragment>
  ))
  .add("purple theme", () => (
    <Fragment>
      <PurpleBackground />
      <Fragment>
        <Title color={"rgb(255,255,255)"}>Skills</Title>
        <MakeList list={skills} />
      </Fragment>
    </Fragment>
  ))
  .add("cyan theme", () => (
    <Fragment>
      <CyanBackground />
      <Fragment>
        <Title color={"rgb(255,255,255)"}>Skills</Title>
        <MakeList list={skills} />
      </Fragment>
    </Fragment>
  ))
  .add("golden theme", () => (
    <Fragment>
      <GoldenBackground />
      <Fragment>
        <Title color={"rgb(255,255,255)"}>Skills</Title>
        <MakeList list={skills} />
      </Fragment>
    </Fragment>
  ));

storiesOf("Skills/One string", module)
  .add("current sansserif", () => (
    <Fragment>
      <Background />
      <StringTitle>technologies I'm using</StringTitle>
      <ListString />
    </Fragment>
  ))
  .add("dark/basic sansserif", () => (
    <Fragment>
      <DarkBackground />
      <StringTitle color={"white"}>technologies I'm using</StringTitle>
      <ListString color={"white"} />
    </Fragment>
  ))
  .add("dark/accent sansserif", () => (
    <Fragment>
      <DarkBackground />
      <StringTitle color={"#f12d14"}>technologies I'm using</StringTitle>
      <ListString color={"#f12d14"} />
    </Fragment>
  ))
  .add("golden/basic sansserif", () => (
    <Fragment>
      <GoldenBackground />
      <StringTitle color={"white"}>technologies I'm using</StringTitle>
      <ListString color={"white"} />
    </Fragment>
  ))
  .add("golden/accent sansserif", () => (
    <Fragment>
      <GoldenBackground />
      <StringTitle color={"#ffe600"}>technologies I'm using</StringTitle>
      <ListString color={"#ffe600"} />
    </Fragment>
  ))
  .add("current sansserif/fira", () => (
    <Fragment>
      <Background />
      <StringTitle>technologies I'm using</StringTitle>
      <ListString font={"fira"} />
    </Fragment>
  ))
  .add("dark/basic sansserif/fira", () => (
    <Fragment>
      <DarkBackground />
      <StringTitle color={"white"}>technologies I'm using</StringTitle>
      <ListString color={"white"} font={"fira"} />
    </Fragment>
  ))
  .add("dark/accent sansserif/fira", () => (
    <Fragment>
      <DarkBackground />
      <StringTitle color={"#f12d14"}>technologies I'm using</StringTitle>
      <ListString color={"#f12d14"} font={"fira"} />
    </Fragment>
  ))
  .add("golden/basic sansserif/fira", () => (
    <Fragment>
      <GoldenBackground />
      <StringTitle color={"white"}>technologies I'm using</StringTitle>
      <ListString color={"white"} font={"fira"} />
    </Fragment>
  ))
  .add("golden/accent sansserif/fira", () => (
    <Fragment>
      <GoldenBackground />
      <StringTitle color={"#ffe600"}>technologies I'm using</StringTitle>
      <ListString color={"#ffe600"} font={"fira"} />
    </Fragment>
  ))
  .add("current fira/sansserif", () => (
    <Fragment>
      <Background />
      <StringTitle font={"fira"}>technologies I'm using</StringTitle>
      <ListString />
    </Fragment>
  ))
  .add("dark/basic fira/sansserif", () => (
    <Fragment>
      <DarkBackground />
      <StringTitle font={"fira"} color={"white"}>
        technologies I'm using
      </StringTitle>
      <ListString color={"white"} />
    </Fragment>
  ))
  .add("dark/accent fira/sansserif", () => (
    <Fragment>
      <DarkBackground />
      <StringTitle font={"fira"} color={"#f12d14"}>
        technologies I'm using
      </StringTitle>
      <ListString color={"#f12d14"} />
    </Fragment>
  ))
  .add("golden/basic fira/sansserif", () => (
    <Fragment>
      <GoldenBackground />
      <StringTitle font={"fira"} color={"white"}>
        technologies I'm using
      </StringTitle>
      <ListString color={"white"} />
    </Fragment>
  ))
  .add("golden/accent fira/sansserif", () => (
    <Fragment>
      <GoldenBackground />
      <StringTitle font={"fira"} color={"#ffe600"}>
        technologies I'm using
      </StringTitle>
      <ListString color={"#ffe600"} />
    </Fragment>
  ));
