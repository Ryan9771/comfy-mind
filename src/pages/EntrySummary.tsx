import getStyle from "../util/Styles";
import DatePicker from "../components/journal/DatePicker";
import EmotionSelector from "../components/journal/EmotionSelector";
import { AnalyseButton, SaveButton, DoneButton } from "../components/journal/Buttons";
import { useEffect, useState } from 'react';
import { Emotion, JournalEntry } from "../util/Types";
import { getStorageValue, setStorageValue } from "../util/LocalStorage";

// TODO: Fix bug where sometimes clicking on entry doesn't cause buttons 
//  to appear. Eg: Highlight entry and delete -> Doesnt cause buttons to show
//  Potential Fix: Maybe instead of onClick, use onFocus and let the user click 
//      cancel to remove buttons.

function EntrySummary() {
    /* === Entry Text State Management === */
    const [entryText, setEntryText] = useState<string>("");
    const handleEntryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEntryText(e.target.value);
    }

    /* === Emotion Related State Management */
    const [emotion, setEmotion] = useState<Emotion>(Emotion.Neutral);
    const handleEmotionChange = (emotion: Emotion) => {
        setEmotion(emotion);
        setEntryEditable(true);
    }

    /* === Date Picker State Management === */
    const [entryDate, setEntryDate] = useState<Date>(new Date());

    /* === Edit buttons state management === */
    const [entryEditable, setEntryEditable] = useState<boolean>(false);
    const handleSave = () => {
        setEntryEditable(true);
        const entryData: JournalEntry = {
            date: entryDate,
            emotion: emotion,
            entryText: entryText,
        };
        setStorageValue(entryDate.toDateString(), entryData);
        console.log("=== Entry Submitted ===");
        console.log(entryData);
    }

    const handleDone = () => {
        setEntryEditable(false);
        console.log("Done button clicked");
    }

    /* === Load Data into correct states using local storage === */
    useEffect(() => {
        const entryData = getStorageValue(entryDate.toDateString());
        if (entryData) {
            console.log(entryData);
            setEntryText(entryData.entryText);
            setEmotion(entryData.emotion);
        } else {
            setEntryText("");
            setEmotion(Emotion.Neutral);
        }
    }, [entryDate]);

    return (
        <div className={getStyle(styles, "ctn")}>
            <div className={getStyle(styles, "metadataCtn")}>
                <DatePicker givenDate={entryDate} onChangeDate={setEntryDate} />
                <EmotionSelector givenEmotion={emotion} onChangeEmotion={handleEmotionChange} />
            </div>
            <div className={getStyle(styles, "bodyCtnWrapper")}>
                <div className={getStyle(styles, "bodyCtn")}>
                    <div 
                        className={getStyle(styles, "entryCtnWrapper")} 
                        onClick={() => setEntryEditable(!entryEditable)}
                    >
                        <p className={getStyle(styles, "bodyHeading")}>Your sanctuary - journal freely:</p>
                        <textarea 
                            value={entryText} 
                            onChange={handleEntryChange} 
                            placeholder="Edit to write how you feel today..." 
                            className={getStyle(styles, "input")} 
                            maxLength={800}
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
