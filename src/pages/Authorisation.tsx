import getStyle from "../util/Styles";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import AuthPanel from "../components/authorisation/AuthPanel";

function Authorisation() {
  return (
    <div className={getStyle(styles, "ctn")}>
      <AuthPanel />
    </div>
  );
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
