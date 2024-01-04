import getStyle from "../../util/Styles";

// TODD: Change 'tap' to 'click' on desktop
// TODO: Validation check for empty entry & max word limit entry

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