import React from 'react';
import TableComponent from '../utilities/table';
import Title from '../utilities/title';

const Positions = () => {
    const columnNames = ["ID", "NAME"];
    return (
        <>
            <Title text="Positions" />
            <TableComponent columns={columnNames} />
        </>
    )
}

export default Positions;