import React from "react";

import Overlay from "./Overlay";

export default class extends React.Component {
  state = {
    overlay: false
  };

  openOverlay(e) {
    this.setState({ overlay: !this.state.overlay });
  }

  render() {
    const { image, title, description, rounded } = this.props;
    return (
      <div className="col-xs-12 col-md-10 col-lg-6">
        <section className="project" onClick={e => this.openOverlay(e)}>
          {image.map((val, _) => <img src={val} alt={title} key={_} />)}
          {this.state.overlay && (
            <Overlay rounded={rounded} title={title} text={description} />
          )}
        </section>
        <style jsx>{`
          .project {
            max-width: 100%;
            background-color: gold;
            animation: appear 0.7s ease-in forwards;
            ${rounded && `border-radius: 20px;`};
            box-shadow: rgba(0, 0, 0, 0.55) 0px 20px 68px;
            position: relative;
            overflow: hidden;
            padding: 1em;
            margin-bottom: 1em;
          }

          img {
            display: block;
            width: 100%;
            object-fit: contain;
          }
        `}</style>
      </div>
    );
  }
}
