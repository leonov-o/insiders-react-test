import {Button, Dropdown} from "./shared";
import {TrashIcon} from "@radix-ui/react-icons";
import {IKeyValue, useUserStore} from "../store";
import React, {useEffect, useState} from "react";
import AddUserPopup from "./AddUserPopup.tsx";

interface FiltersType {
    department: IKeyValue[];
    country: IKeyValue[];
    status: IKeyValue[];
}
interface FiltersProps {
    filters: FiltersType;
    onChange: (filters: FiltersType) => void;
}

export const Filters:React.FC<FiltersProps> = ({filters, onChange}) => {
    const {departments, countries, statuses} = useUserStore();
    const [isDisabled, setIsDisabled] = useState(true);
    const [popup, setPopup] = useState(false);

    const handleChange = (key, value) => {
        onChange({
            ...filters,
            [key]: value
        } as FiltersType)
    }

    const resetFilters = () => {
        onChange({
            department: [],
            country: [],
            status: [],
        })
    }

    useEffect(() => {
        if (filters.department.length >=3) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }, [filters]);


    return (
        <div>
            {popup && <AddUserPopup onClose={() => setPopup(false)}/>}
            <p className="mb-3 font-light text-primary">Please add at least 3 departments to be able to proceed next steps.</p>
            <div className="flex justify-between">
                <div className=" flex">
                    <Dropdown options={departments} selected={filters.department} selectable={true} onChange={(value) => handleChange("department", value)} />
                    <Dropdown options={countries} selected={filters.country} selectable={true} disabled={isDisabled} onChange={(value) => handleChange("country", value)}/>
                    <Dropdown options={statuses} selected={filters.status} selectable={true} disabled={isDisabled} onChange={(value) => handleChange("status", value)}/>
                    <Button className="ml-5" onClick={resetFilters}><TrashIcon className="size-5"/></Button>
                </div>
                <Button onClick={() => setPopup(true)}>Add user</Button>
            </div>
        </div>
    );
};
