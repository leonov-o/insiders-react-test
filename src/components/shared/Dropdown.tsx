import React, {useEffect, useState} from 'react';
import {Input} from "./Input.tsx";
import {ChevronDownIcon, ChevronUpIcon} from "@radix-ui/react-icons";
import {cn} from "../../utils/cn.ts";
import {DropdownItem} from "./DropdownItem.tsx";
import {IOption} from "../../App.tsx";

type DropdownProps = {
    options: IOption[];
    selectable: boolean;
    selected: IOption[];
    onChange: (selected: IOption[]) => void;
};

const ChevronIcon = ({open}: { open: boolean }) => {
    return open ? <ChevronUpIcon className="size-4"/> : <ChevronDownIcon className="size-4"/>
};

export const Dropdown: React.FC<DropdownProps> = ({options, selectable, selected, onChange}) => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredOptions, setFilteredOptions] = useState(options);

    useEffect(() => {
        setFilteredOptions(
            options.sort((a, b) => {
                const isASelected = selected.find(v => v.value === a.value);
                const isBSelected = selected.find(v => v.value === b.value);

                if (isASelected && !isBSelected) return -1;
                if (!isASelected && isBSelected) return 1;
                return 0;
            })
        );
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
        console.log(`Selected ${value.name}`);
        if (selectable) {
            if (selected.find(v => v.value === value.value)) {
                onChange(selected.filter(v => v.value !== value.value))
                return
            }
            onChange([...selected, value]);
        } else {
            onChange([value]);
            setOpen(false);
        }
    };


    return (
        <div className={cn("relative w-full", {"border border-b-0 border-black": open})}>
            <Input placeholder="Type to search..."
                   inlineText={selected.length > 1 ? `Selected (${selected.length})` : selected[0]?.name}
                   actionElement={<ChevronIcon open={open}/>}
                   onAction={() => setOpen(!open)}
                   onChange={(e) => setSearch(e.target.value)}
                   className={cn({"border-0": open})}
                   value={search}/>
            {
                open ? (
                    <div
                        className="absolute -left-px box-border w-[calc(100%+1.8px)] border border-t-0 border-black bg-white   px-2">
                        <div className="mr-3 max-h-60 overflow-y-auto">
                            {
                                filteredOptions.length > 0
                                    ? filteredOptions.map((option) => <DropdownItem key={option.value}
                                                                                    option={option}
                                                                                    checked={!!selected.find((v) => v.value === option.value)}
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
