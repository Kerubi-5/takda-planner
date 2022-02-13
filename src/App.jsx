import Nav from "./components/Nav";
import Calendar from "./components/Calendar";
import DataForm from "./components/DataForm";

import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Nav />
      <Container className="mt-5">
        <Calendar />

        <DataForm />
      </Container>
    </>
  );
};

export default App;
