import { createContext } from "react";
import { useState, useContext, useEffect } from "react";


export const CartContext = createContext()

// const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];


export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const handleIncrementoTotal = (nuevaCantidad) => {
        setCantidadTotal(cantidadTotal + nuevaCantidad)
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
        setCarrito(nuevoCarrito);
    }

    const sacarProducto = (itemAgregado) => {
        const agregadoAlcarrito = carrito.find(x => x === itemAgregado)
        if (agregadoAlcarrito) {

        }
    }

    const cantidadCarrito = () => {
        return carrito.length ? carrito.reduce((acc, prod) => acc + prod.precio * prod.contador) : 0, 0;

    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.contador, 0);

    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }


    return (
        <div>
            <CartContext.Provider value={{ carrito, handleAgregarProducto, handleIncrementoTotal, cantidadCarrito, precioTotal, vaciarCarrito }} >
                {children}
            </CartContext.Provider>
        </div>
    )
}


export default CartContext

