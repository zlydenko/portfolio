import React, { Fragment } from "react";
import styled from "styled-components";

import { about } from "./content";

import ParagraphWithDropCap from "./ParagraphWithDropCap";

const About = () => (
  <Fragment>
    <ParagraphWithDropCap content={about.firstPar} />
    <p>{about.caption}</p>
    <p>{about.secondPar}</p>
  </Fragment>
);

export default About;
