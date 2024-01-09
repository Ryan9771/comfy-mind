import getStyle from "../util/Styles";
import DatePicker from "../components/journal/DatePicker";
import EmotionSelector from "../components/journal/EmotionSelector";
import { AnalyseButton, SaveButton, DoneButton } from "../components/journal/Buttons";
import { useState } from 'react';

// TODO: Try using local storage first to store dates and their entries

function EntrySummary() {
    
    /* === Edit buttons state management === */
    const [entryEditable, setEntryEditable] = useState<boolean>(false);
    const handleSave = () => {
        console.log("Save button clicked")
        setEntryEditable(true);
        console.log(entry);
    }

    const handleDone = () => {
        setEntryEditable(false);
        console.log("Done button clicked");
    }

    /* === Entry text state management === */
    const [entry, setEntry] = useState<string>("");
    const handleEntryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEntry(e.target.value);
    }

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
                        <textarea 
                            value={entry} 
                            onChange={handleEntryChange} 
                            placeholder="Edit to write how you feel today..." 
                            className={getStyle(styles, "input")} 
                            maxLength={600}
                        />
                    </div>
                    <div className={getStyle(styles, "btnsWrapper")}>
                        { !entryEditable ? <AnalyseButton onClick={() => console.log("Analyse button clicked")} /> : (
                            <div className={getStyle(styles, "editBtnsCtn")}>
                                <DoneButton onClick={handleDone} />
                                <SaveButton onClick={handleSave} />
                            </div>
                        )}
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
    ],
    bodyHeading: [
        "text-xl",
        "text-blue-2",
        "tracking-tight",
        "lg:text-1xl",
    ],
    btnsWrapper: [
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
    editBtnsCtn: [
        "flex",
        "w-full",
        "items-center",
        "justify-around",
    ],
    input: [
        "text-blue-1",
        "p-4",
        "rounded-xl",
        "tracking-tight",
        "h-full",
        "overflow-y-auto",
        "leading-5",
        "focus:outline-none",
    ],
};
export default EntrySummary;
