import { Container, Row, Col } from "react-bootstrap";
import food from "../assets/food.png";

const LandingPage = () => {
  return (
    <>
      <Container fluid="md pt-5">
        <Row>
          <Col className="section__header">
            <h1 className="mb-4">Takda</h1>

            <h3 className="section__desc mb-5">
              Food planning for busy people
            </h3>

            <a href="#feature" className="btn btn-secondary">
              Learn more
            </a>
          </Col>
          <Col>
            <img id="header-img" src={food} alt="Lading page header pic" />
          </Col>
        </Row>
      </Container>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          d="M0,320L48,304C96,288,192,256,288,218.7C384,181,480,139,576,154.7C672,171,768,245,864,272C960,299,1056,277,1152,229.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="p-5" style={{ background: "#f3f4f5" }}>
        <Container>
          <div id="feature" className="row feature">
            <div className="col-lg-4">
              <i className="bx bx-globe feature__icon"></i>

              <h2>Available Online</h2>
              <p className="feature__desc">
                Takda planner application is hosted in the internet so it is
                available to be accessed wherever you are around the world
              </p>
              <p>
                <a className="btn btn-secondary" href="/">
                  View details »
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <i className="bx bx-book-content feature__icon"></i>

              <h2>Set your schedules</h2>
              <p className="feature__desc">
                Using the latest technologies you can now plan your day,
                preparation of meal by using the Takda Planner application at
                the tip of your fingertips
              </p>
              <p>
                <a className="btn btn-secondary" href="/">
                  View details »
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <i className="bx bx-devices feature__icon"></i>

              <h2>Platform Compatibility</h2>
              <p className="feature__desc">
                With the mobile first design, you can be assured that the
                website will look good whatever viewport you have
              </p>
              <p>
                <a className="btn btn-secondary" href="/">
                  View details »
                </a>
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className="container p-3 mt-5">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <i className="bx bxs-notepad"></i>
            </a>
            <span className="text-muted">© 2022 KK, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a
                href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                className="twitter-share-button"
                data-show-count="false"
              >
                Tweet
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
              ></script>
            </li>
            <li className="ms-3">
              <div
                className="fb-share-button"
                data-href="https://developers.facebook.com/docs/plugins/"
                data-layout="button"
                data-size="small"
              >
                <a
                  target="_blank"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://kk-scheduler.web.app/"
                  className="fb-xfbml-parse-ignore"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </div>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
