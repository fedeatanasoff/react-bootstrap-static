import React, { Component } from 'react'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Todo from './components/Todo/Todo'
import MenuNavbar from './components/MenuNavbar/MenuNavbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <MenuNavbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/blog' component={Blog} />
          <Route path='/todo' component={Todo} />
        </div>
      </Router>
    )
  }
}

export default App
