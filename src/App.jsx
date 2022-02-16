import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import AuthGuard from "./containers/AuthGuard";
import AppBar from "./components/AppBar";
import LandingPage from "./containers/LandingPage";
import ErrorPage from "./containers/ErrorPage";
import Home from "./containers/Home";
import Recipes from "./containers/Recipes";

const App = () => {
  return (
    <>
      <AuthProvider>
        <AppBar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<AuthGuard />}>
            <Route path="/home" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
