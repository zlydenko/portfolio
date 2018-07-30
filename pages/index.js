import Head from "next/head";

import Background from "../components/Background";
import About from "../components/About";
import Projects from "../components/Projects";

export default () => (
  <div>
    <Head>
      <title>fancy page</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/flexboxgrid2@7.1.0/flexboxgrid2.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Fira+Mono:400,700|Poppins:400,900"
        rel="stylesheet"
      />
    </Head>
    <Background />
    <div className="container">
      <div className="row center-md">
        <About />
      </div>
    </div>
    <Projects />

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
          font-family: "Poppins", sans-serif;
          font-weight: 400;
          margin: 0;
          padding: 0;
        }
      `}
    </style>
  </div>
);
