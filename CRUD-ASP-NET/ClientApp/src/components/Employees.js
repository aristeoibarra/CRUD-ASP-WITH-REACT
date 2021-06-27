import React from 'react';
import TableComponent from '../utilities/table';

const Employees = () => {
  const columnNames = ["ID", "NAME", "LAST NAME", "DEPARMENT", "POSITION", "SALARY"];
  return (
    <TableComponent columns={columnNames} />
  )
}

export default Employees;