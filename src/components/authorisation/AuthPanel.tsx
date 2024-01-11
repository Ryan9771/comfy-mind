import getStyle from "../../util/Styles";
import { LoginButton, SignupButton } from "./Buttons";

function AuthPanel() {
  return (
    <div className={getStyle(styles, "ctn")}>
      <div className={getStyle(styles, "titleCtn")}>
        <div className={getStyle(styles, "headingText")}>Welcome</div>
        <div className={getStyle(styles, "subHeadingText")}>
          Journal your thoughts & get insights
        </div>
      </div>
      <div className={getStyle(styles, "loginBtnCtn")}>
        <LoginButton onClick={() => console.log("Login button clicked")} />
      </div>
      <div className={getStyle(styles, "signinBtnCtn")}>
        <SignupButton onClick={() => console.log("Login button clicked")} />
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
  titleCtn: ["w-full", "flex", "flex-col", "gap-2", "items-center", "lg:gap-4"],
  headingText: ["text-lg", "text-blue-2", "font-semibold", "lg:text-xl"],
  subHeadingText: ["text-blue-2", "text-center", "lg:text-lg"],
  loginBtnCtn: [
    "w-full",
    "pt-7",
    "pb-5",
    "border-b",
    "border-b-blue-2",
    "lg:pb-7",
  ],
  signinBtnCtn: ["w-full", "pt-5", "lg:pt-7"],
};

export default AuthPanel;
