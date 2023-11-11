import React, { useState } from 'react'
import { useContext } from 'react';
import CartContext from './CartContext';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);
        toast.success('¡Muchas gracias por tu compra! Que la disfrutes :)');

        const pedidosRef = collection(db, "pedidos")

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
    }

    if (pedidoId) {
        return (
            <div className="container">
                <h2 className="barrasubt">¡Muchas gracias por tu compra!</h2>
                <h3> Tu número de pedido es: </h3>
                <p>{pedidoId} </p>

            </div>
        )
    }

    return (
        <div className="container">
            <h2 className="barrasubt">Terminar Compra</h2>

            <form className="form" onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder='Dejanos tu nombre' {...register("nombre")} />
                <input type="email" required="@" placeholder='Dejanos tu e-mail' {...register("email")} />
                <input type="text" className="form-telefono" placeholder='Dejanos tu teléfono'{...register("telefono")} />
                <button type='submit'> COMPRAR</button>

            </form>
        </div>
    )
}

export default Checkout