export default ({ title, text }) => (
  <div>
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
    <main>
      <h3>{title}</h3>
      <p>{text}</p>
    </main>
    <style jsx>{`
      div {
        font-family: "Fira Mono", monospace;
        font-weight: 400;
        text-align: left;
        padding: 20px;
        padding-top: 15px;
        background-color: rgb(255, 255, 255);
        position: absolute;
        top: 0em;
        right: 0;
        left: 0;
        bottom: 0;
        animation: appear 0.4s ease forwards;
        border: 0.1em solid rgb(71, 69, 209);
      }

      p {
        margin-top: 0.5em;
      }

      p a {
        font-weight: 500;
      }

      @media screen and (min-width: 1000px) {
        div {
          top: 2em;
          margin-left: 2em;
          margin-right: 2em;
          height: calc(100vh - 5em);
        }

        h3 {
          margin-top: 0em;
          text-align: center;
        }
      }

      header {
        margin-bottom: 20px;
      }

      main {
        color: rgb(71, 69, 209);
      }

      h3 {
        margin-top: 0em;
        margin-bottom: 0.5em;
        text-align: left;
        font-weight: 700;
      }

      @keyframes appear {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }
    `}</style>
  </div>
);
