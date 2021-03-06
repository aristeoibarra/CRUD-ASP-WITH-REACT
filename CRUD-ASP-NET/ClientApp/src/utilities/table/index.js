import React from 'react';
import { Table } from 'reactstrap';

const TableComponent = ({ columns = [] }) => {


  const renderColumns = () => {
    let render = [];
    for (let i = 0; i < columns.length; i++) {
      render.push(
        <React.Fragment key={i}>
          <th>{columns[i]}</th>
        </React.Fragment>
      )
    }
    return render;
  }

  return (
    <Table hover>
      <thead>
        <tr>
          {
            renderColumns()
          }
        </tr>
      </thead>
      <tbody>
        {/*  <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>
  )
}

export default TableComponent;