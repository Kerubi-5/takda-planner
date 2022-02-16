import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoutes from "./containers/ProtectedRoutes";
import AppBar from "./components/AppBar";
import LandingPage from "./containers/LandingPage";
import ErrorPage from "./containers/ErrorPage";
import Home from "./containers/Home";
import Ingredients from "./containers/Ingredients";

const App = () => {
  return (
    <>
      <AuthProvider>
        <AppBar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/recipes" element={<Ingredients />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
