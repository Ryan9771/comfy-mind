import getStyle from "../util/Styles";

import Navbar from "../components/navbar/Navbar";
import DatePicker from "../components/journal/DatePicker";

function EntrySummary() {
    return (
        <div className={getStyle(styles, "ctn")}>
            <Navbar />
            <DatePicker />
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
        "gap-5",
        // "bg-blue-1",
    ],
};
export default EntrySummary;
