import React, { ReactNode } from "react";
import ButtonPreloader from "@/components/preloaders/ButtonPreloader";
import classNames from "classnames";

interface ButtonProps {
    type: "submit" | "reset" | "button";
    name?: string;
    loading?: boolean;
    loaderColor?: string;
    className?: string;
    Icon?: ReactNode;
    iconPosition?: "left" | "right";
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    type,
    name,
    loaderColor = "#000000",
    className = "",
    loading = false,
    onClick = null,
    Icon = null,
    iconPosition = "left",
}) => {
    return (
        <button
            onClick={onClick ? () => onClick() : undefined}
            type={type}
            className={classNames(`${className ? className : "btn"}`, {
                "flex gap-2 items-center  !cursor-pointer": Icon,
            })}
        >
            {loading ? (
                <ButtonPreloader loaderColorPrimary={loaderColor} />
            ) : (
                <>
                    {Icon && iconPosition === "left" && Icon}
                    {name}
                    {Icon && iconPosition === "right" && Icon}
                </>
            )}
        </button>
    );
};

export default Button;
