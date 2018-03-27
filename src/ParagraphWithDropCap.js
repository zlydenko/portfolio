import React, { Component } from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  &::first-letter {
    margin: 0;
    font-size: 250%;
    margin-top: 0.1em;
    margin-right: 0.2em;
    margin-left: 0em;
    margin-bottom: 0em;
    float: left;
    border: 0.04em solid ${props => props.dropCapBorder};
    background-color: ${props => props.dropCapBg};
    padding: 0em 0.4em;
    font-weight: 800;
    color: ${props => props.dropCapColor};
  }
`;

class Text extends Component {
  static defaultProps = {
    dropCapColor: "rgb(0,0,0)",
    dropCapBorder: "rgb(0,0,0)",
    dropCapBg: "rgba(255,255,255,0.6)"
  };

  render() {
    return <Paragraph {...this.props}>{this.props.content}</Paragraph>;
  }
}

export default Text;
