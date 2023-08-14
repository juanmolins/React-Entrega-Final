import React from "react";
import { Link } from 'react-router-dom';
import { Cart } from 'react-bootstrap-icons';
import { useCartContext } from "../context/CartContext";


export const CartWidget = () => {
    const { totalProducts } = useCartContext();

return(    
    <>
    <Link to="/cart" style={{ color: 'white' }}>
        <Cart />
    </Link>
    <div style= {{ color: 'white' , padding: '10px' }}>{totalProducts ()}</div>
    </>    
);
}

export default CartWidget;