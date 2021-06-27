import React from 'react';
import TableComponent from '../utilities/table';

const Positions = () => {
    const columnNames = ["ID", "NAME"];
    return (
        <TableComponent columns={columnNames} />
    )
}

export default Positions;