import React from "react";
import styled from "styled-components";

const CodeBox = styled.div`
  box-shadow: rgba(0, 0, 0, 0.7) 0px 30px 78px;
  background-color: ${props => props.bg || "rgba(0, 0, 0, 0.8)"};
  border-radius: 5px;
  padding: 0.5em;
  padding-top: 0.4em;
  color: ${props => props.textColor || "rgb(255, 255, 255)"};

  width: 80%;
  height: 400px;
  margin: 2em auto;

  & header {
    margin-bottom: 1em;
  }
`;

const Project = ({ bg, textColor, text }) => (
  <CodeBox bg={bg} textColor={textColor}>
    <header>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="54"
        height="14"
        viewBox="0 0 54 14"
      >
        <g fill="none" fillRule="evenodd" transform="translate(1 1)">
          <circle
            cx="6"
            cy="6"
            r="6"
            fill="#FF5F56"
            stroke="#E0443E"
            strokeWidth=".5"
          />
          <circle
            cx="26"
            cy="6"
            r="6"
            fill="#FFBD2E"
            stroke="#DEA123"
            strokeWidth=".5"
          />
          <circle
            cx="46"
            cy="6"
            r="6"
            fill="#27C93F"
            stroke="#1AAB29"
            strokeWidth=".5"
          />
        </g>
      </svg>
    </header>
    {text}
  </CodeBox>
);

const Projects = () => (
  <React.Fragment>
    <Project text={"hello world"} />
    <Image />
  </React.Fragment>
);

export default Projects;
