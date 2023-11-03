import React from 'react'
import { useState } from 'react'

const CartContext = (props) => {

    const [carrito, setCarrito] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState(0)

    const handleIncrementoTotal = (nuevaCantidad) => {
        setCantidadTotal(cantidadTotal + nuevaCantidad)
    }

    const handleAgregarProducto = (producto, cantidad) => {
        // consignas
    }

    const valorDelContexto = {
        cantidadTotal: cantidadTotal,
        incrementoTotal: handleIncrementoTotal,
    }

    return (
        <div>
            <Provider value={valorDelContexto} >
                {props.children}
            </Provider>
        </div>
    )

}

export default CartContext

