import React, {useState} from 'react';
import {Button, Dropdown, Input} from "./shared";
import {IKeyValue, useUserStore} from "../store";


const AddUserPopup = ({onClose}: { onClose: () => void }) => {
    const {departments, countries, statuses, addUser} = useUserStore();
    const [name, setName] = useState("");
    const [department, setDepartment] = useState<IKeyValue>(null);
    const [country, setCountry] = useState<IKeyValue>(null);
    const [status, setStatus] = useState<IKeyValue>(null);

    const handleSave = () => {
        const newData = {name, department, country, status}
        addUser(newData)
        setName("")
        setDepartment(null)
        setCountry(null)
        setStatus(null)
        onClose()
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-1/2 bg-white px-14 py-10 shadow-lg">
                <h2 className="text-center text-2xl font-medium uppercase">Add User</h2>
                <div className="mt-14">
                    <div className="flex justify-between space-x-10">
                        <Input className="w-1/2" label="Full Name"
                               value={name ? name : ""}
                               onChange={(e) => setName(e.target.value)}/>
                        <Dropdown className="w-1/2" label="Department" options={departments} selectable={false}
                                  selected={[department] as IKeyValue[]}
                                  onChange={(value) => {
                                      setDepartment(value[0])
                                  }}/>
                    </div>
                    <div className="mt-5 flex justify-between space-x-10">
                        <Dropdown className="w-1/2" label="Country" options={countries} selectable={false}
                                  selected={[country] as IKeyValue[]}
                                  onChange={(value) => setCountry(value[0])}/>
                        <Dropdown className="w-1/2" label="Status" options={statuses} selectable={false}
                                  selected={[status] as IKeyValue[]}
                                  onChange={(value) => setStatus(value[0])}/>

                    </div>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                    <Button className="w-20" onClick={onClose}>Cancel</Button>
                    <Button className="w-36" onClick={handleSave}>Add</Button>
                </div>
            </div>
        </div>
    );
};

export default AddUserPopup;
