import getStyle from "../../util/Styles";
import { FaQuoteRight } from "react-icons/fa6";
import { IoMdJournal } from "react-icons/io";

// TODO: Probably some page state management or something
//  to highlight the current icon in the navbar depending on the page
function Navbar() {
    return (
        <div className={getStyle(styles, "ctn")}>
            <FaQuoteRight className="w-[22px] h-[22px] fill-peach" />
            <IoMdJournal className="w-[22px] h-[22px] fill-peach" />
        </div>
    );
}

const styles = {
    ctn: [
        "flex",
        "px-6",
        "justify-between",
        "items-center",
    ],
};

export default Navbar;