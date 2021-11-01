import "./Button.css";
const Button = ({
    text,
    onClick,
    classN = "btn",
    color = "black",
    fontColor = "white",
}) => {
    return (
        <button
            onClick={onClick}
            className={classN}
            style={{ backgroundColor: color, color: fontColor }}
        >
            {text}
        </button>
    );
};

export default Button;
