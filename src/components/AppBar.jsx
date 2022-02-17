import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import notebookImg from "../assets/notebook.png";

const AppBar = () => {
  const { user, googleLogin, logout } = useAuth();

  const activeLink = (flag) => {
    return flag ? "nav__link active" : "nav__link";
  };

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
            <NavLink
              className={({ isActive }) => activeLink(isActive)}
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => activeLink(isActive)}
              to="/recipes"
            >
              Recipes
            </NavLink>
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
