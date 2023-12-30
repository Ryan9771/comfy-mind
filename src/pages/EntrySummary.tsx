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
            <div className={getStyle(styles, "bodyCtn")}>
                <p className={getStyle(styles, "bodyHeading")}>Your sanctuary - journal freely:</p>
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
    bodyCtn: [
        "flex",
        "flex-col",
        "w-full",
        "h-full",
        "px-8",
        "pt-9",
        "bg-peach",
        "rounded-t-3xl",
    ],
    bodyHeading: [
        "text-lg",
        "text-blue-2",
        "tracking-tight",
    ],
};
export default EntrySummary;
