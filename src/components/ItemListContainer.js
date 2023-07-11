import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from '../images/especial.PNG'

function BasicExample() {
  return (
    <Card style={{ width: '16rem' , padding: '10px', margin: '10px' }}>
      <Card.Img variant="top" src= { Image } alt="Pizza Especial" />
      <Card.Body>
        <Card.Title>Especial</Card.Title>
        <Card.Text>
          Jamón, muzzarella y morrones
        </Card.Text>
        <Button variant="warning">Añadir al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
