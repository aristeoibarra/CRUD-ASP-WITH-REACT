import React from 'react';
import TableComponent from '../utilities/table';

const Departments = () => {
    const columnNames = ["ID", "NAME"];
    return (
        <TableComponent columns={columnNames} />
    )
}

export default Departments;