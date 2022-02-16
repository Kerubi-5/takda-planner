import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import notebookImg from "../assets/notebook.png";

const AppBar = () => {
  const { user, googleLogin, logout } = useAuth();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="brand" href="/">
          <img
            src={notebookImg}
            style={{ height: "24px", width: "24px", marginRight: ".40rem" }}
            alt="Company logo"
          />
          Takda
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/recipes">Recipes</Nav.Link>
          </Nav>

          <Navbar.Text>
            {user ? (
              <Button variant="secondary" onClick={logout}>
                <i className="bx bx-exit"></i> Logout
              </Button>
            ) : (
              <Button variant="secondary" onClick={googleLogin}>
                <i className="bx bxl-google-plus-circle"></i> Login
              </Button>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;
