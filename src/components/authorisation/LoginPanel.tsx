import getStyle from "../../util/Styles";

// TODO: Add or make by regex a validation for email and password

function LoginPanel() {
  return (
    <div className={getStyle(styles, "ctn")}>
      <div className={getStyle(styles, "loginCtn")}>
        <div className={getStyle(styles, "heading")}>Login</div>
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
  loginCtn: ["flex", "flex-col", "w-full", "gap-4", "items-center"],
};

export default LoginPanel;
