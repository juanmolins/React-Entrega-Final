import React, { useState, useContext } from 'react'
const CartContext = React.createContext('');

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    console.log('carrito', cart);

    const clearCart = () => setCart([]);   //Limpiar carrito

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false; // Verifica si el producto ya esta en el carrito

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));  // Remueve producto, copia el carrito sin el id seleccionado

    const addProduct = (item, newQuantity) => {                                        // Chequea si el producto ya esta en el carro para sumarle y no reemplazar la cantidad si hace falta
        const { quantity = 0 } = cart.find(prod => prod.id === item.id) || {};   
        const newCart = cart.filter(prod => prod.id !== item.id);
        setCart([...newCart, {...item, quantity: quantity + newQuantity }])
    }

    const totalPrice = () => {                                                          //Suma el precio total del carrito
        return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
    }

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)   // Suma la cantidad de productos en el carrito

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            { children }
        </CartContext.Provider>
    )

}

export default CartProvider