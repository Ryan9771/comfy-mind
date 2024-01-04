import getStyle from "../util/Styles";

function Footer() {
    return (
        <div className={getStyle(styles, "ctn")}>
            <div className={getStyle(styles, "txt")}>Ryan Patel ©</div>
        </div>
    )
}

const styles = {
    ctn: [
        "w-full",
        // "border",
        // "border-t-peach",
        "flex",
        "items-center",
        "justify-center",
        "py-3",
        "bg-blue-1",
    ],
    txt: [
        "text-peach"
    ],
}

export default Footer;