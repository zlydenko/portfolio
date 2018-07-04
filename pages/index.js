import Head from "next/head";

import Background from "../components/Background";
import About from "../components/About";

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
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Fira+Mono|Open+Sans"
      />
    </Head>
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
          font-family: "Open Sans", sans-serif;
          margin: 0;
          padding: 0;
        }
      `}
    </style>
  </div>
);