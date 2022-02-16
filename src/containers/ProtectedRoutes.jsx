import { useAuth } from "../contexts/AuthContext";
import Loading from "../components/Loading";

import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const { loading, user } = useAuth();

  if (loading) return <Loading />;

  if (user) return <Outlet />;
  else return <Navigate to="/" />;
};

export default ProtectedRoutes;
