import {Filters} from "../components/Filters.tsx";
import {Header} from "../components";
import React, {useEffect, useState} from "react";
import {DataTable} from "../components/DataTable.tsx";
import {useUserStore} from "../store";

export const UsersPage = () => {
    const {users, deleteUser} = useUserStore();
    const [filters, setFilters] = useState({
        department: [],
        country: [],
        status: [],
    });
    const [filteredUsers, setFilteredUsers] = useState([]);



    useEffect(() => {
        const filtered = users.filter((item) => {
            return (
                (!filters.department.length || filters.department.some(filter => filter.name === item.department.name)) &&
                (!filters.country.length || filters.country.some(filter => filter.name === item.country.name)) &&
                (!filters.status.length || filters.status.some(filter => filter.name === item.status.name))
            );
        });
        setFilteredUsers(filtered);
    }, [filters, users]);


    return (
        <div>
            <Header/>

            <div className="mx-24 my-20 border border-black">
                <h2 className="mt-14 text-center text-2xl font-medium uppercase">Users</h2>
                <div className="p-14">
                    <Filters filters={filters} onChange={setFilters}/>
                </div>
                <div className="p-14">
                    <DataTable data={filteredUsers} onAction={(index) => deleteUser(index)}/>
                </div>
            </div>
        </div>
    );
};

