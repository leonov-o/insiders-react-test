import React from 'react';
import {cn} from "../../utils/cn.ts";
import {CheckIcon} from "@radix-ui/react-icons";

interface CheckboxProps {
    checked: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({checked}) => {
    return (
        <div className={cn(
            "h-6 w-6 border-black border flex items-center justify-center",
            {"bg-black": checked}
        )}
        >
            {checked ? <CheckIcon className="size-5 text-white"/> : null}
        </div>
    );
};
