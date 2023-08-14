import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from "./CartWidget"
import {NavLink} from 'react-router-dom'

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to='/'>
             <img src="https://i.postimg.cc/MTkkZ96k/logo.png" alt="Logo Pizzatto" />
          </Navbar.Brand>
            <Nav className="me-auto fs-5">
              <Nav.Link as={NavLink} to='/' className="m-2">Inicio</Nav.Link>
              <Nav.Link as={NavLink} to='/categoria/Pizza' className="m-2">Pizzas</Nav.Link>
              <Nav.Link as={NavLink} to='/categoria/Cerveza' className="m-2">Cervezas</Nav.Link>
            </Nav>
          <CartWidget />
        </Container>

      </Navbar>
    </>
  );
}

export default ColorSchemesExample;