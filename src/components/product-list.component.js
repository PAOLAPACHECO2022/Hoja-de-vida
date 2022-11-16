import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


export default class ProductList extends Component {
  render() {
    return <Table striped bordered hover>
      <thead>
        <tr class="bg-warning form-wrapper rounded-4">
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-light form-wrapper rounded-4">
          <td>Papa</td>
          <td>Papa Patusa Cultivada en Boyacá Tutasa</td>
          <td>1 bulto</td>
          <td>50000</td>
          <td> <Button variant="success">Borrar</Button>{' '}
          <Button variant="warning">Actualizar</Button>{' '} </td>

        </tr>
        <tr class="bg-light form-wrapper rounded-4">
          <td>Mango</td>
          <td>Mango Tomi cultivado en el Tolima la finca el Tobal</td>
          <td>1 caja</td>
          <td>200000</td>
          <td> <Button variant="success">Borrar</Button>{' '}
          <Button variant="warning">Actualizar</Button>{' '} </td>
        </tr>

      </tbody>
    </Table>



    
  }
}
