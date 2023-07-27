import React, {useState} from 'react';
import { Button } from 'react-bootstrap';

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)
    const sumar = () => {
        if (count < stock){
        setCount(count + 1)
        }
    }
    const restar = () => {
        if(count >0) {
            setCount(count - 1)        
        }
    }
    return(
        <div className='d-flex flex-column align-items-center'>
            <div>
                <Button variant="secondary" onClick={restar}>-</Button>
                <span className="btn"> {count} </span>
                <Button variant="secondary" onClick={sumar}>+</Button>
            </div>
            <Button className="mt-2" variant="warning" disabled={count === 0 || count >= stock } onClick={()=>onAdd(count)}>Añadir al carrito</Button>
        </div>
    )
}

export default ItemCount
