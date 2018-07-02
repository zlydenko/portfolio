import Background from "../components/Background";
import About from "../components/About";

export default () => (
  <div>
    <Background />
    <About />
    <style global jsx>
      {`
        html {
          font-size: 22px;
          box-sizing: border-box;
        }

        *::after,
        *::before {
          box-sizing: inherit;
        }

        body {
          margin: 0;
          padding: 0;
        }
      `}
    </style>
  </div>
);
