import React, { Component } from "react";
import styled from "styled-components";

import Background from "./Background";
import About from "./About";

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
          </div>
        </div>
      </React.Fragment>
    );
  }
}
