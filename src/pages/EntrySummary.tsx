import getStyle from "../util/Styles";
import DatePicker from "../components/journal/DatePicker";
import EmotionSelector from "../components/journal/EmotionSelector";
import EntryBox from "../components/journal/EntryBox";
import AnalyseButton from "../components/journal/AnalyseButton";
import { useState } from 'react';

// TODO: Try using local storage first to store dates and their entries
// TODO: Add link between edit buttons and entry box

function EntrySummary() {
    
    const [entryEditable, setEntryEditable] = useState<boolean>(false);

    return (
        <div className={getStyle(styles, "ctn")}>
            <div className={getStyle(styles, "metadataCtn")}>
                <DatePicker />
                <EmotionSelector />
            </div>
            <div className={getStyle(styles, "bodyCtnWrapper")}>
                <div className={getStyle(styles, "bodyCtn")}>
                    <div 
                        className={getStyle(styles, "entryCtnWrapper")} 
                        onClick={() => setEntryEditable(!entryEditable)}
                    >
                        <p className={getStyle(styles, "bodyHeading")}>Your sanctuary - journal freely:</p>
                        <EntryBox />
                    </div>
                    <div className={getStyle(styles, "btnWrapper")}>
                        <AnalyseButton />
                    </div>
                </div>
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
        "pt-10",
        "gap-5",
        "bg-blue-1",
        "lg:flex-row",
        "lg:pt-12"
    ],
    metadataCtn: [
        "flex",
        "flex-col",
        "p-4",
        "gap-3",
        "lg:items-center",
        "lg:gap-24"
    ],
    bodyCtnWrapper: [
        "flex",
        "w-full",
        "h-full",
        "p-1",
        "md:px-3",
        "lg:px-5",
        "xl:pr-7"
    ],
    bodyCtn: [
        "flex",
        "flex-col",
        "w-full",
        "h-full",
        "px-8",
        "pt-5",
        "bg-peach",
        "rounded-3xl",
        // "gap-6",
    ],
    bodyHeading: [
        "text-xl",
        "text-blue-2",
        "tracking-tight",
        "lg:text-1xl",
    ],
    btnWrapper: [
        "flex",
        "w-full",
        "justify-center",
        "items-center",
        "h-1/6",
    ],
    entryCtnWrapper: [
        "flex",
        "flex-col",
        "w-full",
        "gap-6",
        "h-5/6"
    ],
};
export default EntrySummary;
