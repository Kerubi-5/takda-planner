import { Navbar, Container, Button } from "react-bootstrap";
import notebookImg from "../assets/notebook.png";
const Nav = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <img
          src={notebookImg}
          style={{ height: "24px", width: "24px", marginRight: ".25rem" }}
          alt="Company logo"
        />
        <Navbar.Brand href="/">Takda</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button variant="secondary">
              <i className="bx bxl-google-plus-circle"></i> Login
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
