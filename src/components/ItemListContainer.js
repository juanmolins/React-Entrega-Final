import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function ItemListContainer( {Imagen , Pizza , Ingredientes , Precio} ) {
  return (
    <Card style={{ width: '250px', margin: '10px' }}>
      <Card.Body>
      <Card.Img variant="top" src={ Imagen } />
        <Card.Title> { Pizza } </Card.Title>
        <Card.Text>
          { Ingredientes }
        </Card.Text>
        <Card.Title> { Precio } </Card.Title>
        <Button variant="warning">Añadir al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemListContainer;
