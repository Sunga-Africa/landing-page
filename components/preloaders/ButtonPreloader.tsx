import React from "react";

const ButtonPreloader = ({
    loaderWidth = 20,
    loaderHeight = 20,
    loaderColorPrimary = "#fff",
    loaderColorSecondary = "transparent",
}) => {
    const loaderStyle = {
        width: `${loaderWidth}px`,
        height: `${loaderHeight}px`,
        borderColor: loaderColorSecondary,
        borderRightColor: loaderColorPrimary,
    };

    return (
        <div className="flex justify-center flex-grow">
            <div className="loader simple-circle" style={loaderStyle}></div>
        </div>
    );
};

export default ButtonPreloader;
