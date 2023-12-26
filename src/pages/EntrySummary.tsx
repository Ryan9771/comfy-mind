import getStyle from "../util/Styles";
import Navbar from "../components/navbar/Navbar";

function EntrySummary() {
    return (
        <div className={getStyle(styles, "ctn")}>
            <Navbar />
        </div>
    );
}

const styles = {
    ctn: [
        "w-full",
        "h-full",
        "flex",
        "flex-col",
        "pt-5",
        "gap-1",
        "bg-blue-1",
    ],
};
export default EntrySummary;
