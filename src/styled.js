import styled from "styled-components";

export const Text = styled.p`
  font-size: ${props => props.theme.sizes.big};
  font-family: ${props => props.theme.fonts.additional};
  font-weight: 400;
  letter-spacing: -0.04em;
`;

export const SmallText = styled.p`
  font-size: ${props => props.theme.sizes.small};
  font-family: ${props => props.theme.fonts.additional};
  text-shadow: 0.04em 0em 10px gold;
`;

export const GiganticText = styled.span`
  font-size: ${props => props.theme.sizes.gigantic};
  font-family: ${props => props.theme.fonts.main};
  text-align: left;
  line-height: ${props => props.theme.sizes.gigantic};
`;

export const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
