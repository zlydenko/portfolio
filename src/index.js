import React from "react";
import { render } from "react-dom";
import { injectGlobal } from "styled-components";

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
  }
`;

const App = () => (
  <div>
    <p>hello world</p>
  </div>
);

render(<App />, root);
