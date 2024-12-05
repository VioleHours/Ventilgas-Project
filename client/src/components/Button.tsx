import React from "react";

interface ButtonProps {
    variant: "primary" | "secondary" | "tertiary" | "aux" | "black";
    children: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, children, onClick }) => {
    let classNames =
        "px-4 py-2 rounded-full text-white m-2 flex items-center justify-center ";

    switch (variant) {
        case "primary":
            classNames += "btn-hero";
            break;
        case "secondary":
            classNames += "btn-secondary";
            break;
        case "tertiary":
            classNames += "btn-tertiary";
            break;
        case "aux":
            classNames += "btn-aux";
            break;
        case "black":
            classNames += "btn-black";
            break;
        default:
            break;
    }

    return (
        <button className={classNames} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
