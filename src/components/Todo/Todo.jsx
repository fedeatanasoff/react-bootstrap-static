import React, { Component } from 'react'
import Formulario from './Formulario'
import Tarea from './Tarea'
import PropTypes from 'prop-types'
import { Grid, Well } from 'react-bootstrap'

class Todo extends Component {
  constructor () {
    super()

    this.state = {
      tarea: JSON.parse(localStorage.getItem('tareas'))
    }

    this.agregar = this.agregar.bind(this)
    this.eliminar = this.eliminar.bind(this)
  }

  agregar (e) {
    e.preventDefault()
    let form = e.target
    let tarea = form.tarea.value ? form.tarea.value : Todo.defaultProps.nombre
    let prioridad = form.prioridad.value
    let addTarea = { nombre: tarea, prioridad: prioridad }

    console.log(`Tarea agregada: ${tarea} - Prioridad: ${prioridad}`)

    if (localStorage.getItem('tareas') == null) {
      let tareas = []
      tareas.push(addTarea)
      localStorage.setItem('tareas', JSON.stringify(tareas))
    } else {
      let tareas = JSON.parse(localStorage.getItem('tareas'))
      tareas.push(addTarea)
      localStorage.setItem('tareas', JSON.stringify(tareas))
    }

    this.setState({
      tarea: JSON.parse(localStorage.getItem('tareas'))
    })

    form.reset()
  }

  eliminar (e) {
    e.preventDefault()

    let form = e.target
    let index = form.getAttribute('data-key')
    console.log(index)
    let tareas = JSON.parse(localStorage.getItem('tareas'))
    tareas.splice(index, 1)

    this.setState({
      tarea: tareas
    })

    localStorage.setItem('tareas', JSON.stringify(tareas))
  }

  render () {
    return (
      <Grid>
        <h2 className='text-center'>TodoApp & Local Storage</h2>
        <Formulario agregar={this.agregar} />
        {this.state.tarea.length === 0
          ? <div className='row'>
            <div className='col-md-6 col-md-offset-3'>
              <br />
              <Well bsSize='large'>
                  no hay tareas para mostrar.
                </Well>
            </div>
          </div>
          : <Tarea tarea={this.state.tarea} eliminar={this.eliminar} />}

      </Grid>
    )
  }
}

Todo.propTypes = {
  nombre: PropTypes.string.isRequired
}

Todo.defaultProps = {
  nombre: 'tarea sin nombre'
}

export default Todo
