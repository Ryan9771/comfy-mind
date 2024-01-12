import getStyle from "../../util/Styles";
import { LoginButton } from "./Buttons";

// TODO: Add or make by regex a validation for email and password

function SignupPanel() {
  return (
    <div className={getStyle(styles, "ctn")}>
      <div className={getStyle(styles, "loginBtnCtn")}>
        <LoginButton onClick={() => console.log("Login button clicked")} />
      </div>
      <div className={getStyle(styles, "signupCtn")}>
        <div className={getStyle(styles, "heading")}>Signup</div>
        <input
          type="email"
          className={getStyle(styles, "textfields")}
          placeholder="Email"
        />
        <input
          type="password"
          className={getStyle(styles, "textfields")}
          placeholder="Password"
        />
        <input
          type="password"
          className={getStyle(styles, "textfields")}
          placeholder="Re-enter Password"
        />
        <div className={getStyle(styles, "continueBtn")}>continue</div>
      </div>
    </div>
  );
}

const styles = {
  ctn: [
    "bg-peach",
    "w-64",
    "p-7",
    "flex",
    "flex-col",
    "items-center",
    "rounded-lg",
    "shadow-md",
    "lg:w-80",
  ],
  heading: ["text-xl", "text-blue-2"],
  textfields: [
    "w-full",
    "text-blue-2",
    "rounded-lg",
    "px-4",
    "py-2",
    "flex",
    "items-center",
    "focus:outline-none",
    // "lg:py-2",
  ],
  loginBtnCtn: ["w-full", "pb-5", "border-b", "border-b-blue-2", "lg:pb-7"],
  signupCtn: ["flex", "flex-col", "w-full", "gap-4", "items-center", "pt-2"],
  continueBtn: [
    "flex",
    "items-center",
    "gap-2",
    "text-blue-2",
    "text-center",
    "py-1",
    "cursor-pointer",
    "hover:font-semibold",
  ],
  signinBtnCtn: ["w-full", "pt-5", "lg:pt-7"],
  continueBtnIcon: ["fill-blue-2", "w-4"],
};

export default SignupPanel;
