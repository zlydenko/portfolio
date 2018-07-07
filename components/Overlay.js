export default ({ rounded, title, text }) => (
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
        padding: 20px;
        padding-top: 15px;
        background-color: rgb(199, 46, 40);
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: calc(100% - 40px);
        height: calc(100% - 35px);
        ${rounded && `border-radius: 10px;`};
        animation: appear 0.4s ease forwards;
      }

      header {
        margin-bottom: 20px;
      }

      main {
        color: rgb(217, 187, 84);
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
