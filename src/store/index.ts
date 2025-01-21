import {create} from "zustand/react";
import {immer} from "zustand/middleware/immer";
import {countries, departments, statuses, users} from "./mock.ts";

export interface IKeyValue {
    name: string;
    value: string;
}

export interface IUser {
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
    updateUser: (index: number, user: IUser) => void;
    addUser: (user: IUser) => void;
    deleteUser: (index: number) => void;
}

export const useUserStore = create<IUserState>()(immer((set) => ({
    users: users,
    statuses: statuses,
    departments: departments,
    countries: countries,

    updateUser: (index, user: IUser) => {
        set((state) => {
            state.users[index] = user;
        });
    },

    addUser: (user: IUser) => {
        set((state) => {
            state.users.push(user);
        });
    },

    deleteUser: (index: number) => {
        set((state) => {
            state.users = state.users.filter((_, i) => i !== index);
        });
    },

})));
