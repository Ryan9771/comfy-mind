import getStyle from "../util/Styles";

import Navbar from "../components/navbar/Navbar";
import DatePicker from "../components/journal/DatePicker";
import EmotionSelector from "../components/journal/EmotionSelector";

function EntrySummary() {
    return (
        <div className={getStyle(styles, "ctn")}>
            <Navbar />
            <div className={getStyle(styles, "metadataCtn")}>
                <DatePicker />
                <EmotionSelector />
            </div>
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
        "bg-blue-1",
    ],
    metadataCtn: [
        "flex",
        "flex-col",
        "p-4",
        "gap-6"
    ],
};
export default EntrySummary;
