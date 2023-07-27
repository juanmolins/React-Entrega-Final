import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


const Item = ({prod}) => {
    return (
        <Card style={{ width: '250px', margin: '10px' }}>
      <Card.Body>
      <Card.Img variant="top" src={prod.img} />
        <Card.Title> {prod.nombre} </Card.Title>
        <Card.Text className='fst-italic'>
          {prod.descripcion}
        </Card.Text>
        <Card.Title> ${prod.precio} </Card.Title>
        <Button as={Link} to={`/item/${prod.id}`} variant="warning">Ver más</Button>
        </Card.Body>
    </Card>
    )
}

export default Item