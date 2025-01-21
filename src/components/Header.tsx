import React from 'react';
import {Button} from "./shared";

export const Header = () => {
    return (
        <div className="flex h-20 items-center justify-center space-x-5 border border-black">
            <Button className="w-52">Edit Users</Button>
            <Button className="w-52">Users</Button>
        </div>
    );
};

