import getStyle from "../../util/Styles";
import { useState } from 'react';

// TODD: Change 'tap' to 'click' on desktop
// TODO: Validation check for empty entry

function EntryBox() {

    const [entry, setEntry] = useState<string>("");
    const handleEntryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEntry(e.target.value);
    }

    return (
        <textarea 
            value={entry} 
            onChange={handleEntryChange} 
            placeholder="Edit to write how you feel today..." 
            className={getStyle(styles, "input")} 
            maxLength={600}
        />
    );
}

const styles = {
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

}

export default EntryBox;