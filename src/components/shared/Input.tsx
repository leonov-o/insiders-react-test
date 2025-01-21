import React from 'react';

interface InputProps {
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({label, placeholder, value, onChange}) => {
    return (
        <div className="text-sm">
            {
                label && <label className="block text-sm font-medium text-inputText">{label}</label>
            }
            <input
                type="text"
                placeholder={placeholder}
                className="mt-2 border border-inputBorder px-6 py-3.5 text-inputText focus:border-black focus:outline-none"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};
