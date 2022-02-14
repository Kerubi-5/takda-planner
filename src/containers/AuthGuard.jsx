import { useAuth } from "../contexts/AuthContext";
import Loading from "./../components/Loading";
import Calendar from "../components/Calendar";
import DataForm from "../components/DataForm";
import LandingPage from "./LandingPage";
import { Container } from "react-bootstrap";
const AuthGuard = () => {
  const { loading, user } = useAuth();

  if (loading) return <Loading />;

  return (
    <>
      {user ? (
        <>
          <Container className="mt-5">
            <Calendar />
            <DataForm />
          </Container>
        </>
      ) : (
        <LandingPage />
      )}
    </>
  );
};

export default AuthGuard;
