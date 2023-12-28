import getStyle from "../../util/Styles";
import Happy from "../../assets/emojis/happy.svg"


function EmotionSelector() {
    return (
        <div className={getStyle(styles, "ctn")}>
            <p className={getStyle(styles, "heading")}>Today I feel...</p>
            <div>
            </div>
        </div>
    );
}

const styles = {
    ctn: [
        "gap-2.5",
        "pt-2.5",
        "flex",
        "flex-col",
        "px-4"
    ],
    heading: [
        "text-lg",
        "text-peach",
        "font-bold",
    ],
};

export default EmotionSelector;