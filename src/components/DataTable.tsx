import {TrashIcon} from "@radix-ui/react-icons";
import {IUser} from "../store";
import React from "react";


interface DataTableProps {
    data: IUser[];
    onAction: (index: number) => void;
}

export const DataTable: React.FC<DataTableProps> = ({data, onAction}) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                    <thead>
                    <tr className="text-sm font-bold">
                        <th className="px-9 py-7 text-left">Full Name</th>
                        <th className="px-9 py-7 text-left">Department</th>
                        <th className="px-9 py-7 text-left">Country</th>
                        <th className="px-9 py-7 text-left">Status</th>
                        <th className="px-9 py-7 text-center">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data && data.length ? data.map((item, index) => (
                            <tr key={index} className="text-sm font-light">
                                <td className="px-9 py-7">{item.name}</td>
                                <td className="px-9 py-7">{item.department.name}</td>
                                <td className="px-9 py-7">{item.country.name}</td>
                                <td className="px-9 py-7">{item.status.name}</td>
                                <td className="flex justify-center px-9 py-7">
                                    <div onClick={() => onAction(index)}><TrashIcon className="size-5"/></div>
                                </td>
                            </tr>
                        )) : <tr>
                            <td className="px-9 py-7">No data</td>
                        </tr>
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
