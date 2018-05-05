import React, { Component } from "react";
import styled from "styled-components";

import Background from "./Background";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Background />
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <About />
            </div>
            <div className="col-xs-12">
              <Skills />
            </div>
            <div className="col-xs-12">{/* <Projects /> */}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
