import getStyle from "../../util/Styles";

// TOOD: Change 'tap' to 'click' on desktop

function EntryBox() {
    return (
        <textarea placeholder="Edit to write how you feel today..." className={getStyle(styles, "input")} />
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
    ],

}

export default EntryBox;