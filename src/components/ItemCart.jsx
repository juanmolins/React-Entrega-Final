import React from 'react';
import { useCartContext } from '../context/CartContext';

const ItemCart = ({ producto }) => {
    const { removeProduct } = useCartContext();

    return (
        <div className='itemCart d-flex flex-row align-items-center m-3'>
            <img src= {producto.img} alt={producto.nombre} style={{ width: '150px', margin: '5px' }}/>
            <div className='d-flex-column m-1'>
                <p>Producto: {producto.categoria} {producto.nombre}</p>
                <p>Cantidad: {producto.quantity}</p>
                <p>Subtotal: ${producto.quantity * producto.precio}</p>
                <button onClick={() => removeProduct(producto.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart