import React from "react";
import { useFormContext } from "react-hook-form";
import classNames from "classnames";

interface InputProps {
    name: string;
    label?: string;
    type: string;
    placeholder: string;
    validation?: object;
    className?: string;
    step?: string;
    disabled?: boolean;
    onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
    name,
    label,
    type = "text",
    placeholder,
    validation,
    className,
    step,
    disabled,
    onChange,
}) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className="">
            {label && (
                <label className="block text-sm font-medium mb-1 2xl:text-lg xl:text-md md:text-sm sm:text-xs">
                    {label}
                </label>
            )}

            <input
                type={type}
                step={step}
                {...register(name, {
                    ...validation,
                })}
                onInput={(e) => {
                    if (onChange) {
                        onChange(e.currentTarget.value);
                    }
                }}
                placeholder={placeholder}
                style={{
                    backdropFilter: `blur(100px)`,
                    boxShadow: `0px 0px 3px 0px #FFFFFF1A inset`,
                }}
                className={classNames(
                    `border border-[#1F1F1F1F] p-2 w-full text-sm rounded-lg disabled:!bg-[#0F0F0F] focus:outline-none placeholder:text-[#504F51] ${className}`,
                    {
                        "border-ring-foreground": !errors[name],
                        "focus:border-primary": !errors[name],
                        "border-red-500": errors[name],
                        "!bg-gray-100 cursor-not-allowed ": disabled,
                    }
                )}
                disabled={disabled}
            />
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

export default Input;
