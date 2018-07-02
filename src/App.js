import React, { Fragment } from "react";
import { ThemeProvider, injectGlobal } from "styled-components";
import "flexboxgrid2";

import theme from "./theme";

import Background from "./Background";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

injectGlobal`
  html {
    font-size: ${theme.sizes.base}
  }
`;

export default () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Background />
      <div className="container">
        <div className="col-xs-12">
          <About />
          <Projects />
        </div>
      </div>
    </Fragment>
  </ThemeProvider>
);
