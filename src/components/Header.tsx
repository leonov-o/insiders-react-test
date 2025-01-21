import React from 'react';
import {Button} from "./shared";
import {NavLink} from "react-router";

export const Header = () => {
    return (
        <div className="flex h-20 items-center justify-center space-x-5 border-b border-black">
            <NavLink to="/edit" className={({isActive}) => (isActive ? "bg-primary" : "")}>
                <Button className="w-52">Edit Users</Button>
            </NavLink>
            <NavLink to="/" className={({isActive}) => (isActive ? "bg-primary" : "")}>
                <Button className="w-52">Users</Button>
            </NavLink>

        </div>
    );
};

