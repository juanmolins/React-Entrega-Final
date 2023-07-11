import React from "react";
import { Cart } from 'react-bootstrap-icons';



function CartWidget() {

return(
    
    <>
    <Cart color="grey"></Cart>
    <div style= {{ color: 'grey' , padding: '10px' }}>0</div>
    </>
    
);
}

export default CartWidget;