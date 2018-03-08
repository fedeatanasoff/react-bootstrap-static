import React from 'react'

const Formulario = props => (
  <div className='row'>
    <div className='col-md-4 col-md-offset-4'>
      <form onSubmit={props.agregar}>
        <div className='form-group'>
          <label>Tarea</label>
          <input className='form-control' id='tarea' placeholder='tarea..' />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <select className='form-control' id='prioridad'>
            <option>Alta</option>
            <option>Intermedia</option>
            <option>Baja</option>
          </select>
        </div>

        <button className='btn btn-primary'>Agregar</button>
      </form>
    </div>

  </div>
)

export default Formulario
