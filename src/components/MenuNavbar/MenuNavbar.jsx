import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './MenuNavbar.css'

export default class MenuNavbar extends Component {
  render () {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/' className='brand-logo'>
              Fede Atanasoff
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href='/' to='/'>
              Home
            </NavItem>
            <NavItem
              eventKey={2}
              componentClass={Link}
              href='/about'
              to='/about'
            >
              About
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href='/blog' to='/blog'>
              Blog
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href='/todo' to='/todo'>
              TodoApp
            </NavItem>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
