import { useAuth } from "../contexts/AuthContext";
import Loading from "./../components/Loading";
import Calendar from "../components/Calendar";
import DataForm from "../components/DataForm";
const AuthGuard = () => {
  const { loading, user } = useAuth();

  if (loading) return <Loading />;

  return (
    <>
      {user ? (
        <>
          <Calendar />
          <DataForm />
        </>
      ) : (
        <div>"Not user"</div>
      )}
    </>
  );
};

export default AuthGuard;
