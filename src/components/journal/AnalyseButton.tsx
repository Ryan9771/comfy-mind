import getStyle from "../../util/Styles";
import { GiBrain } from "react-icons/gi";

function AnalyseButton() {
    return (
        <div className={getStyle(styles, "ctn")}>
            <GiBrain className={getStyle(styles, "icon")} />
            <p>Analyse today's entry</p>
        </div>
    );
}

const styles = {
    ctn: [
        "bg-blue-1",
        "text-white",
        "rounded-lg",
        "tracking-tighter",
        "gap-2.5",
        "px-4",
        "py-[6px]",
        "flex",
        "items-center",
    ],
    icon: [
        "fill-white",
        "w-6",
        "h-6"
    ], 
};

export default AnalyseButton;