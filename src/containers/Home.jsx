import Calendar from "../components/Calendar";
import DataForm from "../components/DataForm";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container className="mt-5">
        <Calendar />
        <DataForm />
      </Container>
    </>
  );
};

export default Home;
