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

    const handleAgregarProducto = () => {

        const itemAgregado = { ...item, contador };

        const agregadoAlCarrito = carrito.find((producto) => producto.id === itemAgregado.id)

        setCarrito([...carrito, itemAgregado]);
        if (agregadoAlCarrito) {
            toast.success('"Agregaste una lámina al carrito"')
        }
        else {
            toast.success('No agregaste un producto a tu carrito')
        }

        setCarrito([...carrito, itemAgregado]);
    }

    const removeItem = () => {

    }


    return (
        <div>
            <CartContext.Provider value={{ valorDelContexto, handleAgregarProducto, handleIncrementoTotal }} >
                {children}
            </CartContext.Provider>
        </div>
    )
}


export default CartContext

