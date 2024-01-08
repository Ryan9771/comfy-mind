import getStyle from "../../util/Styles";

const styles = {
    buttonGeneral: [
        "flex",
        "gap-2.5",
        "justify-center",
        "items-center",
        "rounded-lg",
        "cursor-pointer",
        "tracking-tighter",
        "px-2",
        "py-1.5"
    ],
    icon: [
        ""
    ],
}

export const SaveButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <div className={getStyle(styles, "buttonGeneral")}>
            <p className={getStyle(styles, "text")}>Save</p>
        </div>
    );
}
