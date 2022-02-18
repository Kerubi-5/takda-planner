import { createContext, useContext } from "react";

import { auth, googleProvider } from "../utils/firebase";
import { signInWithRedirect, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  const googleLogin = () => {
    signInWithRedirect(auth, googleProvider)
      .then((result) => {
        // ...
      })
      .catch((error) => {});
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Succesful logout");
      })
      .catch((error) => {
        // An error happened.
        console.log("Error in logging out: ", error);
      });
  };

  const value = {
    googleLogin,
    logout,
    user,
    loading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
