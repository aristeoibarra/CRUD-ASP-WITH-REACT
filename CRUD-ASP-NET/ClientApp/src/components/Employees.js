import React from 'react';
import TableComponent from '../utilities/table';
import Title from '../utilities/title';

const Employees = () => {
  const columnNames = ["ID", "NAME", "LAST NAME", "DEPARMENT", "POSITION", "SALARY"];
  return (
    <>
      <Title text={"Employees"} />
      <TableComponent columns={columnNames} />
    </>


  )
}

export default Employees;