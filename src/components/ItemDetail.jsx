import React from 'react'
import ItemCount from "./ItemCount"

const ItemDetail = ({producto}) => {
    
    const onAdd = (cantidad) => {
        console.log(`Añadiste ${cantidad} pizzas`)
      }
    
    return (
        <div className='d-flex flex-column align-items-center m-4'>
            <h3>Pizza {producto.nombre}</h3>
            <img src= {producto.img} alt={producto.name}/>
            <p className='mt-1 fst-italic'> {producto.descripcion}</p>
            <h3> $ {producto.precio}</h3>
            <ItemCount stock={producto.stock} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail

