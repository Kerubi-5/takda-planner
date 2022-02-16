import "bootstrap/dist/css/bootstrap.min.css";

import { AuthProvider } from "./contexts/AuthContext";
import AuthGuard from "./containers/AuthGuard";
import AppBar from "./components/AppBar";

const App = () => {
  return (
    <>
      <AuthProvider>
        <AppBar />

        <AuthGuard />
      </AuthProvider>
    </>
  );
};

export default App;
