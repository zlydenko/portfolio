import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 1fr 1fr 1fr;
  grid-template-rows: 15% 1fr 15%;
`;

const Aside = styled.aside`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 3;
  border-right: 0.1em solid black;
  background-color: rgba(253, 237, 1, 0.9);
  border-bottom: 0.1em solid rgba(0, 0, 0, 0.9);

  border-left: 0.1em solid rgba(0, 0, 0, 0.9);
`;
const Header = styled.div`
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 1;
  display: flex;

  & div {
    background-color: rgba(255, 255, 255, 0.8);
    height: 2.5em;
    border-right: 0.1em solid black;
    border-bottom: 0.1em solid black;
    flex-basis: calc(100% / 3);
  }
`;
const Main = styled.section`
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 2;

  background-color: rgba(246, 2, 1, 0.9);
  border-bottom: 0.1em solid rgba(0, 0, 0, 0.9);

  border-right: 0.1em solid rgba(0, 0, 0, 0.9);
`;
const Text = styled.p`
  margin: 0em;
`;

const Footer = styled.section`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 4;
  height: 2.5em;
  border-bottom: 0.1em solid rgba(0, 0, 0, 0.9);
  display: flex;

  border-left: 0.1em solid rgba(0, 0, 0, 0.9);
  & div {
    flex-basis: calc(55% / 2);
    background-color: rgba(31, 127, 201, 0.9);
    border-right: 0.1em solid rgba(0, 0, 0, 0.9);
  }

  & div:first-child {
    flex-basis: 45%;
    background-color: transparent;
  }

  & div:last-child {
    background-color: transparent;
  }
`;

const About = () => (
  <Wrapper>
    <Aside />
    <Header>
      <div /> <div /> <div />
    </Header>
    <Main>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius
        arcu nec nibh egestas, at laoreet libero vestibulum. Nullam condimentum
        accumsan erat at pellentesque. Proin mattis, arcu id lacinia vehicula,
        velit nulla lacinia leo, vel pretium sapien eros volutpat magna. Nunc et
        imperdiet lacus. Nunc sed fermentum tortor, at fermentum diam.
        Pellentesque mi nisl, lacinia sed blandit a, dictum in nibh.
        Pellentesque convallis non orci in sodales. Aenean auctor purus ac sem
        tempor suscipit. Quisque ornare viverra quam. Proin id feugiat arcu.
        Quisque fermentum eleifend nisl non porta. Pellentesque vitae ante eget
        nisi consectetur tincidunt porta vel mi. Proin eget ullamcorper tortor,
        ut cursus magna. Mauris eleifend eros non interdum rhoncus.
      </Text>
    </Main>
    <Footer>
      <div />
      <div />
      <div />
    </Footer>
  </Wrapper>
);

export default About;
