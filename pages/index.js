import Head from "next/head";

import Background from "../components/Background";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default () => (
  <div>
    <Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-123725809-1"
      />
      <script>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-123725809-1');`}
      </script>

      <title>Anton Zlydenko</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/flexboxgrid2@7.1.0/flexboxgrid2.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Fira+Mono:400,700|Poppins:400,900"
        rel="stylesheet"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/static/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta
        name="apple-mobile-web-app-title"
        content="Anton Zlydenko portfolio"
      />
      <meta name="application-name" content="Anton Zlydenko portfolio" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Background />
    <div className="container">
      <div className="row center-md">
        <About />
      </div>
    </div>
    <Projects />
    <Footer />

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
