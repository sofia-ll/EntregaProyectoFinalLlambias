import React from "react"
import { Link } from "react-router-dom"
import CartContext from "./CartContext"
import { useContext } from "react"

const CartWidget = (props) => {
    const cantidadCarrito = useContext(CartContext);
    return (
        <div>
            <Link to="/carrito"><button onClick={() => navigate("/carrito")}><CartWidget icono_carrito="" numero_carrito={cantidadCarrito} /></button></Link>
            <i className="bi bi-cart-fill icono_carrito">{props.icono_carrito}</i>
            <p className="numero_carrito">{props.numero_carrito}</p>
        </div>
    )
}
export default CartWidget