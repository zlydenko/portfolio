import React from "react";
import { render } from "react-dom";
import { injectGlobal } from "styled-components";

import App from "./App";

const root = document.querySelector("#app");

const GlobalStyle = injectGlobal`
  html {
    box-sizing: border-box;
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
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }
`;

render(<App />, root);
