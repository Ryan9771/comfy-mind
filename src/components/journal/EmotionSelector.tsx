import { useState } from "react";
import getStyle from "../../util/Styles";
import EmotionButton from "./EmotionButton";
import { Emotion } from "../../util/Types";

// TODO: Reorder these buttons to match the order of the enum

interface Props {
    givenEmotion: Emotion;
    onChangeEmotion: (emotion: Emotion) => void;
}

function EmotionSelector({ givenEmotion, onChangeEmotion }: Props) {

    const [chosenEmotion, setChosenEmotion] = useState<Emotion>(givenEmotion);

    const clickHandler = (emotion: Emotion) => {
        setChosenEmotion(emotion);
        onChangeEmotion(emotion);
    }

    return (
        <div className={getStyle(styles, "ctn")}>
            <p className={getStyle(styles, "heading")}>Today I feel...</p>
            <div className={getStyle(styles, "selectorCtn")}>
                <EmotionButton clickHandler={clickHandler} chosenEmotion={chosenEmotion} emotion={Emotion.Neutral} />
                <EmotionButton clickHandler={clickHandler} chosenEmotion={chosenEmotion} emotion={Emotion.Happy} />
                <EmotionButton clickHandler={clickHandler} chosenEmotion={chosenEmotion} emotion={Emotion.Sad} />
                <EmotionButton clickHandler={clickHandler} chosenEmotion={chosenEmotion} emotion={Emotion.Dissapointed} />
                <EmotionButton clickHandler={clickHandler} chosenEmotion={chosenEmotion} emotion={Emotion.Angry} />
                <EmotionButton clickHandler={clickHandler} chosenEmotion={chosenEmotion} emotion={Emotion.Anxious} />
                <EmotionButton clickHandler={clickHandler} chosenEmotion={chosenEmotion} emotion={Emotion.Scared} />
                <EmotionButton clickHandler={clickHandler} chosenEmotion={chosenEmotion} emotion={Emotion.Nervous} />
                <EmotionButton clickHandler={clickHandler} chosenEmotion={chosenEmotion} emotion={Emotion.Stressed} />
                <EmotionButton clickHandler={clickHandler} chosenEmotion={chosenEmotion} emotion={Emotion.Surprised} />
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
        "px-4",
        "lg:gap-8",
    ],
    heading: [
        "text-lg",
        "text-peach",
        "lg:text-center",
        "lg:text-xl"
    ],
    selectorCtn: [
        "flex",
        "w-full",
        "items-center",
        "gap-4",
        "overflow-x-auto",
        "pb-3",
        "lg:flex-wrap",
        "lg:justify-center",
    ],
};

export default EmotionSelector;