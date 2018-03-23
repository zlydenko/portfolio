import React from "react";
import { render } from "react-dom";
import { injectGlobal } from "styled-components";

import Header from "./Header";

const root = document.querySelector("#app");

const GlobalStyle = injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 1.375em;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1.45;
    background-image: url('./img/topography-pattern.svg');
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }
`;

const App = () => (
  <React.Fragment>
    <Header />
  </React.Fragment>
);

render(<App />, root);
