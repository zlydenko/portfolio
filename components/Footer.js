export default props => (
  <footer>
    <div className="container">
      <h3>Get in touch</h3>
      <div className="social-links">
        <div className="social-link">
          <a href="mailto:anton.zlydenko@gmail.com">
            <img src={"/static/socialicons/mail.png"} alt="my email" />
            write me an email
          </a>
        </div>
        <div className="social-link">
          <a href="https://t.me/zlydenko">
            <img src={"/static/socialicons/telegram.png"} alt="my telegram" />
            connect on telegram
          </a>
        </div>
        <div className="social-link">
          <a href="#">
            <img src={"/static/socialicons/resume.png"} alt="my resume" />
            check my CV
          </a>
        </div>
      </div>
      <p className="copyrights">Anton Zlydenko 2018 © All fights preserved</p>
    </div>
    <style jsx>{`
      footer {
        background-color: rgba(0, 0, 0, 0.93);
        color: #fff;
        padding: 2em 0em;
      }

      footer h3 {
        font-size: 1.5em;
        text-transform: uppercase;
      }

      .social-links {
        margin: 3em 0em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      }

      .social-link {
        margin-bottom: 2em;
      }

      @media screen and (min-width: 1200px) {
        .social-links {
          flex-wrap: unset;
        }

        .social-link a {
          font-size: 3em;
        }

        .social-link {
          padding-right: 1em;
          margin-bottom: 0em;
        }
      }

      .social-link:hover,
      .social-link:active {
        cursor: pointer;
      }

      .social-link img {
        display: block;
        margin: 0 auto;
        margin-bottom: 0.5em;
      }

      .social-link a {
        text-align: center;
        font-size: 2.5em;
        text-decoration: none;
        color: crimson;
        display: block;
      }

      .copyrights {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.6em;
        margin-bottom: 0em;
      }
    `}</style>
  </footer>
);
