import React from "react";
import {cn} from "../../utils/cn.ts";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({children, className, disabled = false}) => {
    return (
        <button disabled={disabled} className={cn(
            "border border-primary p-3 text-center text-sm transition hover:bg-primary",
            {
                "cursor-not-allowed text-buttonTextDisabled hover:bg-white": disabled
            },
            className
        )}>
            {children}
        </button>
    );
};
