import React, { useEffect } from 'react';
import TableComponent from '../utilities/table';
import Title from '../utilities/title';

const Employees = () => {
    const columnNames = ["ID", "NAME", "LAST NAME", "DEPARMENT", "POSITION", "SALARY"];

    const populateWeatherData = async () => {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        populateWeatherData();
    },[])

  return (
    <>
      <Title text={"Employees"} />
      <TableComponent columns={columnNames} />
    </>
    )

   
}

export default Employees;