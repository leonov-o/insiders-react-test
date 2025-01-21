import React, {useEffect, useState} from 'react';
import {Button, Dropdown, Input} from "../components/shared";
import {Header} from "../components";
import {IKeyValue, useUserStore} from "../store";

export const EditUserPage = () => {
    const {users, departments, countries, statuses, updateUser} = useUserStore();
    const [selectedUser, setSelectedUser] = useState([]);
    const [name, setName] = useState("");
    const [department, setDepartment] = useState<IKeyValue>(null);
    const [country, setCountry] = useState<IKeyValue>(null);
    const [status, setStatus] = useState<IKeyValue>(null);
    const [isEdited, setIsEdited] = useState(false);

    useEffect(() => {
        if(!selectedUser.length) {
            return
        }
        if (name !== selectedUser[0]?.name
            || department.name !== selectedUser[0]?.department.name
            || country.name !== selectedUser[0]?.country.name
            || status.name !== selectedUser[0]?.status.name) {
            setIsEdited(true)
        }else{
            setIsEdited(false);
        }

    }, [name, department, country, status, users]);

    useEffect(() => {
        if (selectedUser.length) {
            setName(selectedUser[0].name)
            setDepartment(selectedUser[0].department)
            setCountry(selectedUser[0].country)
            setStatus(selectedUser[0].status)
        }
    }, [selectedUser, users]);

    const handleSave = () => {
        const id = users.findIndex((user) => user.name === selectedUser[0].name);
        console.log(id)
        if(id>-1) {
            const newData = {name, department, country, status}
            updateUser(id, newData)
            setSelectedUser([newData])
        }
    }

    const handleUndo = () => {
        setName(selectedUser[0].name)
        setDepartment(selectedUser[0].department)
        setCountry(selectedUser[0].country)
        setStatus(selectedUser[0].status)
    }

    return (
        <div>
            <Header/>
            <div className="border border-black mx-24 my-20">
                <h2 className="mt-14 text-center text-2xl font-medium uppercase">Edit User</h2>
                <div className="p-20">
                    <div>
                        <Dropdown label="User" className="w-1/2 pr-11" options={users} selectable={false}
                                  selected={selectedUser} onChange={(value) => setSelectedUser(value)}/>
                    </div>
                    <div className="">
                        <h3 className="mt-12 text-xl">User Information</h3>
                        <div className="mt-10">
                            <div className="flex justify-between space-x-20">
                                <Input className="w-1/2" label="Full Name"
                                       value={name ? name : ""}
                                       onChange={(e) => setName(e.target.value)}/>
                                <Dropdown className="w-1/2" label="Department" options={departments} selectable={false}
                                          selected={[department] as IKeyValue[]}
                                          onChange={(value) => {
                                              setDepartment(value[0])
                                          }}/>
                            </div>
                            <div className="mt-5 flex justify-between space-x-20">
                                <Dropdown className="w-1/2" label="Country" options={countries} selectable={false}
                                          selected={[country] as IKeyValue[]}
                                          onChange={(value) => setCountry(value[0])}/>
                                <Dropdown className="w-1/2" label="Status" options={statuses} selectable={false}
                                          selected={[status] as IKeyValue[]}
                                          onChange={(value) => setStatus(value[0])}/>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    {
                        isEdited && <Button className="w-24" onClick={handleUndo}>Undo</Button>
                    }
                    <Button className="ml-5 w-52" disabled={!isEdited} onClick={handleSave}>Save</Button>
                </div>
            </div>
        </div>
    );
};
