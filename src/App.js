import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Pattern from "./Pattern";

export default function App() {
  return (
    <React.Fragment>
      <Pattern bg={"rgb(255,255,255)"} opacity={1} color={"rgba(242,2,10,0.7)"}>
        <Header />
      </Pattern>
    </React.Fragment>
  );
}
