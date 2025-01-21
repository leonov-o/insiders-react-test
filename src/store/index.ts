import {create} from "zustand/react";
import {persist} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import {countries, departments, statuses, users} from "./mock.ts";

interface IKeyValue {
    name: string;
    value: string;
}

interface IUser {
    name: string;
    status: IKeyValue;
    department: IKeyValue;
    country: IKeyValue;
}

interface IUserState {
    users: IUser[];
    statuses: IKeyValue[];
    departments: IKeyValue[];
    countries: IKeyValue[];
}

export const useUserStore = create<IUserState>()(immer(persist((set) => ({
    users: users,
    statuses: statuses,
    departments: departments,
    countries: countries,


}))));
