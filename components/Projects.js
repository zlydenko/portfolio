import React from "react";

import Overlay from "./Overlay";

const projectList = [
  {
    id: 5,
    name: "ubereats",
    description: "hello world",
    src: "/static/mockups/ubereats/hires.jpg"
  },
  {
    id: 1,
    name: "aviasales",
    description: "hello world",
    src: "/static/mockups/aviasales/hires.jpg"
  },
  {
    id: 3,
    name: "movienight",
    description: "hello world",
    src: "/static/mockups/movienight/hires.png"
  },
  {
    id: 4,
    name: "saasify",
    description: "hello world",
    src: "/static/mockups/saasify/hires.jpg"
  },
  {
    id: 2,
    name: "bitcoinprice",
    description: "hello world",
    src: "/static/mockups/bitcoinprice/hires.png"
  }
];

class Project extends React.Component {
  state = {
    overlay: false
  };

  openOverlay(e) {
    this.setState({ overlay: !this.state.overlay });
  }

  render() {
    const { name, description, src } = this.props;

    return (
      <React.Fragment>
        <div className="project-wrapper" onClick={e => this.openOverlay(e)}>
          <img src={src} alt={name} />
          {this.state.overlay && <Overlay title={name} text={description} />}
        </div>
        <style jsx>{`
          .project-wrapper {
            position: relative;
            margin-bottom: 1em;
          }

          @media screen and (min-width: 1024px) {
            .project-wrapper {
              height: 100vh;
              padding: 2em;
              margin-bottom: 0em;
            }
          }

          img {
            display: block;
            width: 100%;
            object-fit: contain;
          }

          img:hover,
          img:active {
            box-shadow: rgba(0, 0, 0, 0.55) 0px 20px 68px;
            cursor: pointer;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

const Projects = props => (
  <section>
    <div className="container">
      <div className="row center-xs">
        {projectList.map(project => (
          <React.Fragment key={project.id}>
            <div className="col-xs-11">
              <Project
                name={project.name}
                description={project.description}
                src={project.src}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
