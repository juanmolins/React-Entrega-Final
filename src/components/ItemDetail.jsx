import React, { useState } from 'react'
import ItemCount from "./ItemCount"
import { useCartContext } from '../context/CartContext'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const ItemDetail = ({producto}) => {

    const [goToCart, setGoToCart] = useState(false)    
    const {addProduct} = useCartContext();

    const onAdd = (cantidad) => {
        setGoToCart(true);
        addProduct(producto, cantidad);
      }
    
    return (
        <div className='d-flex flex-column align-items-center m-4'>
            <h3> {producto.categoria} {producto.nombre}</h3>
            <img src= {producto.img} alt={producto.nombre}/>
            <p className='mt-1 fst-italic'> {producto.descripcion}</p>
            <h3> $ {producto.precio}</h3>
            {goToCart ? (
            <>
            <Button as={Link} to={`/`} variant="warning">Seguir comprando</Button>
            <Button as={Link} to={`/cart`} variant="success" className='m-1'>Ir al carrito</Button>
            </>
            ) : (
                <ItemCount stock={producto.stock} onAdd={onAdd} />
            )}
        </div>
    )
}

export default ItemDetail

