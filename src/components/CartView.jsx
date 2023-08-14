import React from 'react';
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ItemCart from './ItemCart';


const Cart = () => {

    const {cart, totalPrice, clearCart} = useCartContext();

    if (cart.length === 0){
        return (
            <div className="d-flex align-items-center flex-column m-3">
            <>
                <h3>El carrito esta vacio</h3>
                <Button as={Link} to={`/`} variant="warning">Comenzar compra</Button>
            </>
            </div>
        );
    }

    return (
        <div className="d-flex align-items-center flex-column mb-3">
       <>
        {
            cart.map(producto => <ItemCart key={producto.id} producto={producto} />)
        }
        <h3>TOTAL: $ {totalPrice()} </h3>
        <div className="m-2">
        <Button as={Link} to={`/`} variant="warning" className="m-1" >Seguir comprando</Button>
        <Button as={Link} to={`/cart`} variant="danger" className="m-1" onClick={clearCart}>Limpiar carrito</Button>
        </div>
        <Button as={Link} to={`/checkout`} variant="success">Comprar carrito</Button>
       </>
        </div>
    )
}

export default Cart