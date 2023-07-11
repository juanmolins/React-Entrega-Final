import React from 'react'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";
import Imagen from '../imagesComp/logo.PNG'

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
             <img src={Imagen} alt="Logo Pizzatto" />
          </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#features">Productos</Nav.Link>
              <Nav.Link href="#pricing">Nosotros</Nav.Link>
            </Nav>
          <CartWidget />
        </Container>

      </Navbar>
    </>
  );
}

export default ColorSchemesExample;