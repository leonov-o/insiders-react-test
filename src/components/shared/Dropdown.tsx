import React from 'react';
import {Input} from "./Input.tsx";
import {ChevronDownIcon, ChevronUpIcon} from "@radix-ui/react-icons";
import {Checkbox} from "./Checkbox.tsx";

const ChevronIcon = ({open} : {open: boolean}) => {
    return open? <ChevronUpIcon className="size-4"/> : <ChevronDownIcon className="size-4"/>
};

const DropdownItem = ({option}) => {
    if (!option) return null;
    return (
        <div className="flex cursor-pointer items-center px-3  py-2 font-light hover:bg-gray-200">
            <div className="font-bold">
                {/*{option[0]}*/}
                <Checkbox checked={true}/>
            </div>
            <div className="ml-3 text-textDefault">
                {option}
            </div>
        </div>
    );
};

export const Dropdown = () => {
    return (
        <div className="relative border border-b-0 border-black">
            <Input placeholder="Type to search..." actionElement={<ChevronIcon open={true}/>}
                   onChange={(e) => console.log(e.target.value)}
                   className="border-0"
             value="d"/>
            <div
                className="absolute -left-px box-border w-[calc(100%+1.8px)] border border-t-0 border-black bg-white   px-2">
                <div className="mr-3 max-h-60 overflow-y-auto">
                    {new Array(10).fill("Department").map((option, index) => (
                        <DropdownItem key={index} option={option}/>
                    ))
                    }
                </div>
            </div>
        </div>
    );
};
