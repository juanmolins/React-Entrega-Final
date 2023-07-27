import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from "./CartWidget"
import Imagen from '../imagesComp/logo.PNG'
import {NavLink} from 'react-router-dom'

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to='/'>
             <img src={Imagen} alt="Logo Pizzatto" />
          </Navbar.Brand>
            <Nav className="me-auto fs-5 m-3">
              <Nav.Link as={NavLink} to='/'>Inicio</Nav.Link>
              <Nav.Link as={NavLink} to='/categoria/pizzas'>Pizzas</Nav.Link>
              <Nav.Link as={NavLink} to='/categoria/cervezas'>Cervezas</Nav.Link>
            </Nav>
          <CartWidget />
        </Container>

      </Navbar>
    </>
  );
}

export default ColorSchemesExample;