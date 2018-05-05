import React, { Component, Fragment } from "react";
import styled from "styled-components";

import { skills, hobbies, plans } from "./content";

const Wrapper = styled.section`
  padding-top: 3em;
  height: 100vh;
  position: relative;
`;

export const Btn = styled.button`
  position: absolute;
  bottom: 0.5em;
  right: 0;
  background-color: rgba(255, 255, 255, 0.5);
  border: 0.03em solid black;
  font-size: 3em;
  padding: 0.5em;
  cursor: pointer;
`;

export const SkillsTitle = styled.h3`
  margin-top: 0em;
  font-size: 3em;
  font-weight: 800;
  font-style: italic;
  text-align: center;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  text-shadow: 0.06em 0.06em tomato;
`;

export const HobbiesTitle = SkillsTitle.extend`
  text-shadow: 0.06em 0.06em blue;
`;

export const PlansTitle = SkillsTitle.extend`
  text-shadow: 0.06em 0.06em lightgreen;
`;

export const List = styled.ul`
  font-family: "Fira Mono", monospace;
  list-style: none;
  padding: 0em;
  font-size: 1.3em;
`;

export const Item = styled.li`
  background-color: rgba(255, 255, 255, 0.7);
  border: 0.1em solid black;
  margin-bottom: 0.2em;
  padding-left: 0.3em;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  font-size: 1.1em;
`;

export const MakeList = ({ list }) => (
  <List>
    {list.map((text, _) => (
      <Item key={_}>
        {text.bullet} {text.text}
      </Item>
    ))}
  </List>
);

export default class Skills extends Component {
  constructor() {
    super();
    state = {
      sectionVisible: 1
    };
  }

  // nextList = () => {
  //   let counter = this.state.sectionVisible;
  //   if (counter === 3) {
  //     counter = 1;
  //   } else {
  //     counter++;
  //   }
  //   this.setState({ sectionVisible: counter });
  // };

  render() {
    return (
      <Wrapper>
        {this.state.sectionVisible === 1 && (
          <Fragment>
            <SkillsTitle>Skills</SkillsTitle>
            <MakeList list={skills} />
          </Fragment>
        )}
        {this.state.sectionVisible === 2 && (
          <Fragment>
            <HobbiesTitle>Hobbies</HobbiesTitle>
            <MakeList list={hobbies} />
          </Fragment>
        )}
        {this.state.sectionVisible === 3 && (
          <Fragment>
            <PlansTitle>Plans</PlansTitle>
            <MakeList list={plans} />
          </Fragment>
        )}
        <Btn type="button" onClick={this.nextList}>
          &#129106;
        </Btn>
      </Wrapper>
    );
  }
}
