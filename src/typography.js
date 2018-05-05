import styled from "styled-components";

const fonts = {
  regular: `'Fira Mono', monospace`,
  extra: `'Open Sans', sans-serif`
};

const Headings = styled.h1`
  margin: 1.414em 0 0.5em;
  font-weight: inherit;
  line-height: 1.2;
`;

export const H1 = Headings.extend`
  font-family: ${fonts.extra};
  font-weight: 800;
  font-size: 3.998em;
  margin-top: 0em;
`;

export const H2 = Headings.withComponent("h2").extend`
  font-family: ${fonts.regular};
  font-size: 2.827em;
`;

export const H3 = Headings.withComponent("h3").extend`
  font-family: ${fonts.regular};
  font-size: 1.999em;
`;

export const H4 = Headings.withComponent("h4").extend`
  font-family: ${fonts.regular};
  font-size: 1.414em;
`;

export const Text = styled.p`
  font-family: ${fonts.regular};
  margin-bottom: 1.3em;
`;
