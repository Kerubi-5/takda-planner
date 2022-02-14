import Nav from "./components/Nav";

import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import AuthGuard from "./containers/AuthGuard";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Nav />
        <Container className="mt-5">
          <AuthGuard />
        </Container>
      </AuthProvider>
    </>
  );
};

export default App;
