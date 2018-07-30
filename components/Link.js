export default ({ href, children }) => (
  <a href={href}>
    {children}
    <style jsx>{`
      a {
        display: inline-block;
        border: 0.1em solid rgb(71, 69, 209);
        border-radius: 0.1em;
        padding: 0.5em 1em;
        color: rgb(71, 69, 209);
        background-color: rgb(255, 255, 255);
        text-decoration: none;
      }

      a:not(:last-child) {
        margin-right: 1em;
      }

      a:hover,
      a:active {
        box-shadow: rgba(71, 69, 209, 0.8) 0px 10px 30px;
      }
    `}</style>
  </a>
);
