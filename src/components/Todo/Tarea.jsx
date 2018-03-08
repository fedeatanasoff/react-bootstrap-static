import React from 'react'
import { Table } from 'react-bootstrap'

const Tarea = props => (
  <div className='row'>
    <div className='col-md-6 col-md-offset-3'>
      <br />
      <Table striped bordered condensed hover className='text-center'>
        <thead>
          <tr>
            <th className='text-center'># Id</th>
            <th className='text-center'>Tarea</th>
            <th className='text-center'>Prioridad</th>
            <th className='text-center'>Accion</th>
          </tr>
        </thead>
        <tbody>
          {props.tarea.map((tarea, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{tarea.nombre}</td>
              <td>{tarea.prioridad}</td>
              <td>
                <button
                  onClick={props.eliminar}
                  data-key={index}
                  className='btn btn-danger btn-xs'
                >
                  Eliminar

                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  </div>
)

export default Tarea
