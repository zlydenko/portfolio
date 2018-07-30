import React from "react";

import Overlay from "./Overlay";
import projectList from "./projectsList";

class Project extends React.Component {
  state = {
    overlay: false
  };

  openOverlay(e) {
    this.setState({ overlay: !this.state.overlay });
  }

  render() {
    const { name, description, src, links } = this.props;
    return (
      <React.Fragment>
        <div className="project-wrapper" onClick={e => this.openOverlay(e)}>
          <picture>
            <source srcSet={src.high} media="(min-width: 700px)" />
            <source srcSet={src.low} />
            <img srcSet={src.low} alt={name} />
          </picture>
          {this.state.overlay && (
            <Overlay title={name} text={description} links={links} />
          )}
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
                tech={project.tags}
                links={project.links}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
