import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const CheckoutForm = ({ onConfirm }) => {
    const [nombre, setNombre] = useState ('')
    const [telefono, setTelefono] = useState ('')
    const [email, setEmail] = useState ('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            nombre, telefono, email
        }

        onConfirm(userData)
    }

    return (
        <div className="d-flex justify-content-center m-4">    
            <Form onSubmit={handleConfirm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" value={nombre} onChange= {({target}) => setNombre(target.value)} />    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text" value={telefono} onChange= {({target}) => setTelefono(target.value)} />    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange= {({target}) => setEmail(target.value)} />    
                </Form.Group>
                <Button className="mt-3" variant="success" type="submit">
                    Terminar compra
                </Button>
            </Form>
        </div>
    )

    }

export default CheckoutForm