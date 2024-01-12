import getStyle from "../util/Styles";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import AuthPanel from "../components/authorisation/AuthPanel";
import LoginPanel from "../components/authorisation/LoginPanel";
import SignupPanel from "../components/authorisation/SignupPanel";
import { AuthState } from "../util/Types";
import { useCallback, useState } from "react";

// TODO: Add setAuthState to the buttons in AuthPanel, LoginPanel and SignupPanel.
//   Pass authstate and setAuthState as props to the buttons.
function Authorisation() {
  const [authState, setAuthState] = useState<AuthState>(AuthState.Default);

  const setAuthStateToLogin = useCallback(() => {
    setAuthState(AuthState.Login);
  }, []);

  const setAuthStateToSignup = useCallback(() => {
    setAuthState(AuthState.Signup);
  }, []);

  const getPanel = useCallback(() => {
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

  return <div className={getStyle(styles, "ctn")}>{getPanel()}</div>;
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

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

export default Authorisation;
