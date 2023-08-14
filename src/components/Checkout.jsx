import React, { useState } from 'react';
import CheckoutForm from './CheckoutForm';
import { Timestamp, addDoc, getFirestore, collection } from 'firebase/firestore';
import { useCartContext } from '../context/CartContext';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [ordenCreada, setOrdenCreada] = useState(''); 

    const { cart, totalPrice, clearCart } = useCartContext();

    const crearOrden = async ({ nombre, telefono, email }) => {
        setLoading(true);
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');

        const orderData = {
            comprador: {
                nombre,
                telefono,
                email,
            },
            items: cart.map(product => ({
                id: product.id,
                producto: product.nombre,
                precio: product.precio,
                cantidad: product.quantity,
            })),
            total: totalPrice(),
            fecha: Timestamp.fromDate(new Date()),
        };

        try {
            const docRef = await addDoc(ordersCollection, orderData);
            setOrdenCreada({...orderData, id: docRef.id});
            clearCart();
        } catch (error) {
            console.error('Error al crear la orden: ', error);
        }
        finally {
            setLoading(false); 
        }
    };

    const handleConfirm = (userData) => {
        crearOrden(userData);
    };

    return (
        <div>
           {loading ? (
                <div className="d-flex align-items-center flex-column m-3">
                <h3>Generando orden...</h3>
                <img src="./images/loading.gif" alt="Pedido procesado" />
                </div>
            ) : (
                ordenCreada ? (
                    <div className="d-flex align-items-center flex-column m-3">
                        <h3>Orden {ordenCreada.id} creada</h3>
                        <img src="https://i.postimg.cc/CxMHXKjj/check.jpg" alt="Pedido procesado" />
                    </div>
                    ) : (
                    <CheckoutForm onConfirm={handleConfirm} />
                    )
            )}
        </div>
    );
};

export default Checkout;
