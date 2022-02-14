import Nav from "./components/Nav";

import "bootstrap/dist/css/bootstrap.min.css";

import { AuthProvider } from "./contexts/AuthContext";
import AuthGuard from "./containers/AuthGuard";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Nav />
        <AuthGuard />
      </AuthProvider>
    </>
  );
};

export default App;
