import React, { Component } from "react";
import styled from "styled-components";

import Background from "./Background";
import About from "./About";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Background />
        <About />
      </React.Fragment>
    );
  }
}
