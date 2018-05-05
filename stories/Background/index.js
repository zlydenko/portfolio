import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import Background from "./Background";

export const CurrentBackround = () => <Background color={"#FFD700"} />;

export const DarkBackground = () => (
  <Background bg={"rgb(0,0,0)"} color={"#f12d14"} />
);

export const PinkBackground = () => (
  <Background bg={"rgb(255,41,76)"} color={"#04284a"} />
);

export const CyanBackground = () => (
  <Background bg={"rgb(125,60,158)"} color={"#afffcc"} />
);

export const PurpleBackground = () => (
  <Background bg={"rgb(104,38,140)"} color={"#f66754"} />
);

export const GoldenBackground = () => (
  <Background bg={"rgb(4,40,74)"} color={"#ffe600"} />
);

storiesOf("Background", module)
  .add("current", () => <CurrentBackround />)
  .add("dark theme", () => <DarkBackground />)
  .add("pink", () => <PinkBackground />)
  .add("cyan", () => <CyanBackground />)
  .add("purple", () => <PurpleBackground />)
  .add("golden", () => <GoldenBackground />);
