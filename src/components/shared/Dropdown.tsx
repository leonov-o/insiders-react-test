import React, {useEffect, useState} from 'react';
import {Input} from "./Input.tsx";
import {ChevronDownIcon, ChevronUpIcon} from "@radix-ui/react-icons";
import {cn} from "../../utils/cn.ts";
import {DropdownItem} from "./DropdownItem.tsx";
import {IKeyValue, IUser} from "../../store";


type DropdownProps = {
    label?: string;
    options: IKeyValue[] | IUser[];
    selectable: boolean;
    selected: IKeyValue[] | IUser[];
    disabled?: boolean;
    className?: string;
    onChange: (selected: IKeyValue[] | IUser[]) => void;
};

const ChevronIcon = ({open}: { open: boolean }) => {
    return open ? <ChevronUpIcon className="size-4"/> : <ChevronDownIcon className="size-4"/>
};

export const Dropdown: React.FC<DropdownProps> = ({label, options, selectable, selected, disabled, className, onChange}) => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredOptions, setFilteredOptions] = useState(options);

    useEffect(() => {
        if(selectable){
            setFilteredOptions(
                options.sort((a, b) => {
                    const isASelected = selected.find(v => v.name === a.name);
                    const isBSelected = selected.find(v => v.name === b.name);

                    if (isASelected && !isBSelected) return -1;
                    if (!isASelected && isBSelected) return 1;
                    return 0;
                })
            );
        }
    }, [selected, search]);


    useEffect(() => {
        if (search) {
            setFilteredOptions(
                options.filter((option) => option.name.toLowerCase().includes(search.toLowerCase()))
            );
        } else {
            setFilteredOptions(options);
        }
    }, [search, options]);


    const handleSelect = (value) => {
        if (selectable) {
            if(selected.find(v => v.name === value.name)) {
                onChange(selected.filter(v => v.name !== value.name))
            }else {
                onChange([...selected, value]);
            }
            return
        }
        onChange([value]);
        setOpen(false);
    };


    return (
        <div className={cn("relative", {"border border-b-0 border-black": open}, className)}>
            <Input
                label={label}
                placeholder="Type to search..."
                inlineText={selected.length > 1 ? `Selected (${selected.length})` : selected[0]?.name}
                actionElement={<ChevronIcon open={open}/>}
                onAction={() => {
                    if(!disabled) setOpen(!open)
                }}
                disabled={disabled}
                onChange={(e) => setSearch(e.target.value)}
                className={cn({"border-0": open})}
                value={search}/>
            {
                open ? (
                    <div
                        className="absolute -left-px z-10 box-border w-[calc(100%+1.8px)] border border-t-0 border-black bg-white px-2">
                        <div className="mr-3 max-h-60 overflow-y-auto">
                            {
                                filteredOptions.length > 0
                                    ? filteredOptions.map((option) => <DropdownItem key={option.name}
                                                                                    option={option}
                                                                                    checked={!!selected.find((v) => v.name === option.name)}
                                                                                    selectable={selectable}
                                                                                    onClick={() => handleSelect(option)}
                                    />)
                                    : <div className="px-3 py-2 text-textDefault">No options</div>
                            }
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
};
