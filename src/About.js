import React, { Fragment } from "react";

import { Text, SmallText } from "./styled";

export default () => (
  <Fragment>
    <Text>
      {
        "Hello! My name is Anton. Using algorithmic and structured thinking I'm translate human needs on machine's language with access for people across the globe"
      }
    </Text>
    <SmallText>{"Some call it frontend development nowadays"}</SmallText>
    <Text
    >{`For me — it's more about curiosity, love to web technologies and interest in "how things work" and "how to create things that work"`}</Text>
  </Fragment>
);
