import { Navbar, Container, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import notebookImg from "../assets/notebook.png";
const Nav = () => {
  const { user, googleLogin, logout } = useAuth();

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
            {user ? (
              <Button variant="danger" onClick={logout}>
                <i className="bx bx-exit"></i> Logout
              </Button>
            ) : (
              <Button variant="secondary" onClick={googleLogin}>
                <i className="bx bxl-google-plus-circle"></i> Logout
              </Button>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
