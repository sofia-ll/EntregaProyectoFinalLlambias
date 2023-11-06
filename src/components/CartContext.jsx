import { createContext } from "react";
import { useState, useContext } from "react";

export const CartContext = createContext()
export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState(0)

    const handleIncrementoTotal = (nuevaCantidad) => {
        setCantidadTotal(cantidadTotal + nuevaCantidad)
    }

    const handleAgregarProducto = () => {

        const itemAgregado = { ...item, contador };

        const agregadoAlCarrito = carrito.find((producto) => producto.id === itemAgregado.id)

        setCarrito([...carrito, itemAgregado]);
        if (agregadoAlCarrito) {
            console.log("Agregaste una lámina al carrito")
        }
        else {
            console.log("No agregaste un producto a tu carrito")
        }

        setCarrito([...carrito, itemAgregado]);
    }


    const valorDelContexto = {
        cantidadTotal: cantidadTotal,
        incrementoTotal: handleIncrementoTotal,
    }

    return (
        <div>
            <CartContext.Provider value={valorDelContexto} >
                {children}
            </CartContext.Provider>
        </div>
    )
}


export default CartContext

