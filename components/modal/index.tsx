import { X } from "@phosphor-icons/react";
import classNames from "classnames";
import { ReactNode } from "react";

interface ModalProps {
    children: ReactNode;
    className?: string;
    title: string;
    closeModal?: () => void;
}
const Modal: React.FC<ModalProps> = ({
    children,
    className,
    title,
    closeModal,
}) => {
    return (
        <div className="fixed z-[999] h-full w-full flex justify-center items-center top-0 left-0 bg-black/70">
            <div
                className={classNames(
                    `${className} flex flex-col gap-4 rounded p-4`
                )}
            >
                <div className="flex items-center justify-between">
                    <div className="text-xl font-medium">{title}</div>
                    <div>
                        <button onClick={() => closeModal?.()}>
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {children}
            </div>
        </div>
    );
};

export default Modal;
