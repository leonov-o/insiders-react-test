import React from 'react';
import {Checkbox} from "./Checkbox.tsx";
import {IOption} from "../../App.tsx";


interface DropdownItemProps {
    option: IOption;
    checked: boolean;
    selectable?: boolean;
    onClick?: () => void;
}


export const DropdownItem: React.FC<DropdownItemProps> = ({option, checked, selectable, onClick}) => {
    if (!option.name) return null;
    return (
        <div
            className="flex cursor-pointer items-center px-3 py-2 font-light hover:bg-gray-200"
            onClick={onClick}
        >
            <div className="font-bold">
                {
                    selectable ? <Checkbox checked={checked}/> : option.name[0]
                }
            </div>
            <div className="ml-3 text-textDefault">
                {option.name}
            </div>
        </div>
    );
};
