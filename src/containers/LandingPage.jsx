import { Container, Row, Col, Button } from "react-bootstrap";
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

            <Button variant="light">Learn more</Button>
          </Col>
          <Col>
            <img id="header-img" src={food} alt="Lading page header pic" />
          </Col>
        </Row>
      </Container>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,320L48,304C96,288,192,256,288,218.7C384,181,480,139,576,154.7C672,171,768,245,864,272C960,299,1056,277,1152,229.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default LandingPage;
