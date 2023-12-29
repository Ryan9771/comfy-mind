import getStyle from "../../util/Styles";
import EmotionButton from "./EmotionButton";
import { Emotion } from "../../util/Types";

// TODO: Reorder these buttons to match the order of the enum

function EmotionSelector() {
    return (
        <div className={getStyle(styles, "ctn")}>
            <p className={getStyle(styles, "heading")}>Today I feel...</p>
            <div className={getStyle(styles, "selectorCtn")}>
                <EmotionButton emotion={Emotion.Neutral} />
                <EmotionButton emotion={Emotion.Happy} />
                <EmotionButton emotion={Emotion.Sad} />
                <EmotionButton emotion={Emotion.Dissapointed} />
                <EmotionButton emotion={Emotion.Angry} />
                <EmotionButton emotion={Emotion.Anxious} />
                <EmotionButton emotion={Emotion.Scared} />
                <EmotionButton emotion={Emotion.Nervous} />
                <EmotionButton emotion={Emotion.Stressed} />
                <EmotionButton emotion={Emotion.Surprised} />
            </div>
        </div>
    );
}

const styles = {
    ctn: [
        "gap-5",
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
    selectorCtn: [
        "flex",
        "w-full",
        "items-center",
        "gap-4",
        "overflow-x-auto",
        "pb-3",
    ],
};

export default EmotionSelector;