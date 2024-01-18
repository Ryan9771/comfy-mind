import getStyle from "../util/Styles";
import AuthPanel from "../components/authorisation/AuthPanel";
import LoginPanel from "../components/authorisation/LoginPanel";
import SignupPanel from "../components/authorisation/SignupPanel";
import { AuthState } from "../util/Types";
import { useCallback, useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseConfig";

function Authorisation() {
  /* Manages whether the auth panel is default, login or signup */
  const [authState, setAuthState] = useState<AuthState>(AuthState.Default);

  const setAuthStateToLogin = useCallback(() => {
    setAuthState(AuthState.Login);
  }, []);

  const setAuthStateToSignup = useCallback(() => {
    setAuthState(AuthState.Signup);
  }, []);

  const navigate = useNavigate();

  /* Redirects user to journal page if user is logged in on load */
  useEffect(
    () =>
      onAuthStateChanged(auth, (currUser) => {
        if (currUser) {
          navigate("/journal");
        }
      }),
    []
  );

  /* Gets the correct auth panel based on which button is clicked */
  const getPanel = useMemo(() => {
    switch (authState) {
      case AuthState.Default:
        return (
          <AuthPanel
            loginFunc={setAuthStateToLogin}
            signupFunc={setAuthStateToSignup}
          />
        );
      case AuthState.Login:
        return <LoginPanel signupFunc={setAuthStateToSignup} />;
      case AuthState.Signup:
        return <SignupPanel loginFunc={setAuthStateToLogin} />;
    }
  }, [authState]);

  return <div className={getStyle(styles, "ctn")}>{getPanel}</div>;
}

const styles = {
  ctn: [
    "w-full",
    "h-full",
    "flex",
    "pt-32",
    "gap-5",
    "bg-blue-1",
    "flex-col",
    "items-center",
    "lg:pt-52",
  ],
};

export default Authorisation;
