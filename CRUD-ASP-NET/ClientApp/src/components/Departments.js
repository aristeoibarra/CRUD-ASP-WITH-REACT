import React from 'react';
import TableComponent from '../utilities/table';
import Title from '../utilities/title';

const Departments = () => {
    const columnNames = ["ID", "NAME"];
    return (
        <>
            <Title text="Departments"/>
            <TableComponent columns={columnNames} />
        </>
    )
}

export default Departments;