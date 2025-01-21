import React from 'react';
import {cn} from "../../utils/cn.ts";

interface InputProps {
    label?: string;
    placeholder?: string;
    inlineText?: string;
    className?: string;
    value: string;
    disabled?: boolean;
    actionElement?: React.ReactNode;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAction?: () => void;
}

export const Input: React.FC<InputProps> = ({label, placeholder, inlineText, className, value, disabled, actionElement, onChange, onAction}) => {
    return (
        <div className={cn(
            "text-sm w-full",
            className
        )}>
            {
                label && <label className="mb-2 block text-sm font-medium text-inputText">{label}</label>
            }
            <div className="flex items-center justify-between border border-inputBorder px-5 py-3.5" >
                <div className="flex">
                    {
                        inlineText && <div className="mr-2 text-sm">{inlineText}</div>
                    }
                    <input
                        type="text"
                        placeholder={placeholder}
                        disabled={disabled}
                        className="text-inputText focus:outline-none disabled:cursor-not-allowed disabled:bg-white disabled:text-textDisabled"
                        value={value}
                        onChange={onChange}
                    />
                </div>
                {
                    actionElement && (
                        <div onClick={onAction}>
                            {actionElement}
                        </div>
                    )
                }
            </div>
        </div>
    );
};
