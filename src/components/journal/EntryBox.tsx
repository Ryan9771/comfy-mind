import getStyle from "../../util/Styles";

// TOOD: Change 'tap' to 'click' on desktop

function EntryBox() {
    return (
        <textarea placeholder="Tap to write how you feel today..." className={getStyle(styles, "input")} />
    );
}

const styles = {
    input: [
        "text-blue-1",
        "p-4",
        "rounded-xl",
        "tracking-tight",
        "h-4/6",
        "overflow-y-auto",
        "leading-5",
    ],

}

export default EntryBox;