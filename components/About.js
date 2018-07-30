export default () => (
  <div className="col-xs-12 col-md-8 col-lg-7">
    <section className="about">
      <p className="text">
        Hello! My name is Anton. Using algorithmic and structured thinking I'm
        translate human needs on machine's language with access for people
        across the globe
      </p>
      <small>Some call it frontend development nowadays</small>
      <p className="text">
        For me — it's more about curiosity, love to web technologies and
        interest in "how things work" and "how to create things that work
      </p>
      <style jsx>{`
        .text:first-child:first-line {
          font-weight: 900;
        }

        section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
        }

        small {
          font-size: 1.2em;
          text-shadow: 0.04em 0em 10px gold;
        }

        .text {
          font-size: 1.4em;
          font-weight: 400;
          letter-spacing: -0.04em;
        }

        p::selection,
        small::selection {
          color: rgba(0, 0, 0, 0.8);
          background-color: rgba(255, 230, 0, 0.8);
        }
      `}</style>
    </section>
  </div>
);
