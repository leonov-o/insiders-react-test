import React from 'react';
import {cn} from "../../utils/cn.ts";

interface InputProps {
    label?: string;
    placeholder?: string;
    className?: string;
    value: string;
    actionElement?: React.ReactNode;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAction?: () => void;
}

export const Input: React.FC<InputProps> = ({label, placeholder, className, value, actionElement, onChange, onAction}) => {
    return (
        <div className="text-sm">
            {
                label && <label className="mb-2 block text-sm font-medium text-inputText">{label}</label>
            }
            <div className={cn(
                "flex items-center justify-between border border-inputBorder px-5 py-3.5",
                className
            )}>
                <input
                    type="text"
                    placeholder={placeholder}
                    className="text-inputText focus:outline-none"
                    value={value}
                    onChange={onChange}
                />
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
