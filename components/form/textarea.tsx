import React from "react";
import { useFormContext } from "react-hook-form";
import classNames from "classnames";

interface TextareaProps {
    name: string;
    label: string;
    placeholder: string;
    validation?: object;
    className?: string;
    rows?: number;
}

const Textarea: React.FC<TextareaProps> = ({
    name,
    label,
    placeholder,
    validation,
    className = "",
    rows = 3,
}) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    // const pattern = /^[a-zA-Z0-9\s]+$/;

    return (
        <div className="">
            <label className="block text-sm font-medium mb-1 2xl:text-lg xl:text-md md:text-sm sm:text-xs">
                {label}
            </label>
            <textarea
                rows={rows}
                placeholder={placeholder}
                {...register(name, { ...validation })}
                className={classNames(
                    `border-[#1F1F1F1F] border p-3 w-full text-sm rounded-lg focus:outline-none placeholder:text-[#504F51] ${className}`,
                    {
                        "border-ring-foreground": !errors[name],
                        "focus:border-primary": !errors[name],
                        "border-red-500": errors[name],
                    }
                )}
            ></textarea>
            {errors[name] && typeof errors[name].message === "string" && (
                <p className="text-red-500 text-xs">
                    {errors[name].type === "pattern"
                        ? "Special characters are not allowed"
                        : errors[name].message}
                </p>
            )}
        </div>
    );
};

export default Textarea;
