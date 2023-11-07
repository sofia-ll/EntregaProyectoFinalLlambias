import { createContext } from "react";
import { useState, useContext } from "react";
import { toast } from "sonner";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [carritoLength, setCarritoLength] = useState(0)

    const handleIncrementoTotal = (nuevaCantidad) => {
        setCantidadTotal(cantidadTotal + nuevaCantidad)
    }

    const valorDelContexto = {
        cantidadTotal: cantidadTotal,
        incrementoTotal: handleIncrementoTotal,
    }

    const handleAgregarProducto = (item, contador) => {

        const itemAgregado = { ...item, contador };

        const nuevoCarrito = [...carrito];
        const agregadoAlCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id)

        if (agregadoAlCarrito) {
            agregadoAlCarrito.contador += contador;
        }
        else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito([nuevoCarrito]);
    }

    const removeItem = () => {
        const agregadoAlcarrito = carrito.find(x => x === itemAgregado)
        if (agregadoAlcarrito) {

        }

    }

    const cantidadCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    return (
        <div>
            <CartContext.Provider value={{ valorDelContexto, handleAgregarProducto, handleIncrementoTotal, cantidadCarrito }} >
                {children}
            </CartContext.Provider>
        </div>
    )
}


export default CartContext

