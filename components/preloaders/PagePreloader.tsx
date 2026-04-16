import React, { ReactNode } from "react";
import ButtonPreloader from "./ButtonPreloader";

interface Props {
    loading: boolean;
    className?: string;
    children?: ReactNode;
}

const PagePreloader: React.FC<Props> = ({ loading, className, children }) => {
    return (
        <>
            {loading ? (
                <div className={`${className} h-full flex items-center`}>
                    <ButtonPreloader
                        loaderWidth={40}
                        loaderHeight={40}
                        loaderColorSecondary="#000000"
                    />
                </div>
            ) : (
                children
            )}
        </>
    );
};

export default PagePreloader;
