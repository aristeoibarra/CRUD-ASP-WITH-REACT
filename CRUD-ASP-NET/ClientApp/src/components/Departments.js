import React, { useEffect, useState } from 'react';
import TableComponent from '../utilities/table';
import Title from '../utilities/title';

const Departments = () => {
    const columnNames = ["ID", "NAME"];
    const [dataPosition, setDataPosition] = useState([]);


    const postionsData = async () => {
        const response = await fetch('api/Departments');
        const data = await response.json();
 
        setDataPosition(data);
    }

    useEffect(() => {
        postionsData();
    }, [])

    console.log("data:->", dataPosition);
    return (
        <>
            <Title text="Departments" />
            <TableComponent columns={columnNames} />
        </>
    )
}

export default Departments;