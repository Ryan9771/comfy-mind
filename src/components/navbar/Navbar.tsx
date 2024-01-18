import getStyle from "../../util/Styles";
import { FaQuoteRight } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
// import { IoMdJournal } from "react-icons/io";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// TODO: Probably some page state management or something
//  to highlight the current icon in the navbar depending on the page

// TODO: (Solves the above TODO) Replace current tab icon in navbar with logout for journal page
const auth = getAuth();

function Navbar() {
  const navigate = useNavigate();
  const logOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign out is successful
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={getStyle(styles, "ctn")}>
      <FaQuoteRight className="w-[22px] h-[22px] fill-peach cursor-pointer" />
      {/* <IoMdJournal className="w-[22px] h-[22px] fill-peach" /> */}
      <IoLogOut
        onClick={logOutHandler}
        className="w-[22px] h-[22px] fill-peach cursor-pointer"
      />
    </div>
  );
}

const styles = {
  ctn: [
    "flex",
    "px-6",
    "justify-between",
    "items-center",
    "bg-blue-1",
    "pt-5",
    "fixed",
    "top-0",
    "left-0",
    "right-0",
    "z-50",
  ],
};

export default Navbar;
