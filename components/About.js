export default () => (
  <section className="about">
    <p className="text">
      Hello! My name is Anton. Using algorithmic and structured thinking I'm
      translate human needs on machine's language with access for people across
      the globe
    </p>
    <small>Some call it frontend development nowadays</small>
    <p className="text">
      For me — it's more about curiosity, love to web technologies and interest
      in "how things work" and "how to create things that work
    </p>
    <style jsx>{`
      section {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      small {
        font-size: 1.2em;
        font-family: "Fira Mono", monospace;
        text-shadow: 0.04em 0em 10px gold;
      }

      .text {
        font-size: 1.4em;
        font-family: "Fira Mono", monospace;
        font-weight: 400;
        letter-spacing: -0.04em;
      }
    `}</style>
  </section>
);
